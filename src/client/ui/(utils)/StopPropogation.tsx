'use client'

import { memo, forwardRef } from 'react'

import type { ReactPropsOf } from '~/lib/types'

const StopPropogation = memo(
	forwardRef<HTMLDivElement, ReactPropsOf<'div'>>(({ onClick, ...props }, ref) => (
		<div
			{...props}
			ref={ref}
			onClick={(event) => {
				event.preventDefault()
				event.stopPropagation()
				return onClick?.(event)
			}}
		/>
	)),
)

StopPropogation.displayName = 'StopPropogation'

export { StopPropogation }
