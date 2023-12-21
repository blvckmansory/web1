import { fetchStrapi, getStrapiMedia, Populate } from '~/lib/strapi'

import type { ErrorConfigAPI } from '~/shared/entities/single-types/error'

const fetchErrorConfig = async () => {
	try {
		const { data } = await fetchStrapi<Populate<ErrorConfigAPI>>('/image-config', {
			populate: '*',
		})

		if (!data) {
			return {}
		}

		return {
			noData: getStrapiMedia(data.attributes.noData.data.attributes.url),
			notFound: getStrapiMedia(data.attributes.notFound.data.attributes.url),
			internalError: getStrapiMedia(data.attributes.internalError.data.attributes.url),
		}
	} catch (error) {
		return {}
	}
}

export { fetchErrorConfig }
