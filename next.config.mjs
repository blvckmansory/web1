/** @type {import('next').NextConfig} */
const config = {
	experimental: {
		ppr: true,
		scrollRestoration: false,
	},
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
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '1337',
				pathname: '/uploads/**',
			},
		],
	},
}

export default config
