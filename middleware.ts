import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();

  const expires = new Date()
  expires.setMinutes(expires.getMinutes() + 60)

  response.cookies.set({
    httpOnly: true,
    name: "random_string",
    value: Math.random().toString(),
    expires
  });

  return response;
}
