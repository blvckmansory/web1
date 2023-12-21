import type { Metadata } from 'next'

import type { Page } from '~/lib/types'

import { HintType } from '~/server/hints'

import { HintContainer } from '~/client/modules/HintContainer'

const InstructionsPage: Page = () => <HintContainer type={HintType.INSTRUCTION} />

export const metadata: Metadata = {
	title: 'Инструкции | Каршеринг Hello - Поминутная аренда автомобилей в Минске',
	description: 'Видеоинструкции как пользоваться каршерингом и как поступать не следует',
}

export default InstructionsPage
