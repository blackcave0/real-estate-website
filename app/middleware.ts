// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes that require authentication
const protectedRoutes = ["/profile", "/properties", "/settings"];
const authRoutes = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  // Special case for profile route
  if (pathname === "/profile") {
    if (!token) {
      const url = new URL("/login", request.url);
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
  }

  // Handle API routes
  if (pathname.startsWith("/api/")) {
    if (pathname.startsWith("/api/auth/")) {
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("Authorization", `Bearer ${token}`);

    return NextResponse.next({
      headers: requestHeaders,
    });
  }

  // Handle page routes
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Prevent authenticated users from accessing auth pages
  if (authRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    'api/auth/:path*',
    "/properties/:path*",
    "/settings/:path*",
    "/api/:path*",
    "/login",
    "/register",
  ],
};
