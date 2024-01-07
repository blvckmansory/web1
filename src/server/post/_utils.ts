import { revalidateTag } from 'next/cache'

import {
	fetchStrapi,
	getStrapiMedia,
	type StrapiResponse,
	type FetchStrapiOptions,
} from '~/lib/strapi'

import { Media } from '~/shared/entities/image'
import type { Post } from '~/shared/entities/post'

const REVALIDATE_TAG = '/posts'
const defaultQueries = {} as const

const convertPostResponse = <T extends { cover: Media }>(post: T) => ({
	...post,
	cover: {
		...post.cover,
		url: getStrapiMedia(post.cover.url),
	},
})

const baseFetchStrapiPost = async <IsArray extends boolean = true, T = Post>(
	path: string,
	urlParamsObject: any = {},
	options: FetchStrapiOptions = {},
): Promise<StrapiResponse<T, IsArray>> =>
	fetchStrapi<StrapiResponse<Post, IsArray>>(
		path,
		{
			...defaultQueries,
			...urlParamsObject,
		},
		{ ...options, next: { tags: [REVALIDATE_TAG], ...options.next } },
	).then(({ data, ...rest }) => {
		const mappedData = Array.isArray(data)
			? data.map(convertPostResponse)
			: convertPostResponse(data)

		return {
			...rest,
			data: mappedData as IsArray extends true ? T[] : T,
		}
	})

const revalidatePosts = () => revalidateTag(REVALIDATE_TAG)

export { defaultQueries, revalidatePosts, baseFetchStrapiPost }
export type { Post }
