import { NextResponse, NextRequest } from "next/server";
import { signSession, isAllowedOwner, getSessionCookieName } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const storedState = req.cookies.get("oauth_state")?.value;

  const clientId = process.env.GITHUB_CLIENT_ID || process.env.AUTH_GITHUB_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET || process.env.AUTH_GITHUB_SECRET;

  if (!code || !clientId || !clientSecret) {
    return NextResponse.redirect(
      new URL("/admin/login?error=invalid_oauth_request", req.url)
    );
  }

  try {
    // 1. Exchange authorization code for access token
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      console.error("GitHub OAuth token exchange error:", tokenData);
      return NextResponse.redirect(
        new URL("/admin/login?error=oauth_exchange_failed", req.url)
      );
    }

    // 2. Fetch GitHub user profile
    const userRes = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "Maseeek-Portfolio-App",
      },
    });

    const userData = await userRes.json();
    const githubUsername = userData.login as string;

    // 3. Fetch user emails
    const emailsRes = await fetch("https://api.github.com/user/emails", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "Maseeek-Portfolio-App",
      },
    });

    const emailsData = await emailsRes.json();
    const emailList = Array.isArray(emailsData)
      ? emailsData.map((e: { email: string }) => e.email)
      : [];
    if (userData.email) emailList.push(userData.email);

    // 4. Verify against Owner Whitelist
    const isUsernameAllowed = isAllowedOwner({ githubUsername });
    const isEmailAllowed = emailList.some((email) => isAllowedOwner({ email }));

    if (!isUsernameAllowed && !isEmailAllowed) {
      console.warn(
        `Unauthorized GitHub login attempt by ${githubUsername} (${emailList.join(", ")})`
      );
      return NextResponse.redirect(
        new URL("/admin/login?error=unauthorized_account", req.url)
      );
    }

    // 5. Issue session cookie and redirect to /admin
    const sessionToken = await signSession();
    const response = NextResponse.redirect(new URL("/admin", req.url));

    response.cookies.set(getSessionCookieName(), sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    response.cookies.delete("oauth_state");
    return response;
  } catch (error) {
    console.error("GitHub OAuth callback error:", error);
    return NextResponse.redirect(
      new URL("/admin/login?error=oauth_server_error", req.url)
    );
  }
}
