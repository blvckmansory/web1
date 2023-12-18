import React from 'react'
import { VariantProps, tv } from 'tailwind-variants'

import type { IconProps } from './types'

type ArrowIconProps = IconProps & IconVariants

const ArrowIcon: React.FC<ArrowIconProps> = ({
	size,
	color,
	className,
	dir = 'right',
	...props
}) => (
	<svg
		viewBox="0 0 330 330"
		xmlns="http://www.w3.org/2000/svg"
		fill={color || 'currentColor'}
		stroke={color || 'currentColor'}
		width={size ? `${size}px` : '0.8em'}
		height={size ? `${size}px` : '0.8em'}
		className={iconStyles({ dir, className })}
		{...props}
	>
		<path
			id="XMLID_222_"
			d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
		/>
	</svg>
)

const iconStyles = tv({
	base: 'transition-all',
	variants: {
		dir: {
			up: '-rotate-90',
			left: 'rotate-180',
			right: 'rotate-0',
			down: 'rotate-90',
		},
	},
})

type IconVariants = VariantProps<typeof iconStyles>

export { ArrowIcon }
export type { IconVariants, IconProps }
