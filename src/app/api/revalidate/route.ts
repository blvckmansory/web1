import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

const handler = (request: NextRequest) => {
	revalidatePath('/posts')
	revalidatePath('/tariff')

	revalidateTag('/posts')

	return NextResponse.json(
		{ message: 'Revalidate' },
		{ headers: new Headers(request.headers), status: 200, statusText: 'Success' },
	)
}

export { handler as GET, handler as POST }
