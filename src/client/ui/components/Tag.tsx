import { clsx } from '~/lib/clsx'
import type { MergeWithHTMLProps } from '~/lib/types'

type TagProps = MergeWithHTMLProps<'span'>

const Tag = ({ className, children, ...props }: TagProps) => (
	<span
		{...props}
		className={clsx(
			'w-fit h-fit text-base uppercase py-1 px-4 border-px border-muted rounded-full',
			className,
		)}>
		{children}
	</span>
)

export { Tag }
export type { TagProps }
