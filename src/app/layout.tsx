import './globals.css'

import type { Metadata } from 'next'

import { DOMAIN_URL, GOOGLE_VERIFICATION, YANDEX_VERIFICATION } from '~/env'

import { AppHeader } from './_components/AppHeader'
import { AppFooter } from './_components/AppFooter'

const AppLayout = ({ children }: { children: React.ReactNode }) => (
	<html
		dir="ltr"
		lang="en"
		suppressHydrationWarning>
		<body className="w-screen min-h-screen flex flex-col overflow-x-clip p-[3px] gap-y-[3px]">
			<AppHeader />
			{children}
			<AppFooter />
		</body>
	</html>
)

export const metadata: Metadata = {
	referrer: 'origin',
	authors: [
		{ name: 'Vadzim Zakharov', url: 'https://github.com/vzkharov' },
		{ name: 'Mikita Tsimafeev', url: 'https://github.com/badfan' },
	],
	verification: {
		google: GOOGLE_VERIFICATION,
		yandex: YANDEX_VERIFICATION,
	},
	metadataBase: new URL(DOMAIN_URL),
	robots: { index: true, follow: true },
	manifest: `${DOMAIN_URL}/manifest.json`,
	creator: 'Vadzim Zakharov, https://github.com/vzkharov',
	title: 'Hello каршеринг - Поминутная аренда автомобилей в Минске',
	abstract: 'Hello каршеринг - Поминутная аренда автомобилей в Минске',
	description:
		'Hello - Минский каршеринг. Поминутная аренда авто через мобильное приложение без водителя. Приятные тарифы, новые автомобили, грамотная и вежливая техподдержка!',
	alternates: {
		canonical: '/',
		languages: {
			ru: 'ru',
			'ru-RU': 'ru-RU',
		},
	},
}

export default AppLayout
