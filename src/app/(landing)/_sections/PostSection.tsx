import Link from 'next/link'

import { fetchPreviewPosts } from '~/server/post'

import { Title, Button } from '~/client/ui/components'

import { PostPreview } from '~/client/modules/PostPreview'
import { Section, SectionGrid, type SectionProps } from '~/client/components/Section'

const PostSection = async (props: SectionProps) => {
	const { data: posts } = await fetchPreviewPosts({ limit: 2, start: 0 })

	return (
		<Section
			{...props}
			id="news"
			className="flex flex-col gap-y-10">
			<Title>Наши новости</Title>
			<SectionGrid minmax={['280px', '1fr']}>
				{posts.slice(0, 2).map((post) => (
					<PostPreview
						{...post}
						key={post.id}
					/>
				))}
			</SectionGrid>
			<Link href="/posts">
				<Button full>Просмотреть все новости</Button>
			</Link>
		</Section>
	)
}

export { PostSection }
