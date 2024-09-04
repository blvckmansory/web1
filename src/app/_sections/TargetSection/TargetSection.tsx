import type { StyleProps } from '~/lib/types'

import { fetchPreviewCars } from '~/server/car'
import { fetchSliderConfig } from '~/server/single-types/slider'

import { Slide, Slider } from '~/client/ui/components/Slider'

import { HeroCardFirst, HeroCardSecond, HeroCardFinal } from './_components'

const TargetSection = async ({ style, className }: StyleProps) => {
	const { data: sliderConfig } = await fetchSliderConfig()
	const { data: cars } = await fetchPreviewCars()

	return (
		<Slider
			withPagination
			style={style}
			className={className}>
			<Slide>
				<HeroCardFirst
					carsCount={cars?.length}
					imageUrl={sliderConfig?.first.url || '/assets/card-1.svg'}
				/>
			</Slide>
			<Slide>
				<HeroCardSecond imageUrl={sliderConfig?.second.url || '/assets/card-2.svg'} />
			</Slide>
			<Slide>
				<HeroCardFinal
					imageUrl={sliderConfig?.third.url || '/assets/card-3.svg'}
					minPrice={cars?.reduce(
						(acc, car) => (acc > car.minMinuteRate ? car.minMinuteRate : acc),
						Number.MAX_SAFE_INTEGER,
					)}
				/>
			</Slide>
		</Slider>
	)
}

export { TargetSection }
