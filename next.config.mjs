const NODE_ENV = process.env.NODE_ENV
const STRAPI_URL = process.env.STRAPI_URL
const STRAPI_PORT = process.env.STRAPI_PORT
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
	async headers() {
		return [
			{
				source: '/api/(.*)',

				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: STRAPI_URL,
					},

					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET, POST, PUT, DELETE, OPTIONS',
					},

					{
						key: 'Access-Control-Allow-Headers',
						value: 'Content-Type',
					},
				],
			},
		]
	},
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
