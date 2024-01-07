import type { Metadata } from 'next'

import type { Page } from '~/lib/types'

import { Text } from '~/client/ui/components/Text'

import { Section } from '~/client/components/Section'
import { PostContainer } from '~/client/modules/PostContainer'

import styles from './styles.module.css'

type SearchParams = {
	page: string
}

const Posts: Page<{}, SearchParams> = async ({ searchParams }) => {
	const page = Number.parseInt(searchParams.page) || 1

	return (
		<Section className={styles.page}>
			<Text
				as="h1"
				uppercase
				weight={700}
				className={styles.title}>
				Новости
			</Text>

			<PostContainer
				page={page}
				perPage={4}
			/>
		</Section>
	)
}

export const metadata: Metadata = {
	title: 'Новости | Каршеринг Hello - Поминутная аренда автомобилей в Минске',
	description: 'Новости от Helloшки, все самые свежие и интересные новости.',
	alternates: {
		canonical: '/posts',
	},
}

export default Posts
