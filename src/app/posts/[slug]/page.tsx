import { notFound } from 'next/navigation'

import type { Page, GenerateMetadata } from '~/lib/types'

import { fetchPost, fetchPostIds, fetchPostMetadata } from '~/server/post'

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

	const { data: post } = await fetchPost(slug)

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
					id={post.id}
					title={post.title}
					cover={post.cover}
					publishedAt={post.publishedAt}
					description={post.description}
					className={styles.post_inner}>
					{post.content}
				</Post>
			</Section>

			<PostSuggests excludeId={slug} />
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
		keywords: post.description.split(' '),
		description: post.description.toString(),
		alternates: {
			canonical: `/posts/${slug}`,
		},
		twitter: {
			images: [post.cover],
			description: post.description,
			title: `${post.title} | Новости | Каршеринг Hello - Поминутная аренда автомобилей в Минске`,
		},
		openGraph: {
			type: 'article',
			images: [post.cover],
			description: post.description,
			publishedTime: post.publishedAt,
			title: `${post.title} | Новости | Каршеринг Hello - Поминутная аренда автомобилей в Минске`,
		},
	}
}

export default PostPage
export { generateMetadata, generateStaticParams }
