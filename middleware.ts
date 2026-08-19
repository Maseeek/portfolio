import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession, getSessionCookieName } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(getSessionCookieName())?.value;
  const isAuthenticated = await verifySession(token);

  // If user visits /admin/login while already authenticated, redirect to /admin
  if (pathname === "/admin/login") {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  // Handle protected /api/admin/* routes
  if (pathname.startsWith("/api/admin")) {
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: "Unauthorized. Owner access required." },
        { status: 401 }
      );
    }
    return NextResponse.next();
  }

  // Handle protected /admin/* routes
  if (pathname.startsWith("/admin")) {
    if (!isAuthenticated) {
      // Redirect to login with return path
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
  ],
};
