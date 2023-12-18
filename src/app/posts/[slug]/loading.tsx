import { Skeleton } from '~/client/ui/components/Skeleton'

import { Section } from '~/client/components/Section'
import { PostLoader } from '~/client/modules/Post/loader'

import styles from './styles.module.css'

const Loading = () => (
	<>
		<Section className={styles.post__container}>
			<Skeleton className="h-6 mb-8" />
			<PostLoader className={styles.post_inner} />
		</Section>
	</>
)

export default Loading
