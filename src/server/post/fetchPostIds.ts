import type { PostId } from '~/shared/entities/post'

import { fetchStrapi, StrapiResponse } from '~/lib/strapi'

const fetchPostIds = async () => {
	try {
		return await fetchStrapi<StrapiResponse<PostId[]>>('/post/ids')
	} catch (error) {
		return { data: [] }
	}
}

export { fetchPostIds }
