import type { CarPreview } from '~/shared/entities/car'

import type { CarsFilter } from './useCarsFilter'

type Data = CarPreview[]

const selectFilteredCars = (data: Data, filter: CarsFilter) => {
	const filteredData = data.filter((item) =>
		[
			filter.carTypeId ? String(item.carType.id) === filter.carTypeId : true,
			typeof filter.wrapped === 'boolean' ? filter.wrapped === item.isWrapped : true,
		].every(Boolean),
	)

	return filteredData
}

export { selectFilteredCars }
