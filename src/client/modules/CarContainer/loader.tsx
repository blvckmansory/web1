import { Skeleton } from '~/client/ui/components/Skeleton'

import styles from './styles.module.css'

const CarContainerLoader = () => (
	<article className={styles.inner}>
		{new Array(6).fill(0).map((_, key) => (
			<Skeleton
				key={key}
				className={styles.card}
			/>
		))}
	</article>
)

export { CarContainerLoader }
