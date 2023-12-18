import type { StyleProps, ReactChildren } from '~/lib/types'

type SectionGridProps = StyleProps & {
	children: ReactChildren

	gap?: [string | number, string | number]
	minmax?: [string | number, string | number]
}

const SectionGrid = ({
	children,
	className,
	gap = [20, 20],
	minmax = ['360px', 'auto'],
	...props
}: SectionGridProps) => (
	<div
		{...props}
		style={{
			display: 'grid',
			rowGap: gap[0],
			columnGap: gap[1],
			gridAutoFlow: 'dense',
			gridTemplateRows: 'auto',
			gridTemplateColumns: `repeat(auto-fit, minmax(${minmax[0]}, ${minmax[1]}))`,
		}}
		className={className}
	>
		{children}
	</div>
)

export { SectionGrid }
export type { SectionGridProps }
