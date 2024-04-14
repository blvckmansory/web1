import { clsx } from '~/lib/clsx'
import { formatDate } from '~/lib/helpers'
import type { StyleProps } from '~/lib/types'

import type { PostPreview } from '~/shared/entities/post'

import { Hint, Title } from '~/client/ui/components/Text'
import { MarkdownContent } from '~/client/components/MarkdownContent'

import styles from './styles.module.css'

type PostProps = StyleProps &
	PostPreview & {
		content: string
	}

const Post = async ({ cover, style, title, content, className, publishedAt }: PostProps) => (
	<article
		style={style}
		className={clsx(styles.container, className)}>
		<Title className={styles.title}>{title}</Title>
		<Hint className={styles.date}>Дата публикации: {formatDate(publishedAt)}</Hint>

		<div className="relative w-full aspect-[2/1] rounded-md my-8 overflow-hidden bg-no-repeat bg-cover border-content shadow-brand">
			<img
				loading="eager"
				src={cover.url}
				alt="post-card-image"
				fetchPriority="high"
				sizes="(max-width: 768px) 100vw, 900px"
				className="object-cover absolute inset-0"
			/>
		</div>

		<MarkdownContent className="text-justify">{content}</MarkdownContent>
	</article>
)

export { Post }
export type { PostProps }
