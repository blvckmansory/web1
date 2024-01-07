import { Skeleton } from '~/client/ui/components/Skeleton'

import { Section } from '~/client/components/Section'
import { PostLoader } from '~/client/modules/Post/loader'

import styles from './styles.module.css'

const Loading = () => (
	<>
		<Section className={styles.post__container}>
			<div className="w-full pb-8 border-b-px border-b-divider">
				<Skeleton
					height={32}
					width={300}
				/>
			</div>

			<PostLoader className={styles.post_inner} />
		</Section>
	</>
)

export default Loading
