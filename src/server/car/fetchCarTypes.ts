import { fetchStrapi, type StrapiResponse } from '~/lib/strapi'

import type { CarType } from '~/shared/entities/car'

const fetchCarTypes = async () => {
	try {
		return await fetchStrapi<StrapiResponse<CarType[]>>('/car-type')
	} catch (error) {
		return { error, data: [] }
	}
}

export { fetchCarTypes }
