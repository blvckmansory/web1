import Link from 'next/link'

import { fetchPreviewPosts } from '~/server/post'

import { Title } from '~/client/ui/components/Text'
import { Button } from '~/client/ui/components/Button'

import { NoData } from '~/client/components/NoData'
import { PostPreview } from '~/client/components/PostPreview'
import { Section, SectionGrid, type SectionProps } from '~/client/components/Section'

const PostSection = async (props: SectionProps) => {
	const { data: posts } = await fetchPreviewPosts({ limit: 2 })

	if (!posts || !posts.length) {
		return <NoData />
	}

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
