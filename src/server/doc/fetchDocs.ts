import { fetchStrapi, getStrapiMedia, type StrapiResponse } from '~/lib/strapi'

import type { Doc } from '~/shared/entities/doc'

const convertDocResponse = (doc: Doc) => ({
	...doc,
	href: getStrapiMedia(doc.file.url),
})

const fetchDocs = async () => {
	try {
		const { data } = await fetchStrapi<StrapiResponse<Doc[]>>('/docs')
		return { data: data.map(convertDocResponse) }
	} catch (error) {
		return { data: [], error }
	}
}

export { fetchDocs }
