import type { PreviewCar } from '~/server/car'

import type { Filter } from './useCarFilter'

type Data = PreviewCar[]

const selectFilteredCars = (data: Data, filter: Filter) =>
	data.filter((item) =>
		[
			filter.typeId ? String(item.carType.id) === filter.typeId : true,
			filter.pasting === item.isWrapped,
		].every(Boolean),
	)

export { selectFilteredCars }
