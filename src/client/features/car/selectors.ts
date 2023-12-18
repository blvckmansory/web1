import type { Car } from '~/server/car/types'

import type { Filter } from './useCarFilter'

type Data = Car[]

const selectFilteredCars = (data: Data, filter: Filter) =>
	data.filter((item) =>
		[
			filter.typeId ? item.type.id === filter.typeId : true,
			filter.pasting === item.pasting,
		].every(Boolean),
	)

export { selectFilteredCars }
