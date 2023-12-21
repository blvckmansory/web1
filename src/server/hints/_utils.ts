import { revalidateTag } from 'next/cache'

import { FetchStrapiOptions, Populate, fetchStrapi } from '~/lib/strapi'

import { HintType, type HintAPI } from '~/shared/entities/hint'

const convertHintResponse = (response: HintAPI) => ({
	...response.attributes,
	id: response.id,
})

type Hint = ReturnType<typeof convertHintResponse>

const REVALIDATE_TAG = '/hints'
const defaultQueries = {} as const

const revalidateHints = () => revalidateTag(REVALIDATE_TAG)

const baseFetchStrapiHint = async <IsArray extends boolean = true, T = Hint>(
	path: string,
	urlParamsObject: any = {},
	options: FetchStrapiOptions = {},
): Promise<Populate<T, IsArray>> =>
	fetchStrapi<Populate<HintAPI, IsArray>>(
		path,
		{
			...defaultQueries,
			...urlParamsObject,
		},
		{ ...options, next: { tags: [REVALIDATE_TAG], ...options.next } },
	).then(({ data, meta }) => {
		if (!data) {
			throw new Error('>> Strapi fetch `data` is null')
		}

		const mappedData = Array.isArray(data)
			? data.map(convertHintResponse)
			: convertHintResponse(data)

		return {
			meta,
			data: mappedData as IsArray extends true ? T[] : T,
		}
	})

export { HintType, defaultQueries, revalidateHints, baseFetchStrapiHint }
export type { Hint }
