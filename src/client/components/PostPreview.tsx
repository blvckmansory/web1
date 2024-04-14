import Link from 'next/link'
import Markdown from 'markdown-to-jsx'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import type { PostPreview as PostPreviewType } from '~/shared/entities/post'

import { Text } from '~/client/ui/components/Text'
import { Icon } from '~/client/ui/components/Icon'
import { Image } from '~/client/ui/components/Image'

type PostPreviewProps = StyleProps & PostPreviewType

const PostPreview = ({ id, title, cover, style, className, description }: PostPreviewProps) => (
	<article
		style={{
			...style,
			gridRow: 'span 4',
			gridTemplateRows: 'subgrid',
		}}
		className={clsx(
			'relative grid w-full border-content shadow-brand rounded-xl overflow-hidden [&>*]:px-6 pb-6 gap-y-0',
			className,
		)}>
		<div className="relative w-full aspect-[2/1] !px-0">
			<Image
				fill
				src={cover.url}
				quality={75}
				sizes="(min-width: 1200px) 50vw, 100vw"
				alt="post-card-image"
				className="object-cover"
			/>
		</div>

		<Text
			as="h2"
			size={18}
			weight={700}
			className="mt-6 line-clamp-1">
			{title}
		</Text>

		<Markdown className="mt-3 text-sm font-normal line-clamp-2 max-w-none">
			{description}
		</Markdown>

		<Link
			prefetch
			href={`/posts/${id}`}
			className="group mt-3 text-link-default font-medium uppercase flex flex-row gap-x-0 hover:text-link-active items-center text-sm transition-all">
			<span>Подробнее</span>
			<Icon
				size={18}
				strokeWidth={2}
				name="chevron-right"
				className="group-hover:translate-x-[3px] group-focus:translate-x-[3px] transition-transform"
			/>
		</Link>
	</article>
)

export { PostPreview }
export type { PostPreviewProps }
