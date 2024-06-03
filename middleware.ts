import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authСookie = cookies().get("session")?.value;

  if (!authСookie) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // update sesssion

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard"],
};
