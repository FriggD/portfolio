import { NextResponse } from "next/server"

export async function POST() {
  // In a real app, you would clear the session cookie
  // For demo purposes, we'll just redirect to the login page

  return NextResponse.redirect(new URL("/admin", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"))
}
