import { fetchStrapi, getStrapiMedia, type StrapiResponse } from '~/lib/strapi'

import type { SocialMedia } from '~/shared/entities/social-media'

const converSocialMediaResponse = (socialMedia: SocialMedia) => ({
	...socialMedia,
	icon: getStrapiMedia(socialMedia.icon.url),
})

const fetchSocialMedia = async () => {
	try {
		const { data } = await fetchStrapi<StrapiResponse<SocialMedia[]>>('/socials')
		return { data: data.map(converSocialMediaResponse) }
	} catch (error) {
		return { data: [], error }
	}
}

export { fetchSocialMedia }
