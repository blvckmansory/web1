import type { Page } from '~/lib/types'

import { fetchPreviewPosts } from '~/server/post'

import { Text } from '~/client/ui/components/Text'
import { Section } from '~/client/components/Section'
import { PostPreview } from '~/client/modules/PostPreview'

import { LoadButton } from './_components/LoadButton'

import styles from './styles.module.css'

type SearchParams = {
	page: string
}

const postsPerPage = 2

const Posts: Page<{}, SearchParams> = async ({ searchParams }) => {
	const page = Number.parseInt(searchParams.page) || 1

	const pagination = {
		start: 0,
		limit: page * postsPerPage,
	}

	const { data: posts, meta } = await fetchPreviewPosts(pagination)

	const isMorePostsExists = meta.pagination.start + meta.pagination.limit < meta.pagination.total

	return (
		<Section className={styles.page}>
			<Text
				as="h1"
				uppercase
				weight={700}
				className={styles.title}>
				Новости
			</Text>
			<div className={styles.container}>
				{posts.map((post) => (
					<PostPreview
						{...post}
						key={post.id}
					/>
				))}
			</div>
			{isMorePostsExists ? <LoadButton currentPage={page} /> : null}
		</Section>
	)
}

export default Posts
