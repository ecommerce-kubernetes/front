import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hasToken = request.cookies.has("refreshToken");
  console.log(hasToken);
  if (!hasToken) {
    console.log("리프레시 토큰 없음");
    const unAuthorizedUrl = new URL("/unauthorized", request.url);
    unAuthorizedUrl.searchParams.set("message", "login_required");
    unAuthorizedUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(unAuthorizedUrl);
  }
}

export const config = {
  matcher: ["/cart/:path*", "/mypage/:path*"],
};
