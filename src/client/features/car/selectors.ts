import type { CarPreview } from '~/shared/entities/car'

import type { CarsFilter } from './useCarsFilter'

type Data = CarPreview[]

const selectFilteredCars = (data: Data, filter: CarsFilter) =>
	data.filter((item) =>
		[
			filter.carTypeId ? String(item.carType.id) === filter.carTypeId : true,
			filter.wrapped === item.isWrapped,
		].every(Boolean),
	)

export { selectFilteredCars }
