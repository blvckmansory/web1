import { clsx } from '~/lib/clsx'
import { formatDate } from '~/lib/helpers'
import type { StyleProps } from '~/lib/types'

import type { PostPreview } from '~/shared/entities/post'

import { Hint, Title } from '~/client/ui/components/Text'
import { MarkdownContent } from '~/client/components/MarkdownContent'

import styles from './styles.module.css'

type PostProps = StyleProps &
	PostPreview & {
		children: string
	}

const Post = async ({ cover, title, style, className, children, publishedAt }: PostProps) => (
	<article
		style={style}
		className={clsx(styles.container, className)}>
		<Title className={styles.title}>{title}</Title>
		<Hint className={styles.date}>Дата публикации: {formatDate(publishedAt)}</Hint>

		<div
			style={{ backgroundImage: `url(${cover.url})` }}
			className={`${styles.cover__container} border-content shadow-brand`}
		/>

		<MarkdownContent>{children}</MarkdownContent>
	</article>
)

export { Post }
export type { PostProps }
