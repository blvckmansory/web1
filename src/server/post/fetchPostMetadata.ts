import { baseFetchStrapiPost, type Post } from './_utils'

type PostMetadata = Pick<Post, 'id' | 'title' | 'description' | 'cover' | 'publishedAt'>

const fetchPostMetadata = async (id: string) => {
	try {
		return await baseFetchStrapiPost<false, PostMetadata>(`/posts/${id}`)
	} catch (error) {
		return { data: null }
	}
}

export { fetchPostMetadata }
export type { PostMetadata }
