import { NextRequest, NextResponse } from 'next/server'

import { REVALIDATE_SECRET } from '~/env'

import { revalidateStrapi } from '~/lib/strapi'

const handler = (request: NextRequest) => {
	const secret = request.nextUrl.searchParams.get('secret')

	if (secret !== REVALIDATE_SECRET) {
		return NextResponse.json(
			{ message: 'Oops..' },
			{ headers: new Headers(request.headers), status: 401, statusText: 'Error' },
		)
	}

	revalidateStrapi()

	return NextResponse.json(
		{ message: 'Revalidated' },
		{ headers: new Headers(request.headers), status: 200, statusText: 'Success' },
	)
}

export { handler as GET, handler as POST }
