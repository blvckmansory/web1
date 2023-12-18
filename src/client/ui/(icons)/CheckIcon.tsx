import type { IconProps } from './types'

type CheckIconProps = IconProps &
	Partial<{
		checked: boolean
		animated: boolean

		strokeWidth: string | number
	}>

const CheckIcon = ({
	color,
	size = '1em',
	checked = false,
	animated = true,
	strokeWidth = 2.5,
	...props
}: CheckIconProps) => (
	<svg
		width={size}
		height={size}
		role="presentation"
		viewBox="0 0 17 18"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<polyline
			fill="none"
			points="1 9 7 14 15 4"
			strokeWidth={strokeWidth}
			strokeDasharray={22}
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke="currentColor"
			strokeDashoffset={checked ? 44 : 66}
			style={
				animated && checked
					? {
							transition: 'stroke-dashoffset 250ms linear 0.2s',
					  }
					: {}
			}
		/>
	</svg>
)

export { CheckIcon }
export type { CheckIconProps }
