import { tv } from 'tailwind-variants'

import type { MergeWithHTMLProps } from '~/lib/types'

type SpacerProps = MergeWithHTMLProps<
	'div',
	Partial<{
		full: boolean
		x: number | string
		y: number | string

		children: never
	}>
>

const Spacer = ({ x, y, full, style, className, ...props }: SpacerProps) => (
	<div
		{...props}
		style={{
			marginTop: y,
			marginLeft: x,
			...style,
		}}
		className={spacerStyles({ full, className })}
	/>
)

const spacerStyles = tv({
	base: 'relative select-none',
	variants: {
		full: {
			true: 'flex-1 w-full',
			false: '',
		},
	},
})

export { Spacer }
export type { SpacerProps }
