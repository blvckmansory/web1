import type { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
	name: 'Hello каршеринг - Поминутная аренда автомобилей в Минске',
	short_name: 'Hello каршеринг',
	description:
		'Hello - Минский каршеринг. Поминутная аренда авто через мобильное приложение без водителя. Приятные тарифы, новые автомобили, грамотная и вежливая техподдержка!',
	start_url: '/',
	display: 'standalone',
	background_color: '#fff',
	theme_color: '#fff',
	icons: [
		{
			sizes: 'any',
			src: '/favicon.ico',
			type: 'image/x-icon',
		},
	],
})

export default manifest
