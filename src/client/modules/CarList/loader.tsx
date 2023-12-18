import { Skeleton } from '~/client/ui/components/Skeleton'

import styles from './styles.module.css'

const CarListLoader = () => (
	<section className={styles.container}>
		<Skeleton
			style={{ height: 36 }}
			className={styles.title}
		/>
		<article className={styles.inner}>
			{new Array(6).fill(0).map((_, key) => (
				<Skeleton
					key={key}
					className={styles.card}
				/>
			))}
		</article>
	</section>
)

export { CarListLoader }
