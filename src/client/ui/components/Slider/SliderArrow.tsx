'use client'

import { useMemo, useCallback } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { ArrowIcon } from '../../(icons)'

import { useSliderContext } from './context'

type SliderArrowState = 'left' | 'right'

type SliderArrowProps = StyleProps & {
	state: SliderArrowState

	onClick?: (slide: number) => unknown
}

const SliderArrow = ({ style, state, onClick, className }: SliderArrowProps) => {
	const { loop, total, activeSlide, handleActiveSlide } = useSliderContext()

	const nextSlide = useMemo(() => {
		let newSlide = activeSlide

		switch (state) {
			case 'left':
				newSlide--
				break
			case 'right':
				newSlide++
		}

		if (newSlide >= total) {
			return loop ? 0 : activeSlide
		}

		if (newSlide < 0) {
			return loop ? total - 1 : activeSlide
		}

		return newSlide
	}, [loop, state, total, activeSlide])

	const handleClick = useCallback(() => {
		handleActiveSlide(nextSlide)
		onClick?.(nextSlide)
	}, [nextSlide, onClick, handleActiveSlide])

	return (
		<div
			style={style}
			onClick={handleClick}
			className={clsx('text-default p-4 cursor-pointer', className)}>
			<ArrowIcon
				size={26}
				dir={state}
			/>
		</div>
	)
}

SliderArrow.displayName = '@hello/SliderArrow'

export { SliderArrow }
export type { SliderArrowProps }
