import type { MetadataRoute } from 'next'

import { DOMAIN_URL } from '~/env'

import { fetchCarIds } from '~/server/car'
import { fetchPostIds } from '~/server/post'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	const { data: carIds } = await fetchCarIds()
	const { data: postIds } = await fetchPostIds()

	return [
		{
			url: `${DOMAIN_URL}`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${DOMAIN_URL}/posts`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.6,
		},
		{
			url: `${DOMAIN_URL}/zones`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.2,
		},
		{
			url: `${DOMAIN_URL}/cars`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: `${DOMAIN_URL}/contacts`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.4,
		},
		{
			url: `${DOMAIN_URL}/business`,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.4,
		},
		{
			url: `${DOMAIN_URL}/faq/hints`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.3,
		},
		{
			url: `${DOMAIN_URL}/faq/rules`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.3,
		},
		{
			url: `${DOMAIN_URL}/faq/help`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.3,
		},
		...carIds.map((car) => ({
			url: `${DOMAIN_URL}/cars/${car.id}`,
			lastModified: new Date(),
		})),
		...postIds.map((post) => ({
			url: `${DOMAIN_URL}/posts/${post.id}`,
			lastModified: new Date(),
		})),
	]
}

export default sitemap
