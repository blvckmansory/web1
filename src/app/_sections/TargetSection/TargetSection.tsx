import type { StyleProps } from '~/lib/types'

import { fetchSliderConfig } from '~/server/single-types/slider'

import { Slide, Slider } from '~/client/ui/components/Slider'

import { HeroCardFirst, HeroCardSecond, HeroCardFinal } from './_components'

const TargetSection = async ({ style, className }: StyleProps) => {
	const { data } = await fetchSliderConfig()

	return (
		<Slider
			loop
			withPagination
			style={style}
			className={className}>
			<Slide>
				<HeroCardFirst imageUrl={data?.first.url || '/assets/card-1.svg'} />
			</Slide>
			<Slide>
				<HeroCardSecond imageUrl={data?.second.url || '/assets/card-2.svg'} />
			</Slide>
			<Slide>
				<HeroCardFinal imageUrl={data?.third.url || '/assets/card-3.svg'} />
			</Slide>
		</Slider>
	)
}

export { TargetSection }
