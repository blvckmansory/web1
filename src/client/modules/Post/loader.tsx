import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Skeleton } from '~/client/ui/components/Skeleton'

import styles from './styles.module.css'

const PostLoader = ({ style, className }: StyleProps) => (
	<article
		style={style}
		className={clsx(styles.container, className)}>
		<Skeleton
			style={{ height: 40 }}
			className={styles.title}
		/>
		<Skeleton
			style={{ height: 20 }}
			className={styles.date}
		/>

		<div className={styles.cover__container}>
			<Skeleton
				style={{ height: 450 }}
				className={styles.cover__img}
			/>
		</div>
		<Skeleton style={{ height: 150 }} />
	</article>
)

export { PostLoader }
