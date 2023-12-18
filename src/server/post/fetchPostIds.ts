import { baseFetchStrapiPost, type Post } from './_utils'

type PostId = Pick<Post, 'id'>

const fetchPostIds = async () =>
	baseFetchStrapiPost<true, PostId>('/posts', {
		'fields[0]': 'id',
	})

export { fetchPostIds }
export type { PostId }
