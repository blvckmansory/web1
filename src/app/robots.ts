import type { MetadataRoute } from 'next'

import { DOMAIN_URL } from '~/env'

const robots = (): MetadataRoute.Robots => ({
	rules: {
		userAgent: '*',
		allow: '/',
		disallow: '/private/',
	},

	sitemap: `${DOMAIN_URL}/sitemap.xml`,
})

export default robots
