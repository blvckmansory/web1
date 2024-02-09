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

	const sortedData = filteredData.sort((it1, it2) => {
		if (it1.isWrapped === it2.isWrapped) {
			return 0
		}

		if (it1.isWrapped) {
			return -1
		}

		return 1
	})

	return sortedData
}

export { selectFilteredCars }
