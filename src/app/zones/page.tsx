import dynamic from 'next/dynamic'

import type { Page } from '~/lib/types'
import { ZONES_CONFIG } from '~/shared/config/zones'

import { Skeleton } from '~/client/ui/components/Skeleton'
import { FeatureCard } from '~/client/components/cards/FeatureCard'

import styles from './styles.module.css'

const Zones: Page = () => (
	<>
		<Map className={styles.map} />
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

const Map = dynamic(() => import('~/client/components/Map'), {
	loading: () => <Skeleton className={styles.map} />,
})

export default Zones
