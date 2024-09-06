import './globals.css'

import type { Metadata, Viewport } from 'next'

import { DOMAIN_URL, FACEBOOK_VERIFICATION, GOOGLE_VERIFICATION, YANDEX_VERIFICATION } from '~/env'

import { Cookies } from '~/client/components/Cookies'

import { AppHeader } from './_components/AppHeader'
import { AppFooter } from './_components/AppFooter'

const AppLayout = ({ children }: { children: React.ReactNode }) => (
	<html
		dir="ltr"
		lang="ru"
		suppressHydrationWarning>
		<body className="w-screen min-h-screen flex flex-col overflow-x-clip">
			<AppHeader />
			<main className="w-full flex flex-col gap-y-[3px] px-[3px]">{children}</main>
			<AppFooter />
			<Cookies />
		</body>
	</html>
)

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'black' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	width: 'device-width',
}

export const metadata: Metadata = {
	referrer: 'origin',
	authors: [
		{ name: 'Vadzim Zakharov', url: 'https://github.com/vzkharov' },
		{ name: 'Mikita Tsimafeev', url: 'https://github.com/badfan' },
	],
	verification: {
		google: GOOGLE_VERIFICATION,
		yandex: YANDEX_VERIFICATION,

		other: {
			['facebook-domain-verification']: FACEBOOK_VERIFICATION,
		},
	},

	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
	},
	applicationName: 'Hello.by',
	generator: 'Next.JS',
	metadataBase: new URL(DOMAIN_URL),
	robots: { index: true, follow: true },
	manifest: `${DOMAIN_URL}/manifest.webmanifest`,
	creator: 'Vadzim Zakharov, https://github.com/vzkharov',
	title: 'Hello каршеринг - Поминутная аренда автомобилей в Минске',
	abstract: 'Hello каршеринг',
	description:
		'Hello - Минский каршеринг. Поминутная аренда авто через мобильное приложение без водителя. Приятные тарифы, новые автомобили, грамотная и вежливая техподдержка!',
	alternates: {
		canonical: '/',
	},
}

export default AppLayout
