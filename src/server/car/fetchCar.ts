import { getStrapiMedia } from '~/lib/strapi'

import type { Car } from '~/shared/entities/car'
import type { Rate } from '~/shared/entities/rate'

import { baseFetchStrapiCar } from './utils'

const sortRates = (rate1: Rate, rate2: Rate) => {
	const rateId1 = rate1.rateType.id
	const rateId2 = rate2.rateType.id

	if (rateId1 === rateId2) {
		return 0
	} else if (rateId1 > rateId2) {
		return 1
	}
	return -1
}

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
	rates: car.rates.sort(sortRates),
	sideImages: car.sideImages.map((sideImage) => ({
		...sideImage,
		image: {
			...sideImage.image,
			url: getStrapiMedia(sideImage.image.url),
		},
		colorImage: sideImage.colorImage
			? {
					...sideImage.colorImage,
					url: getStrapiMedia(sideImage.colorImage.url),
				}
			: null,
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
