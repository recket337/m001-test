import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authСookie = cookies().get("token");
  console.log('middlewareUrl', request.url,'nextUrl', request.nextUrl )

  if (!authСookie) {
    const loginUrl = new URL('/login', request.url);
    console.log('loginURL', request.url + '/login', 'base', request.url)
    loginUrl.searchParams.set('next', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard"],
};
