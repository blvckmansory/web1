import type { CSSProperties } from 'react'

type IconProps = Partial<{
	size: number | string
	color: string
	style: CSSProperties
	className: string

	strokeWidth: string | number
}>

export type { IconProps }
