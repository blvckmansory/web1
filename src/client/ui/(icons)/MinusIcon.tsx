import type { IconProps } from './types'

const MinusIcon = ({ style, className, size = '1rem', strokeWidth = 2 }: IconProps) => (
	<svg
		style={style}
		className={className}
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M6 12L18 12"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export { MinusIcon }
