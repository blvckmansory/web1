import type { Metadata } from 'next'

import type { Page } from '~/lib/types'

import { HintType } from '~/server/hints'

import { HintContainer } from '~/client/modules/HintContainer'

const RulesPage: Page = () => <HintContainer type={HintType.FRIENDSHIP_RULE} />

export const metadata: Metadata = {
	title: 'Правила дружбы | Каршеринг Hello - Поминутная аренда автомобилей в Минске',
	description:
		'Правила использования сервисом Каршеринг Hello. Соблюдайте все правила и все будет круто!',
	alternates: {
		canonical: '/faq/rules',
	},
}

export default RulesPage
