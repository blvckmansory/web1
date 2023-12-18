import type { StyleProps } from '~/lib/types'

type PostListProps = StyleProps & {
	page?: number
	limit?: number
	pageSize?: number
}

const PostList = () => {}

export { PostList }
export type { PostListProps }
