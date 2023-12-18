import { tv, type VariantProps } from 'tailwind-variants'

import type { MergeWithHTMLProps } from '~/lib/types'

type ListProps = MergeWithHTMLProps<'ul', ListVariants>

const List = ({ title, className, children, dir = 'y', ...props }: ListProps) => (
	<ul
		{...props}
		className={listVariants({ dir, className })}>
		{children}
	</ul>
)

const listVariants = tv({
	base: 'flex',
	variants: {
		dir: {
			x: 'flex-row gap-10',
			y: 'flex-col gap-4',
		},
	},
	defaultVariants: {
		dir: 'y',
	},
})

type ListVariants = VariantProps<typeof listVariants>

export { List }
export type { ListProps }
