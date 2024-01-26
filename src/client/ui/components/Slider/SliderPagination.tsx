'use client'

import { useCallback, type CSSProperties } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { useSliderContext } from './context'

type SliderPaginationProps = StyleProps & {
	onChange?: (idx: number) => unknown

	containerStyle?: CSSProperties
	containerClassName?: string
}

const SliderPagination = ({
	style,
	onChange,
	className,
	containerStyle,
	containerClassName,
}: SliderPaginationProps) => {
	const { total, activeSlide, scrollTo } = useSliderContext()

	const handleClick = useCallback(
		(idx: number) => {
			scrollTo(idx)
			onChange?.(idx)
		},
		[onChange, scrollTo],
	)

	return (
		<div
			style={containerStyle}
			className={clsx('w-fit flex items-center gap-x-1', containerClassName)}>
			{...new Array(total).fill(0).map((_, idx) => (
				<span
					key={idx}
					style={style}
					onClick={() => handleClick(idx)}
					className={clsx(
						'h-4 w-4 rounded-full cursor-pointer',
						'bg-white border-[1.5px] border-black',
						'shadow-brand',
						idx === activeSlide ? 'bg-primary' : '',
						className,
					)}
				/>
			))}
		</div>
	)
}

SliderPagination.displayName = '@hello/SliderPagination'

export { SliderPagination }
export type { SliderPaginationProps }
