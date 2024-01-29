import { fetchStrapi, getStrapiMedia, type StrapiResponse } from '~/lib/strapi'

import type { CarType } from '~/shared/entities/car'

const convertResponse = (carType: CarType) => ({
	...carType,
	image: carType.image
		? {
				...carType.image,
				url: getStrapiMedia(carType.image.url),
			}
		: null,
})

const fetchCarTypes = async () => {
	try {
		const { data } = await fetchStrapi<StrapiResponse<CarType[]>>('/car-type')
		return { data: data.map(convertResponse) }
	} catch (error) {
		return { error, data: [] }
	}
}

export { fetchCarTypes }
