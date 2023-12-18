const DOWNLOAD_BUTTON_CONFIG = [
	{
		alt: 'App Gallery',
		name: 'App Gallery',
		label: 'Explore it on',
		img: '/mobile/app-gallery-logo.svg',
		href: 'http://appgallery.cloud.huawei.com/ag/n/app/C101776395?locale=ru_RU&source=appshare&subsource=C101776395',
	},
	{
		alt: 'Google Play',
		name: 'Google Play',
		label: 'Get it on',
		img: '/mobile/google-play-logo.svg',
		href: 'https://play.google.com/store/apps/details?id=by.hello.app',
	},
	{
		alt: 'App Store',
		name: 'App Store',
		label: 'Download on the',
		img: '/mobile/apple-logo.svg',
		href: 'https://itunes.apple.com/ru/app/hello-%D0%BA%D0%B0%D1%80%D1%88%D0%B5%D1%80%D0%B8%D0%BD%D0%B3-%D0%BC%D0%B8%D0%BD%D1%81%D0%BA/id1459837414?ls=1&mt=8',
	},
] as const

const DOWNLOAD_LINK_CONFIG = {
	ios: {
		name: 'App Store',
		href: 'https://itunes.apple.com/ru/app/hello-%D0%BA%D0%B0%D1%80%D1%88%D0%B5%D1%80%D0%B8%D0%BD%D0%B3-%D0%BC%D0%B8%D0%BD%D1%81%D0%BA/id1459837414?ls=1&mt=8',
	},
	android: {
		name: 'Google Play',
		href: 'https://play.google.com/store/apps/details?id=by.hello.app',
	},
	huawei: {
		name: 'App Gallery',
		href: 'http://appgallery.cloud.huawei.com/ag/n/app/C101776395?locale=ru_RU&source=appshare&subsource=C101776395',
	},
} as const

export { DOWNLOAD_LINK_CONFIG, DOWNLOAD_BUTTON_CONFIG }
