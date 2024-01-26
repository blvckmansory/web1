'use client'

import { useState, useEffect, useCallback, Children } from 'react'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'

import { clsx } from '~/lib/clsx'
import type { StyleProps, ReactChildren } from '~/lib/types'

import { SliderContext } from './context'
import { SliderControls } from './SliderControls'

import styles from './styles.module.css'

type SliderProps = StyleProps & {
	loop?: boolean
	initial?: number
	withPagination?: boolean

	children: ReactChildren
}

const Slider = ({
	style,
	children,
	className,
	initial = 0,
	loop = false,
	withPagination = false,
}: SliderProps) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

	const [total] = useState<number>(() => Children.count(children))
	const [activeSlide, setActiveSlide] = useState<number>(initial)

	const prev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
	const next = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi],
	)

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setActiveSlide(emblaApi.selectedScrollSnap())
	}, [])

	useEffect(() => {
		if (!emblaApi) {
			return
		}

		onSelect(emblaApi)

		emblaApi.on('reInit', onSelect)
		emblaApi.on('select', onSelect)
	}, [emblaApi, onSelect])

	return (
		<SliderContext.Provider value={{ loop, total, activeSlide, next, prev, scrollTo }}>
			<section className={styles.embla}>
				<div
					ref={emblaRef}
					style={style}
					className={clsx(styles.embla__viewport, className)}>
					<div className={styles.embla__container}>{children}</div>
				</div>

				{withPagination ? <SliderControls className="mt-[3px]" /> : null}
			</section>
		</SliderContext.Provider>
	)
}

const options: EmblaOptionsType = {
	loop: false,
	align: 'start',
	dragFree: false,
	slidesToScroll: 1,
}

export { Slider }
export type { SliderProps }
