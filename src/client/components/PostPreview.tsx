import Markdown from 'markdown-to-jsx'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import type { PostPreview as PostPreviewType } from '~/shared/entities/post'

import { Text } from '~/client/ui/components/Text'
import { Image } from '~/client/ui/components/Image'
import { NavLink } from '~/client/ui/components/NavLink'
import { ArrowIcon } from '~/client/ui/(icons)/ArrowIcon'

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
				sizes="100vw"
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

		<NavLink
			href={`/posts/${id}`}
			className="group mt-3 text-link-default uppercase flex flex-row gap-x-2 items-center text-sm">
			<span>Подробнее</span>
			<ArrowIcon
				size={12}
				className="group-hover:translate-x-0.5 group-focus:translate-x-0.5 transition-transform"
			/>
		</NavLink>
	</article>
)

export { PostPreview }
export type { PostPreviewProps }
