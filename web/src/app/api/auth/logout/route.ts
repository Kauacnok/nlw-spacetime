import { NextRequest, NextResponse } from 'next/server'
import { api } from '../../../../lib/api'

export async function GET(request: NextRequest) {

	const redirectUrl = new URL('/', request.url)
	const cookieExpiresInSeconds = 60 * 60 * 24 * 30

	return NextResponse.redirect(redirectUrl, {
		headers: {
			'Set-Cookie': `token=; Path=/; max-age=0;`
		}
	})
}