import React from 'react'

import type { IconProps } from './types'

const CrossIcon: React.FC<IconProps> = ({ color, size, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill={color || 'currentColor'}
		stroke={color || 'currentColor'}
		width="24"
		height="24"
		viewBox="0 0 24 24"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}>
		<path d="M18 6 6 18" />
		<path d="m6 6 12 12" />
	</svg>
)

export { CrossIcon }
