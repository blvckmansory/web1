import { STRAPI_API_KEY } from '~/env'

import { getStrapiURL } from './utils'

type FetchNextOptions = {
	next?: {
		revalidate?: number | 0 | false
		cache?: 'force-cache' | 'no-store'
		tags?: string[]
	}
}

type FetchStrapiOptions = RequestInit & FetchNextOptions

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
				...options?.next,
			},
			...options,
		} as const

		// Build request URL
		const queries = new URLSearchParams(urlParamsObject)

		const requestUrl = `${getStrapiURL(`/api${path}?${queries.toString()}`)}`

		// Trigger API call
		const response = await fetch(requestUrl, mergedOptions)

		return response.json()
	} catch (error) {
		throw new Error(`>> Strapi Fetch Error: ${path}`)
	}
}

export { fetchStrapi }
export type { FetchStrapiOptions }
