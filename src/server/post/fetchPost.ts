import { baseFetchStrapiPost, type Post } from './_utils'

const fetchPost = async (id: string) => {
	try {
		return await baseFetchStrapiPost<false, Post>(`/posts/${id}`)
	} catch (error) {
		return { data: null }
	}
}

export { fetchPost }
