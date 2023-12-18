import type { CSSProperties } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

type BluredEllipseProps = StyleProps &
	Partial<{
		top: CSSProperties['top']
		left: CSSProperties['left']
		right: CSSProperties['right']
		bottom: CSSProperties['bottom']

		size: number
		color: string
	}>

const BluredEllipse = ({
	top,
	left,
	right,
	style,
	color,
	bottom,
	className,
	size = 500,
	...props
}: BluredEllipseProps) => (
	<div
		{...props}
		style={{
			top,
			left,
			right,
			bottom,
			filter: `blur(${size / 1.2}px)`,
			...style,
		}}
		className={clsx('!z-0 pointer-events-none absolute text-primary', className)}
	>
		<svg
			fill="none"
			width={size}
			height={size}
			viewBox="0 0 35 35"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				r="17.5"
				cx="17.5"
				cy="17.5"
				fill={color || 'currentColor'}
			/>
		</svg>
	</div>
)

export { BluredEllipse }
export type { BluredEllipseProps }
