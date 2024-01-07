import { fetchStrapi, getStrapiMedia, type StrapiResponse } from '~/lib/strapi'

import type { SliderConfig } from '~/shared/entities/single-types/slider'

const convertSliderConfigResponse = (sliderConfig: SliderConfig) => ({
	first: {
		...sliderConfig.first,
		url: getStrapiMedia(sliderConfig.first.url),
	},
	second: {
		...sliderConfig.second,
		url: getStrapiMedia(sliderConfig.second.url),
	},
	third: {
		...sliderConfig.third,
		url: getStrapiMedia(sliderConfig.third.url),
	},
})

const fetchSliderConfig = async () => {
	try {
		const { data } = await fetchStrapi<StrapiResponse<SliderConfig>>('/slider')

		return { data: convertSliderConfigResponse(data) }
	} catch (error) {
		return {
			data: null,
			error,
		}
	}
}

export { fetchSliderConfig }
