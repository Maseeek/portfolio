import { NextResponse, NextRequest } from "next/server";
import { signSession, isAllowedOwner, getSessionCookieName } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const storedState = req.cookies.get("google_oauth_state")?.value;

  const clientId = process.env.GOOGLE_CLIENT_ID || process.env.AUTH_GOOGLE_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET || process.env.AUTH_GOOGLE_SECRET;

  if (!code || !clientId || !clientSecret) {
    return NextResponse.redirect(
      new URL("/admin/login?error=invalid_oauth_request", req.url)
    );
  }

  try {
    const origin = req.nextUrl.origin;
    const redirectUri = `${origin}/api/auth/google/callback`;

    // 1. Exchange authorization code for tokens
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      console.error("Google OAuth token exchange error:", tokenData);
      return NextResponse.redirect(
        new URL("/admin/login?error=oauth_exchange_failed", req.url)
      );
    }

    // 2. Fetch Google user profile
    const userRes = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const userData = await userRes.json();
    const email = userData.email as string | undefined;
    const emailVerified = userData.email_verified as boolean | undefined;

    // 3. Verify against Owner Whitelist
    if (!email || !emailVerified || !isAllowedOwner({ email })) {
      console.warn(`Unauthorized Google login attempt by ${email}`);
      return NextResponse.redirect(
        new URL("/admin/login?error=unauthorized_account", req.url)
      );
    }

    // 4. Issue session cookie and redirect to /admin
    const sessionToken = await signSession();
    const response = NextResponse.redirect(new URL("/admin", req.url));

    response.cookies.set(getSessionCookieName(), sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    response.cookies.delete("google_oauth_state");
    return response;
  } catch (error) {
    console.error("Google OAuth callback error:", error);
    return NextResponse.redirect(
      new URL("/admin/login?error=oauth_server_error", req.url)
    );
  }
}
