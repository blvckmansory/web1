import { getStrapiMedia } from '~/lib/strapi'

import type { Car } from '~/shared/entities/car'

import { baseFetchStrapiCar } from './utils'

const convertCarResponse = (car: Car) => ({
	...car,
	characteristics: {
		...car.characteristics,
		mainFeatures: car.characteristics.mainFeatures.map((mainFeature) => ({
			...mainFeature,
			icon: {
				...mainFeature.icon,
				url: getStrapiMedia(mainFeature.icon.url),
			},
		})),
	},

	sideImages: car.sideImages.map((sideImage) => ({
		...sideImage,
		image: {
			...sideImage.image,
			url: getStrapiMedia(sideImage.image.url),
		},
	})),
})

const fetchCar = async (id: string) => {
	try {
		const { data } = await baseFetchStrapiCar<false, Car>('/cars/full', { id })
		return { data: convertCarResponse(data) }
	} catch (error) {
		return { data: null, error }
	}
}

export { fetchCar }
