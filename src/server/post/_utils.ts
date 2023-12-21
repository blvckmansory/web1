import { revalidateTag } from 'next/cache'

import { fetchStrapi, getStrapiMedia, type Populate, type FetchStrapiOptions } from '~/lib/strapi'

import type { PostAPI } from '~/shared/entities/post'

const convertPostApiResponse = (response: PostAPI) => ({
	...response.attributes,
	id: response.id,
	cover: getStrapiMedia(response.attributes.cover.data.attributes.url),
})

type Post = ReturnType<typeof convertPostApiResponse>

const REVALIDATE_TAG = '/posts'
const defaultQueries = {
	'sort[0]': 'publishedAt',
	'populate[cover][fields][0]': 'url',
	'populate[cover][fields][1]': 'placeholder',
} as const

const baseFetchStrapiPost = async <IsArray extends boolean = true, T = Post>(
	path: string,
	urlParamsObject: any = {},
	options: FetchStrapiOptions = {},
): Promise<Populate<T, IsArray>> =>
	fetchStrapi<Populate<PostAPI, IsArray>>(
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
			? data.map(convertPostApiResponse)
			: convertPostApiResponse(data)

		return {
			meta,
			data: mappedData as IsArray extends true ? T[] : T,
		}
	})

const revalidatePosts = () => revalidateTag(REVALIDATE_TAG)

export { defaultQueries, revalidatePosts, convertPostApiResponse, baseFetchStrapiPost }
export type { Post }
