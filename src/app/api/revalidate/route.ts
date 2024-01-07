import { NextRequest, NextResponse } from 'next/server'

import { revalidateStrapi } from '~/lib/strapi'

const handler = (request: NextRequest) => {
	revalidateStrapi()

	return NextResponse.json(
		{ message: 'Revalidated' },
		{ headers: new Headers(request.headers), status: 200, statusText: 'Success' },
	)
}

export { handler as GET, handler as POST }
