import { fetchStrapi, getStrapiMedia, Populate } from '~/lib/strapi'

import type { WelcomeConfigAPI } from '~/shared/entities/single-types/welcome'

const fetchWelcomeConfig = async () => {
	try {
		const { data } = await fetchStrapi<Populate<WelcomeConfigAPI>>('/welcome', {
			populate: '*',
		})

		if (!data) {
			return {}
		}

		return {
			home: getStrapiMedia(data.attributes.home.data.attributes.url),
			business: getStrapiMedia(data.attributes.business.data.attributes.url),
		}
	} catch (error) {
		return {}
	}
}

export { fetchWelcomeConfig }
