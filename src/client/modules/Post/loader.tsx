import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Skeleton } from '~/client/ui/components/Skeleton'

import styles from './styles.module.css'

const PostLoader = ({ style, className }: StyleProps) => (
	<article
		style={style}
		className={clsx(styles.container, className)}>
		<Skeleton
			width="75%"
			height={40}
			className={styles.title}
		/>
		<Skeleton
			width={100}
			height={20}
			className={styles.date}
		/>

		<div className={styles.cover__container}>
			<Skeleton
				height={450}
				className={styles.cover__img}
			/>
		</div>
		<Skeleton height={150} />
	</article>
)

export { PostLoader }
