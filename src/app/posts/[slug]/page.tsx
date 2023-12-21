import { notFound } from 'next/navigation'

import type { Page, GenerateMetadata } from '~/lib/types'

import { fetchPostIds, fetchPostMetadata } from '~/server/post'

import { Breadcrumb } from '~/client/ui/components/Breadcrumb'

import { Post } from '~/client/modules/Post'
import { Section } from '~/client/components/Section'
import { PostSuggests } from '~/client/modules/PostSuggests'

import styles from './styles.module.css'

type Params = {
	slug: string
}

const PostPage: Page<Params> = async ({ params }) => {
	const slug = params.slug

	const { data: post } = await fetchPostMetadata(slug)

	if (!post) {
		notFound()
	}

	return (
		<>
			<Section className={styles.post__container}>
				<Breadcrumb
					items={[
						{ href: '/posts', text: 'Новости' },
						{ href: '#', text: post.title },
					]}
				/>

				<Post
					{...post}
					className={styles.post_inner}
				/>
			</Section>

			<PostSuggests />
		</>
	)
}

const generateStaticParams = async () => {
	const { data: posts } = await fetchPostIds()
	return posts.map((post) => ({
		slug: String(post.id),
	}))
}

const generateMetadata: GenerateMetadata<Params> = async ({ params }) => {
	const slug = params.slug
	const { data: post } = await fetchPostMetadata(slug)

	if (!post) {
		notFound()
	}

	return {
		title: post.title,
		description: post.description.toString(),
		openGraph: {
			type: 'article',
			title: `${post.title} | Новости | Каршеринг Hello - Поминутная аренда автомобилей в Минске`,
			images: [post.cover],
			publishedTime: post.publishedAt,
		},
	}
}

export default PostPage
export { generateMetadata, generateStaticParams }
