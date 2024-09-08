'use server'
import { jwtDecode } from 'jwt-decode'
import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value

  if (accessToken === undefined) {
    if (request.nextUrl.pathname.match(/^\/dashboard(\/.*)?$/) != null) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    return
  }

  const decoded: Payload = jwtDecode(accessToken)

  if (decoded.role !== 'admin') {
    if (request.nextUrl.pathname.match(/^\/dashboard(\/.*)?$/) != null) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  if (request.nextUrl.pathname.match(/^\/auth(\/.*)?$/) != null) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
}
