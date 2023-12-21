import { Metadata } from 'next'
import dynamic from 'next/dynamic'

import type { Page } from '~/lib/types'
import { fetchCarTypes, fetchPreviewCars } from '~/server/car'

import { Text, Divider } from '~/client/ui/components'

import { Section } from '~/client/components/Section'

import { CarContainerName } from '~/client/modules/CarContainer/CarContainerName'
import { CarContainerLoader } from '~/client/modules/CarContainer/loader'
import { CarFilterType, CarFilterPasting } from '~/client/modules/CarFilter'

import styles from './styles.module.css'

const CarContainer = dynamic(() => import('~/client/modules/CarContainer'), {
	loading: () => <CarContainerLoader />,
})

const CarsPage: Page = async () => {
	const cars = await fetchPreviewCars()
	const carTypes = await fetchCarTypes()

	return (
		<Section className={styles.container}>
			<Text
				as="h1"
				uppercase
				weight={700}
				className={styles.title}>
				Тарифы
			</Text>

			<div className={styles.filter}>
				<CarFilterType options={carTypes} />
				<CarFilterPasting />
			</div>

			<Divider />

			<div className={styles.list}>
				<CarContainerName options={carTypes} />
				<CarContainer initialData={cars} />
			</div>
		</Section>
	)
}

export const metadata: Metadata = {
	title: 'Тарифы | Каршеринг Hello - Поминутная аренда автомобилей в Минске',
	description:
		'Просматривайте информацию о полюбившихся линейках автомоболей и их тарифов использования.',
}

export default CarsPage
