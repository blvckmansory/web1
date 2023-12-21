import type { StyleProps } from '~/lib/types'

import { fetchSliderConfig } from '~/server/single-types/slider'

import { Slide, Slider } from '~/client/ui/components/Slider'

import { HeroCardFirst, HeroCardSecond, HeroCardFinal } from './_components'

const TargetSection = async ({ style, className }: StyleProps) => {
	const { first, second, third } = await fetchSliderConfig()

	return (
		<Slider
			loop
			withPagination
			style={style}
			className={className}>
			<Slide>
				<HeroCardFirst imageUrl={first || '/assets/card-1.svg'} />
			</Slide>
			<Slide>
				<HeroCardSecond imageUrl={second || '/assets/card-2.svg'} />
			</Slide>
			<Slide>
				<HeroCardFinal imageUrl={third || '/assets/card-3.svg'} />
			</Slide>
		</Slider>
	)
}

export { TargetSection }
