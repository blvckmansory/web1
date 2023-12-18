import { tv } from 'tailwind-variants'

import type { MergeWithHTMLProps } from '~/lib/types'

type DividerProps = MergeWithHTMLProps<
	'div',
	Partial<{
		dir: 'x' | 'y'

		children: never
	}>
>

const Divider = ({ className, dir = 'x', ...props }: DividerProps) => (
	<div
		{...props}
		className={dividerStyles({ dir, className })}
	/>
)

const dividerStyles = tv({
	base: 'relative z-0 bg-divider',
	variants: {
		dir: {
			x: 'w-full h-px',
			y: 'h-full w-px',
		},
	},
	defaultVariants: {
		dir: 'x',
	},
})

export { Divider }
export type { DividerProps }
