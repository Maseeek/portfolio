import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID || process.env.AUTH_GITHUB_ID;

  if (!clientId) {
    return NextResponse.redirect(
      new URL("/admin/login?error=oauth_not_configured", req.url)
    );
  }

  const origin = req.nextUrl.origin;
  const redirectUri = `${origin}/api/auth/github/callback`;
  const state = Math.random().toString(36).substring(2, 15);

  const githubAuthUrl = new URL("https://github.com/login/oauth/authorize");
  githubAuthUrl.searchParams.set("client_id", clientId);
  githubAuthUrl.searchParams.set("redirect_uri", redirectUri);
  githubAuthUrl.searchParams.set("scope", "read:user user:email");
  githubAuthUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(githubAuthUrl.toString());
  response.cookies.set("oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 10, // 10 minutes
  });

  return response;
}
