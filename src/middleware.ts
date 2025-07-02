import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
	const cookies = getSessionCookie(request);
    const pathname = request.nextUrl.pathname
	if (!cookies) {
		return NextResponse.redirect(new URL("/agency/sign-up", request.url));
	}

    if(cookies && pathname.startsWith('/agency/sign-up')) {
        return NextResponse.redirect(new URL("/agency",request.url))
    }
	return NextResponse.next();
}

export const config = {
	matcher: ["/agency"],
};