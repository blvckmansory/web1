import type { StyleProps } from '~/lib/types'

import { fetchRandomCars } from '~/server/car'

import { CarPreview } from '~/client/components/CarPreview'
import { SectionSuggests } from '~/client/components/Section'

type PostSuggestsProps = StyleProps & {
	excludeId?: string | number
}

const CarSuggests = async ({ style, className, excludeId }: PostSuggestsProps) => {
	const { data: cars } = await fetchRandomCars({ excludeId, limit: 3 })

	if (!cars) {
		return null
	}

	return (
		<SectionSuggests
			style={style}
			className={className}
			minmax={['260px', 'auto']}>
			{cars.map((car) => (
				<CarPreview
					{...car}
					key={car.id}
				/>
			))}
		</SectionSuggests>
	)
}

export { CarSuggests }
