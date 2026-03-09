import { auth } from "@auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth

  const isProtectedRoute =
    req.nextUrl.pathname.startsWith("/client") ||
    req.nextUrl.pathname.startsWith("/admin")

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/client/:path*", "/admin/:path*"],
}