const STRAPI_DOMAIN = process.env.STRAPI_DOMAIN

/** @type {import('next').NextConfig} */
const config = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	redirects: async () => [
		{
			permanent: true,
			source: '/faq',
			destination: '/faq/hints',
		},
	],

	images: {
		minimumCacheTTL: 31536000,
		dangerouslyAllowSVG: true,
		formats: ['image/webp'],
		remotePatterns: [
			{
				protocol: 'https',
				port: '',
				hostname: STRAPI_DOMAIN,
				pathname: '/uploads/**',
			},
		],
	},
}

export default config
