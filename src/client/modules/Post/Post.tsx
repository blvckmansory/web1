import { clsx } from '~/lib/clsx'
import { formatDate } from '~/lib/helpers'
import type { StyleProps } from '~/lib/types'

import type { PostPreview } from '~/shared/entities/post'

import { Image } from '~/client/ui/components/Image'
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

		<div className="relative w-full aspect-[2/1] rounded-md my-8 overflow-hidden bg-no-repeat bg-cover border-content shadow-brand">
			<Image
				fill
				priority
				src={cover.url}
				sizes="100vw"
				quality={100}
				alt="post-card-image"
				className="object-cover"
			/>
		</div>

		<MarkdownContent className="text-justify">{children}</MarkdownContent>
	</article>
)

export { Post }
export type { PostProps }
