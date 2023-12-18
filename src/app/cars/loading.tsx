import { Divider, Skeleton } from '~/client/ui/components'

import { Section } from '~/client/components/Section'
import { CarListLoader } from '~/client/modules/CarList/loader'

import styles from './styles'

const Loading = () => (
	<Section className={styles.container()}>
		<Skeleton
			style={{ height: 48 }}
			className={styles.title()}
		/>
		<Skeleton
			style={{ height: 78 }}
			className={styles.title()}
		/>
		<Divider className="rounded-full" />
		<CarListLoader />
	</Section>
)

export default Loading
