'use client'

import { createContext, useContext } from 'react'

type SliderConfig = {
	loop?: boolean

	total: number

	activeSlide: number
	handleActiveSlide: (idx: number) => unknown
}

const SliderContext = createContext<SliderConfig>({} as SliderConfig)

const useSliderContext = () => {
	const ctx = useContext(SliderContext)

	if (!ctx) {
		throw new Error('`useSliderContext` can not be used outside the `SliderContext`')
	}

	return ctx
}

export { SliderContext, useSliderContext }
export type { SliderConfig }
