import { STRAPI_API_KEY } from '~/env'

import { getStrapiURL } from './utils'
import { revalidateTag } from 'next/cache'

type FetchNextOptions = {
	next?: Partial<{
		tags: string[]
		revalidate: number | 0 | false
		cache: 'force-cache' | 'no-store'
	}>
}

type FetchStrapiOptions = RequestInit & FetchNextOptions

const REVALIDATE_TAG = '/strapi'

const revalidateStrapi = () => revalidateTag(REVALIDATE_TAG)

const fetchStrapi = async <T = any>(
	path: string,
	urlParamsObject: any = {},
	options: FetchStrapiOptions = {},
): Promise<T> => {
	try {
		// Merge default and user options
		const mergedOptions = {
			method: 'GET',
			headers: {
				Accept: '*/*',
				Authorization: `Bearer ${STRAPI_API_KEY}`,
			},
			next: {
				revalidate: 15,
				cache: 'force-cache',
				tags: [REVALIDATE_TAG],
				// ...options?.next,
			},
			...options,
		}

		// Build request URL
		const queries = new URLSearchParams(urlParamsObject)

		const requestUrl = `${getStrapiURL(`/api${path}?${queries.toString()}`)}`

		// Trigger API call
		const response = await fetch(requestUrl, mergedOptions)

		const json = await response.json()

		if (!json.data) {
			throw new Error()
		}

		return json
	} catch (error) {
		throw new Error(`>> Strapi Fetch Error: ${path}`)
	}
}

export { fetchStrapi, revalidateStrapi }
export type { FetchStrapiOptions }
