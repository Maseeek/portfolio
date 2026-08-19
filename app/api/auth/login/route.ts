import { NextResponse } from "next/server";
import { signSession, getOwnerSecret, getSessionCookieName } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { secret } = body;

    if (!secret || typeof secret !== "string") {
      return NextResponse.json(
        { error: "Secret key is required" },
        { status: 400 }
      );
    }

    const expectedSecret = getOwnerSecret();
    if (secret !== expectedSecret) {
      return NextResponse.json(
        { error: "Invalid owner secret key" },
        { status: 401 }
      );
    }

    // Generate signed token
    const token = await signSession();

    const response = NextResponse.json(
      { success: true, message: "Authenticated as Owner" },
      { status: 200 }
    );

    // Set HTTP-only session cookie
    response.cookies.set(getSessionCookieName(), token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error during authentication" },
      { status: 500 }
    );
  }
}
