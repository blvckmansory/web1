import { clsx } from '~/lib/clsx'
import type { StyleProps, ReactChildren } from '~/lib/types'

import styles from './styles.module.css'

type SlideProps = StyleProps & {
	children: ReactChildren
}

const Slide = ({ style, children, className }: SlideProps) => (
	<article
		style={style}
		className={clsx(styles.embla__slide, className)}>
		{children}
	</article>
)

Slide.displayName = '@hello/Slide'

export { Slide }
export type { SlideProps }
