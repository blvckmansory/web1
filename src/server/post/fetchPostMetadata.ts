import type { PostMetadata } from '~/shared/entities/post'

import { baseFetchStrapiPost } from './_utils'

const fetchPostMetadata = async (id: string) => {
	try {
		return await baseFetchStrapiPost<false, PostMetadata>('/post', { id })
	} catch (error) {
		return { data: null, error }
	}
}

export { fetchPostMetadata }
