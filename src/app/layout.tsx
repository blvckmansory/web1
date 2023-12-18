import './globals.css'

import type { Metadata } from 'next'

import { AppHeader } from './_components/AppHeader'
import { AppFooter } from './_components/AppFooter'

const AppLayout = ({ children }: { children: React.ReactNode }) => (
	<html
		dir="ltr"
		lang="en"
		suppressHydrationWarning
	>
		<body className="w-screen min-h-screen flex flex-col overflow-x-clip p-[3px] gap-y-[3px]">
			<AppHeader />
			{children}
			<AppFooter />
		</body>
	</html>
)

export const metadata: Metadata = {
	title: 'Hello каршеринг - Поминутная аренда автомобилей в Минске',
	description:
		'Hello - Минский каршеринг. Поминутная аренда авто через мобильное приложение без водителя. Приятные тарифы, новые автомобили, грамотная и вежливая техподдержка!',
}

export default AppLayout
