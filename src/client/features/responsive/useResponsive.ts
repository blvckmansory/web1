'use client'

import { useMemo } from 'react'

import { useMediaQuery } from './useMediaQuery'
import { MOBILE_VIEW_MAX_WIDTH } from './consts'

const useResponsive = (width: number | string = MOBILE_VIEW_MAX_WIDTH) => {
	const isTouch = useMediaQuery(width)
	return useMemo(() => ({ isTouch, isDesktop: !isTouch }), [isTouch])
}

export { useResponsive }
