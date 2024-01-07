import { revalidateTag } from 'next/cache'

import { fetchStrapi, getStrapiMedia, type StrapiResponse } from '~/lib/strapi'

import type { BusinessPageConfig } from '~/shared/entities/single-types/business-page'

const REVALIDATE_TAG = '/business-page' as const

const convertBusinessPageConfigResponse = (res: BusinessPageConfig) => ({
	cover: {
		...res.cover,
		url: getStrapiMedia(res.cover.url),
	},
	contract: {
		...res.contract,
		url: getStrapiMedia(res.contract.url),
	},
})

const revalidateBusinessPage = () => revalidateTag(REVALIDATE_TAG)

const fetchBusinessPageConfig = async () => {
	try {
		const { data } = await fetchStrapi<StrapiResponse<BusinessPageConfig>>(
			'/business-page',
			{},
			{ next: { tags: [REVALIDATE_TAG] } },
		)

		return {
			data: convertBusinessPageConfigResponse(data),
		}
	} catch (error) {
		return { data: null, error }
	}
}

export { fetchBusinessPageConfig, revalidateBusinessPage }
