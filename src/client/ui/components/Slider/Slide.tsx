// @ts-expect-error
import { SplideSlide } from '@splidejs/react-splide'

import { clsx } from '~/lib/clsx'
import type { StyleProps, ReactChildren } from '~/lib/types'

type SlideProps = StyleProps & {
	children: ReactChildren
}

const Slide = ({ style, children, className }: SlideProps) => (
	<SplideSlide
		style={style}
		className={clsx('', className)}>
		{children}
	</SplideSlide>
)

Slide.displayName = '@hello/Slide'

export { Slide }
export type { SlideProps }
