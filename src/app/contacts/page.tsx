import { Fragment } from 'react'
import type { Metadata } from 'next'

import type { Page } from '~/lib/types'

import { CONTACTS_CONFIG } from '~/shared/config/contacts'

import { Divider } from '~/client/ui/components/Divider'
import { Text, Hint, Title } from '~/client/ui/components/Text'

import { Section } from '~/client/components/Section'

import { CommunicationMethod } from './_components/CommunicationMethod'

import styles from './styles.module.css'

const Contacts: Page = () => (
	<Section className={styles.page}>
		<Title>Контакты</Title>

		<Divider dir="x" />

		<article className={styles.methods}>
			{CONTACTS_CONFIG.map((config) => (
				<Fragment key={config.title}>
					<CommunicationMethod {...config} />
					<Divider
						dir="x"
						className="block md:hidden"
					/>
				</Fragment>
			))}
		</article>

		<Divider
			dir="x"
			className="hidden md:block"
		/>

		<article className={styles.info}>
			<Text
				as="h2"
				uppercase
				size={20}
				weight={700}>
				Реквизиты
			</Text>
			<Hint className={styles.organization__info}>
				<span>
					Зарегистрировано Мингорисполкомом 31.01.2018 г. Республика Беларусь, 220035 г.
					Минск, ул. Тимирязева, д. 23, корп. 1, каб. 5{' '}
				</span>
				<span>УНП 193029077</span>
				<span>р/с BY40BLNB30120000287647000933 в ОАО «БНБ-Банк»</span>
				<span>код банка BLNBBY2X, г. Минск, пр. Независимости, 87А</span>
			</Hint>
		</article>
	</Section>
)

export const metadata: Metadata = {
	title: 'Контакты и реквизиты | Каршеринг Hello - Поминутная аренда автомобилей в Минске',
	description:
		'КОНТАКТЫ: СЛУЖБА ПОДДЕРЖКИ +375 44 777 60 60 (Telegram, WhatsApp) | info@hello.by РАБОТА С КОРПОРАТИВНЫМИ КЛИЕНТАМИ partners@hello.by ПРЕДЛОЖЕНИЯ: СОТРУДНИЧЕСТВО | РЕКЛАМА offers@hello.by | marketing@hello.by РЕКВИЗИТЫ:',
	alternates: {
		canonical: '/contacts',
	},
}

export default Contacts
