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

	const images = [post.cover.url]
	const title = `${post.title} | Новости | Каршеринг Hello - Поминутная аренда автомобилей в Минске`
	const description = String(post.description)

	return {
		title,
		description,
		keywords: description.split(' '),
		twitter: {
			title,
			images,
			description,
		},
		openGraph: {
			title,
			images,
			description,
			type: 'article',
			publishedTime: post.publishedAt,
		},
		alternates: {
			canonical: `/posts/${slug}`,
		},
	}
}

export default PostPage
export { generateMetadata, generateStaticParams }
