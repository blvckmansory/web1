import { fetchStrapi, getStrapiMedia, Populate } from '~/lib/strapi'

import type { SliderConfigAPI } from '~/shared/entities/single-types/slider'

const fetchSliderConfig = async () => {
	try {
		const { data } = await fetchStrapi<Populate<SliderConfigAPI>>('/slider', {
			populate: '*',
		})

		if (!data) {
			return {}
		}

		return {
			first: getStrapiMedia(data.attributes.first.data.attributes.url),
			second: getStrapiMedia(data.attributes.second.data.attributes.url),
			third: getStrapiMedia(data.attributes.third.data.attributes.url),
		}
	} catch (error) {
		return {}
	}
}

export { fetchSliderConfig }
