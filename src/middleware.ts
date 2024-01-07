import { NextRequest, NextResponse } from 'next/server'

import { NODE_ENV } from './env'

const middleware = (request: NextRequest) => {
	const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

	const cspHeader =
		NODE_ENV === 'development'
			? ''
			: `
    script-src 'self' 'unsafe-inline' maps.googleapis.com;
    base-uri 'self';
    form-action 'self';
    object-src 'none';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`
	// Replace newline characters and spaces
	const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim()

	const requestHeaders = new Headers(request.headers)
	requestHeaders.set('x-nonce', nonce)

	requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)

	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	})
	response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)

	return response
}

const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		{
			source: '/((?!api|_next/static|_next/image|favicon.ico|*.css).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' },
			],
		},
	],
}

export default middleware
export { config }
