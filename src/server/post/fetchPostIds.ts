import { baseFetchStrapiPost, type Post } from './_utils'

type PostId = Pick<Post, 'id'>

const fetchPostIds = async () => {
	try {
		return await baseFetchStrapiPost<true, PostId>('/posts', {
			'fields[0]': 'id',
		})
	} catch (error) {
		return { data: [] }
	}
}

export { fetchPostIds }
export type { PostId }
