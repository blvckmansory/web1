import type { StyleProps } from '~/lib/types'

import { fetchRandomPosts } from '~/server/post'

import { PostPreview } from '~/client/components/PostPreview'
import { SectionSuggests } from '~/client/components/Section'

type PostSuggestsProps = StyleProps & {
	excludeId?: string | number
}

const PostSuggests = async ({ style, className, excludeId }: PostSuggestsProps) => {
	const { data: posts } = await fetchRandomPosts({ excludeId, limit: 2 })

	if (!posts || posts.length < 2) {
		return null
	}

	return (
		<SectionSuggests
			style={style}
			className={className}
			minmax={['450px', '1fr']}>
			{posts.slice(0, 2).map((_post) => (
				<PostPreview
					{..._post}
					key={_post.id}
				/>
			))}
		</SectionSuggests>
	)
}

export { PostSuggests }
