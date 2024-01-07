import type { CarMetadata } from '~/shared/entities/car'

import { baseFetchStrapiCar } from './utils'

const fetchCarMetadata = async (id: string) => {
	try {
		return await baseFetchStrapiCar<false, CarMetadata>('/cars/brief', { id })
	} catch (error) {
		return { data: null, error }
	}
}

export { fetchCarMetadata }
