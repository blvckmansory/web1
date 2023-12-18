'use client'

import '@splidejs/react-splide/css/core'

import { useRef, useState, useCallback, Children } from 'react'

import { Splide as SplideCore } from '@splidejs/splide'
import { Options, Splide, type SplideProps } from '@splidejs/react-splide'

import { SliderContext } from './context'
import { SliderControls } from './SliderControls'

type SliderProps = SplideProps & {
	loop?: boolean
	initial?: number
	withPagination?: boolean
}

const Slider = ({
	children,
	initial = 0,
	loop = false,
	withPagination = false,
	...props
}: SliderProps) => {
	const ref = useRef<Splide>(null)
	const [activeSlide, setActiveSlide] = useState<number>(initial)

	const handleActiveSlide = useCallback((idx: number) => ref.current?.splide?.go(idx), [ref])

	const handleChange = useCallback(
		(props: SplideCore) => setActiveSlide(props.index),
		[setActiveSlide],
	)

	const total = Children.count(children)

	return (
		<section>
			{/** @ts-expect-error */}
			<SliderContext.Provider value={{ loop, total, activeSlide, handleActiveSlide }}>
				<Splide
					{...props}
					ref={ref}
					tag="section"
					role="group"
					aria-label="target-slider"
					onActive={handleChange}
					options={{
						...options,
						start: initial,
					}}
				>
					{children}
				</Splide>

				{withPagination ? <SliderControls className="mt-[3px]" /> : null}
			</SliderContext.Provider>
		</section>
	)
}

const options: Options = {
	gap: 3,
	type: 'loop',
	arrows: false,
	lazyLoad: true,
	autoWidth: true,
	pagination: false,
	updateOnMove: true,
	labelledby: 'Target',
}

export { Slider }
export type { SliderProps }
