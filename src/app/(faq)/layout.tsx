import type { Layout } from '~/lib/types'

import { Divider } from '~/client/ui/components'

import { Section } from '~/client/components/Section'

import { FaqNav } from './_components/FaqNav'
import { FaqTitle } from './_components/FaqTitle'

import styles from './styles'

const FaqLayout: Layout = ({ children }) => (
	<Section className={styles.page()}>
		<FaqNav />
		<Divider
			dir="x"
			className="!max-w-full"
		/>
		<FaqTitle />
		<section className={styles.list()}>{children}</section>
	</Section>
)

export default FaqLayout
