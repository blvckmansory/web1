import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import type { Page } from '~/lib/types'
import { fetchCarTypes, fetchPreviewCars } from '~/server/car'

import { Text, Divider } from '~/client/ui/components'

import { Section } from '~/client/components/Section'

import { CarContainer, CarContainerName } from '~/client/modules/CarContainer'
import { CarFilterType, CarFilterWrapped } from '~/client/modules/CarFilter'

import styles from './styles.module.css'

const CarsPage: Page = async () => {
	const { data: cars } = await fetchPreviewCars()
	const { data: carTypes } = await fetchCarTypes()

	if (!cars) {
		notFound()
	}

	return (
		<Section className={styles.container}>
			<div className={styles.inner}>
				<Text
					as="h1"
					uppercase
					weight={700}
					className={styles.title}>
					Тарифы
				</Text>

				<div className={styles.filter}>
					<CarFilterType options={carTypes} />
					<CarFilterWrapped />
				</div>

				<Divider />

				<div className={styles.list}>
					<CarContainerName options={carTypes} />
					<CarContainer initialData={cars} />
				</div>
			</div>
		</Section>
	)
}

export const metadata: Metadata = {
	title: 'Тарифы | Каршеринг Hello - Поминутная аренда автомобилей в Минске',
	description:
		'Просматривайте информацию о полюбившихся линейках автомоболей и их тарифов использования.',
	alternates: {
		canonical: '/cars',
	},
}

export default CarsPage
