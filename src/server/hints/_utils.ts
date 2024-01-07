import { revalidateTag } from 'next/cache'

import { FetchStrapiOptions, Populate, fetchStrapi } from '~/lib/strapi'

import { HintType, type Hint } from '~/shared/entities/hint'

const REVALIDATE_TAG = '/hints'
const defaultQueries = {} as const

const revalidateHints = () => revalidateTag(REVALIDATE_TAG)

const baseFetchStrapiHint = async <IsArray extends boolean = true>(
	path: string,
	urlParamsObject: any = {},
	options: FetchStrapiOptions = {},
) =>
	fetchStrapi<Populate<Hint, IsArray>>(
		path,
		{
			...defaultQueries,
			...urlParamsObject,
		},
		{ ...options, next: { tags: [REVALIDATE_TAG], ...options.next } },
	)

export { HintType, defaultQueries, revalidateHints, baseFetchStrapiHint }
