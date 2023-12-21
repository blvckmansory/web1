import { baseFetchStrapiPost, type Post } from './_utils'

type FetchPreviewPostsArgs = {
	end?: number
	limit?: number
	start?: number
}

type PreviewPost = Pick<Post, 'id' | 'title' | 'description' | 'cover'>

const fetchPreviewPosts = async ({ end, start = 0, limit = 2 }: FetchPreviewPostsArgs = {}) => {
	try {
		return await baseFetchStrapiPost<true, PreviewPost>('/posts', {
			'fields[0]': 'title',
			'fields[1]': 'description',
			'pagination[limit]': limit,
			'pagination[start]': start,
			...(end ? { 'pagination[end]': end } : {}),
		})
	} catch (error) {
		return { data: null, meta: null }
	}
}

export { fetchPreviewPosts }
export type { PreviewPost, FetchPreviewPostsArgs }
