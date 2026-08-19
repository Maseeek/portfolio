// lib/auth.ts
// Single-Owner cryptographic session management for Antigravity Portfolio

const COOKIE_NAME = "portfolio_owner_session";
const DEFAULT_DEV_SECRET = "portfolio-owner-secret-2026";
const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7; // 7 days

export function getOwnerSecret(): string {
  return process.env.OWNER_SECRET_KEY || process.env.NEXT_AUTH_SECRET || DEFAULT_DEV_SECRET;
}

export function getSessionCookieName(): string {
  return COOKIE_NAME;
}

// Convert string to Uint8Array BufferSource
function stringToBufferSource(str: string): BufferSource {
  const encoded = new TextEncoder().encode(str);
  return encoded as unknown as BufferSource;
}

// Base64URL encoding
function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// Base64URL decoding
function base64UrlDecode(str: string): Uint8Array {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// Generate HMAC key from secret
async function getCryptoKey(secret: string): Promise<CryptoKey> {
  return await crypto.subtle.importKey(
    "raw",
    stringToBufferSource(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export interface SessionPayload {
  role: "owner";
  exp: number; // Unix timestamp in seconds
  iat: number;
}

/**
 * Sign a new session token for the Owner
 */
export async function signSession(secret?: string): Promise<string> {
  const secretKey = secret || getOwnerSecret();
  const payload: SessionPayload = {
    role: "owner",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS,
  };

  const payloadString = JSON.stringify(payload);
  const encodedPayload = base64UrlEncode(new TextEncoder().encode(payloadString));

  const key = await getCryptoKey(secretKey);
  const signatureBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    stringToBufferSource(encodedPayload)
  );

  const encodedSignature = base64UrlEncode(new Uint8Array(signatureBuffer));
  return `${encodedPayload}.${encodedSignature}`;
}

/**
 * Verify a session token against the Owner secret
 */
export async function verifySession(token: string | undefined | null, secret?: string): Promise<boolean> {
  if (!token || typeof token !== "string") return false;

  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [encodedPayload, encodedSignature] = parts;

  try {
    const payloadBytes = base64UrlDecode(encodedPayload);
    const payloadString = new TextDecoder().decode(payloadBytes);
    const payload: SessionPayload = JSON.parse(payloadString);

    // Check expiration
    if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000)) {
      return false;
    }

    if (payload.role !== "owner") {
      return false;
    }

    const secretKey = secret || getOwnerSecret();
    const key = await getCryptoKey(secretKey);
    const signatureBytes = base64UrlDecode(encodedSignature);

    return await crypto.subtle.verify(
      "HMAC",
      key,
      signatureBytes as unknown as BufferSource,
      stringToBufferSource(encodedPayload)
    );
  } catch {
    return false;
  }
}
