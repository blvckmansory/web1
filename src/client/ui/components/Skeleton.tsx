import { clsx } from '~/lib/clsx'
import type { MergeWithHTMLProps } from '~/lib/types'

type SkeletonProps = MergeWithHTMLProps<
	'div',
	{
		disableAnimation?: boolean
	}
>

const Skeleton = ({ className, disableAnimation = false, ...props }: SkeletonProps) => (
	<div
		{...props}
		className={clsx('w-full h-full select-none bg-gray-400 rounded-md', className)}
	/>
)

Skeleton.displayName = 'Skeleton'

export { Skeleton }
export type { SkeletonProps }
