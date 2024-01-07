import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { fetchPreviewPosts } from '~/server/post'

import { NoData } from '~/client/components/NoData'
import { PostPreview } from '~/client/components/PostPreview'

import { LoadPostsButton } from './_components/LoadPostsButton'

type PostContainerProps = {
	page?: number
	perPage?: number
}

const PostContainer = async ({
	style,
	className,
	page = 1,
	perPage = 4,
}: StyleProps & PostContainerProps) => {
	const { data: posts, meta } = await fetchPreviewPosts({ start: 0, limit: page * perPage })

	if (!posts || !posts.length || !meta) {
		return <NoData />
	}

	const isMoreExists = meta.pagination.end < meta.pagination.total

	return (
		<div className="space-y-8 max-w-full h-auto">
			<div
				style={style}
				className={clsx('grid gap-8 grid-cols-1 md:grid-cols-2', className)}>
				{posts.map((post) => (
					<PostPreview
						{...post}
						key={post.id}
					/>
				))}
			</div>
			{isMoreExists ? <LoadPostsButton currentPage={page} /> : null}
		</div>
	)
}

export { PostContainer }
export type { PostContainerProps }
