'use client'

import type { StyleProps } from '~/lib/types'

import { Slide, Slider } from '~/client/ui/components/Slider'

import { HeroCardFirst, HeroCardSecond, HeroCardFinal } from './_components'

const TargetSection = ({ style, className }: StyleProps) => (
	<Slider
		loop
		withPagination
		style={style}
		className={className}>
		<Slide>
			<HeroCardFirst />
		</Slide>
		<Slide>
			<HeroCardSecond />
		</Slide>
		<Slide>
			<HeroCardFinal />
		</Slide>
	</Slider>
)

export { TargetSection }
