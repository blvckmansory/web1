import type { Post } from '~/shared/entities/post'

import { baseFetchStrapiPost } from './_utils'

const fetchPost = async (id: string) => {
	try {
		return await baseFetchStrapiPost<false, Post>('/post', { id })
	} catch (error) {
		return { data: null }
	}
}

export { fetchPost }
