import type { CarPreview } from '~/shared/entities/car'

import { baseFetchStrapiCar } from './utils'

const fetchPreviewCars = async () => {
	try {
		return await baseFetchStrapiCar<true, CarPreview>('/cars')
	} catch (error) {
		return { data: null, error }
	}
}

export { fetchPreviewCars }
