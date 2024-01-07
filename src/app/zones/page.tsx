import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

import type { Page } from '~/lib/types'
import { ZONES_CONFIG } from '~/shared/config/zones'

import { fetchZones } from '~/server/zones'

import { Skeleton } from '~/client/ui/components/Skeleton'
import { FeatureCard } from '~/client/components/cards/FeatureCard'

import styles from './styles.module.css'

const Map = dynamic(() => import('~/client/components/Map'), {
	loading: () => <Skeleton className={styles.map} />,
})

const Zones: Page = async () => {
	const zones = await fetchZones()

	return (
		<>
			<Map
				zones={zones}
				className={styles.map}
			/>
			<section className={styles.zones__info}>
				{ZONES_CONFIG.map((zone, key) => (
					<FeatureCard
						key={key}
						{...zone}
					/>
				))}
			</section>
		</>
	)
}

export const metadata: Metadata = {
	title: 'Зоны завершения | Каршеринг Hello - Поминутная аренда автомобилей в Минске',
	description:
		'КОНТАКТЫ: СЛУЖБА ПОДДЕРЖКИ +375 44 777 60 60 (Telegram, WhatsApp) | info@hello.by РАБОТА С КОРПОРАТИВНЫМИ КЛИЕНТАМИ partners@hello.by ПРЕДЛОЖЕНИЯ: СОТРУДНИЧЕСТВО | РЕКЛАМА offers@hello.by | marketing@hello.by РЕКВИЗИТЫ:',
	alternates: {
		canonical: '/zones',
	},
}

export default Zones
