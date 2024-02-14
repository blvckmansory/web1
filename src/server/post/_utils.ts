import {
	fetchStrapi,
	getStrapiMedia,
	type StrapiResponse,
	type FetchStrapiOptions,
} from '~/lib/strapi'

import type { Post } from '~/shared/entities/post'
import type { Media } from '~/shared/entities/image'

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
	fetchStrapi<StrapiResponse<Post, IsArray>>(path, urlParamsObject, { ...options }).then(
		({ data, ...rest }) => {
			const mappedData = Array.isArray(data)
				? data.map(convertPostResponse)
				: convertPostResponse(data)

			return {
				...rest,
				data: mappedData as IsArray extends true ? T[] : T,
			}
		},
	)

export { baseFetchStrapiPost }
export type { Post }
