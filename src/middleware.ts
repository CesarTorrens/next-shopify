import { NextResponse } from "next/server";
import type { NextRequest } from "next/server"
import { cookies } from "next/headers";


export const config = {
    matcher: [
        '/login/:path',
        '/signup/:path'
    ]
}

export function middleware(request: NextRequest) {
    const cookiesStore = cookies()
    if (cookiesStore.get('accessToken')?.value) {

        return NextResponse.redirect(new URL('/', request.url))
    }
}