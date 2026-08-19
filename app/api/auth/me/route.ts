import { NextResponse, NextRequest } from "next/server";
import { verifySession, getSessionCookieName } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(getSessionCookieName())?.value;
  const isAuthenticated = await verifySession(token);

  if (!isAuthenticated) {
    return NextResponse.json(
      { authenticated: false, role: "visitor" },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { authenticated: true, role: "owner" },
    { status: 200 }
  );
}
