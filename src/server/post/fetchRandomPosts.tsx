import type { PostPreview } from '~/shared/entities/post'

import { baseFetchStrapiPost } from './_utils'

type FetchRandomPostsArgs = {
	limit: number
	excludeId?: string | number
}

const fetchRandomPosts = async ({ limit, excludeId }: FetchRandomPostsArgs = { limit: 2 }) => {
	try {
		return await baseFetchStrapiPost<true, PostPreview>('/posts/random', {
			limit,
			id: excludeId,
		})
	} catch (error) {
		return { data: null, meta: null }
	}
}

export { fetchRandomPosts }
export type { FetchRandomPostsArgs }
