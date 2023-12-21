import type { Metadata } from 'next'

import type { Page } from '~/lib/types'

import { HintType } from '~/server/hints'

import { HintContainer } from '~/client/modules/HintContainer'

const HintsPage: Page = async () => <HintContainer type={HintType.HINT} />

export const metadata: Metadata = {
	title: 'Подсказки | Каршеринг Hello - Поминутная аренда автомобилей в Минске',
	description:
		'Куда можно поехать? Какие авто в нашем парке? Все что ты хотел бы узнать на этой странице.',
	alternates: {
		canonical: '/faq/hints',
	},
}

export default HintsPage
