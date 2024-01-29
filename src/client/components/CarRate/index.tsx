'use client'

import { memo } from 'react'

import { useMediaQuery } from '~/client/features/responsive'

import { CarRateMobile } from './CarRate.mobile'
import { CarRate as CarRateDefault } from './CarRate'

import type { CarRateProps } from './types'

const CarRate = memo<CarRateProps>((props) => {
	const isMobile = useMediaQuery(640)

	if (isMobile) {
		return <CarRateMobile {...props} />
	}

	return <CarRateDefault {...props} />
})

export { CarRate }
export type { CarRateProps }
