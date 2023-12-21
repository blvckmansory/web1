import type { Layout } from '~/lib/types'

import { Divider } from '~/client/ui/components/Divider'

import { Section } from '~/client/components/Section'

import { FaqNav } from './_components/FaqNav'
import { FaqTitle } from './_components/FaqTitle'

import styles from './styles.module.css'

const FaqLayout: Layout = ({ children }) => (
	<Section className={styles.page}>
		<div className={styles.inner}>
			<FaqNav />
			<Divider
				dir="x"
				className="!max-w-full"
			/>
			<FaqTitle />
			{children}
		</div>
	</Section>
)

export default FaqLayout
