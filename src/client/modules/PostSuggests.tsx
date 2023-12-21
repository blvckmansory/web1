import { fetchPreviewPosts } from '~/server/post'

import { PostPreview } from '~/client/components/PostPreview'
import { SectionSuggests } from '~/client/components/Section'

const PostSuggests = async () => {
	const { data: posts } = await fetchPreviewPosts({ start: 0, limit: 2 })

	if (!posts || posts.length < 2) {
		return null
	}

	return (
		<SectionSuggests minmax={['450px', '1fr']}>
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
