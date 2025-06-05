import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirecionamentos para documentação
  if (pathname === "/documentacao" || pathname === "/docs") {
    return NextResponse.redirect("https://doc.apibrasil.io", 301)
  }

  // Redirecionamento para plataforma
  if (pathname === "/plataforma") {
    return NextResponse.redirect("https://app.apibrasil.io", 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/documentacao", "/docs", "/plataforma"],
}
