import { fetchStrapi, type StrapiResponse } from '~/lib/strapi'

import type { CarId } from '~/shared/entities/car'

const fetchCarIds = async () => {
	try {
		return await fetchStrapi<StrapiResponse<CarId[]>>('/cars/id')
	} catch (error) {
		return { data: [], error }
	}
}

export { fetchCarIds }
