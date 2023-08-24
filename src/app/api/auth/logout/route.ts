import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  return NextResponse.redirect(new URL('/login', req.url), {
    headers: {
      'Set-Cookie': 'auth-case.token=; Path=/; max-age=;'
    }
  })
}
