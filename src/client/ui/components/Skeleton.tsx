import { clsx } from '~/lib/clsx'
import type { MergeWithHTMLProps } from '~/lib/types'

type SkeletonProps = MergeWithHTMLProps<
	'div',
	{
		width?: string | number
		height?: string | number
		disableAnimation?: boolean
	}
>

const Skeleton = ({
	style,
	width,
	height,
	className,
	disableAnimation = false,
	...props
}: SkeletonProps) => (
	<div
		{...props}
		style={{ width: width || '100%', height: height || '100%', ...style }}
		className={clsx('w-full h-full select-none bg-gray-400 rounded-md', className)}
	/>
)

Skeleton.displayName = 'Skeleton'

export { Skeleton }
export type { SkeletonProps }
