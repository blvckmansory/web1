import Markdown from 'markdown-to-jsx'
import { notFound } from 'next/navigation'

import { clsx } from '~/lib/clsx'
import { formatDate } from '~/lib/helpers'
import type { StyleProps } from '~/lib/types'

import { fetchPost, type PostMetadata } from '~/server/post'

import { Image } from '~/client/ui/components/Image'
import { Hint, Title } from '~/client/ui/components/Text'

import styles from './styles.module.css'

type PostProps = StyleProps & PostMetadata

const Post = async ({ id, cover, title, style, className, publishedAt }: PostProps) => {
	const { data: post } = await fetchPost(String(id))

	if (!post) {
		notFound()
	}

	return (
		<article
			style={style}
			className={clsx(styles.container, className)}>
			<Title className={styles.title}>{title}</Title>
			<Hint className={styles.date}>Дата публикации: {formatDate(publishedAt)}</Hint>

			<div className={`${styles.cover__container} border-content shadow-brand`}>
				<Image
					alt=""
					width={1000}
					height={1000}
					src={cover}
					className={styles.cover__img}
				/>
			</div>
			<Markdown className={styles.content}>{post.content}</Markdown>
		</article>
	)
}

export { Post }
export type { PostProps }
