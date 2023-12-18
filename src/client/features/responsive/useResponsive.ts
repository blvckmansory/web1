'use client'

import { useMemo } from 'react'

import { useMediaQuery } from './useMediaQuery'
import { MOBILE_VIEW_MAX_WIDTH } from './consts'

const useResponsive = () => {
	const isTouch = useMediaQuery(MOBILE_VIEW_MAX_WIDTH)
	return useMemo(() => ({ isTouch, isDesktop: !isTouch }), [isTouch])
}

export { useResponsive }
