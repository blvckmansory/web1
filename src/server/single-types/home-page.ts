import { revalidateTag } from 'next/cache'

import { fetchStrapi, getStrapiMedia, type StrapiResponse } from '~/lib/strapi'

import type { HomePageConfig } from '~/shared/entities/single-types/home-page'

const REVALIDATE_TAG = '/home-page' as const

const convertHomePageConfigResponse = (res: HomePageConfig) => ({
	...res,
	cover: {
		...res.cover,
		url: getStrapiMedia(res.cover.url),
	},
})

const revalidateHomePage = () => revalidateTag(REVALIDATE_TAG)

const fetchHomePageConfig = async () => {
	try {
		const { data } = await fetchStrapi<StrapiResponse<HomePageConfig>>(
			'/home-page',
			{},
			{ next: { tags: [REVALIDATE_TAG] } },
		)

		return {
			data: convertHomePageConfigResponse(data),
		}
	} catch (error) {
		return { data: null, error }
	}
}

export { fetchHomePageConfig, revalidateHomePage }
