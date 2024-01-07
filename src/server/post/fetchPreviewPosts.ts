import type { PostPreview } from '~/shared/entities/post'

import { baseFetchStrapiPost } from './_utils'

type FetchPreviewPostsArgs = {
	end?: number
	limit?: number
	start?: number
}

const fetchPreviewPosts = async ({ start = 0, limit = 2 }: FetchPreviewPostsArgs = {}) => {
	try {
		return await baseFetchStrapiPost<true, PostPreview>('/posts', {
			start,
			limit,
		})
	} catch (error) {
		return { data: null, meta: null }
	}
}

export { fetchPreviewPosts }
export type { FetchPreviewPostsArgs }
