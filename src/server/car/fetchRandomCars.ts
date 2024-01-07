import type { CarPreview } from '~/shared/entities/car'

import { baseFetchStrapiCar } from './utils'

type FetchRandomCarsArgs = {
	limit: number
	excludeId?: string | number
}

const fetchRandomCars = async ({ limit, excludeId }: FetchRandomCarsArgs = { limit: 3 }) => {
	try {
		return await baseFetchStrapiCar<true, CarPreview>('/cars/random', {
			limit,
			id: excludeId,
		})
	} catch (error) {
		return { data: null, error }
	}
}

export { fetchRandomCars }
