import { Divider, Skeleton } from '~/client/ui/components'

import { Section } from '~/client/components/Section'
import { CarContainerLoader } from '~/client/modules/CarContainer/loader'

import styles from './styles.module.css'

const Loading = () => (
	<Section className={styles.container}>
		<Skeleton
			style={{ height: 48 }}
			className={styles.title}
		/>
		<Skeleton
			style={{ height: 78 }}
			className={styles.title}
		/>
		<Divider className="rounded-full" />
		<CarContainerLoader />
	</Section>
)

export default Loading
