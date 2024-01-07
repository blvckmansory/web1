import type { PostId } from '~/shared/entities/post'

import { baseFetchStrapiPost } from './_utils'

const fetchPostIds = async () => {
	try {
		return await baseFetchStrapiPost<true, PostId>('/post/ids')
	} catch (error) {
		return { data: [] }
	}
}

export { fetchPostIds }
