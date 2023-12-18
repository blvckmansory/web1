import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { SliderArrow } from './SliderArrow'
import { SliderPagination } from './SliderPagination'

const SliderControls = ({ style, className }: StyleProps) => (
	<div
		style={style}
		className={clsx(
			'w-full bg-white rounded-xl flex flex-row items-center justify-between',
			className,
		)}
	>
		<SliderArrow state="left" />
		<SliderPagination />
		<SliderArrow state="right" />
	</div>
)

export { SliderControls }
