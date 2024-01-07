import type { Metadata } from 'next'

import type { Page } from '~/lib/types'

import { fetchBusinessPageConfig } from '~/server/single-types/business-page'

import { Road } from '~/client/components/Road'

import { WelcomeSection } from './_sections/WelcomeSection'
import { FeatureSection } from './_sections/FeatureSection'
import { ConnectSection } from './_sections/ConnectSection'

const BusinessPage: Page = async () => {
	const { data } = await fetchBusinessPageConfig()

	return (
		<>
			<WelcomeSection cover={data?.cover.url} />
			<FeatureSection />
			<Road />
			<ConnectSection contractSrc={data?.contract.url} />
		</>
	)
}

export const metadata: Metadata = {
	title: 'Каршеринг Hello.by для бизнеса',
	description:
		'Расширьте корпоративный парк автомобилями или создайте с нуля автопарк компании. Все расходы мы берем на себя, вы платите только за пользование автомобилем.',
	alternates: {
		canonical: '/business',
	},
}

export default BusinessPage
