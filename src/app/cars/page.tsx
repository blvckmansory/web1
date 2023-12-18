import { Metadata } from 'next'
import dynamic from 'next/dynamic'

import type { Page } from '~/lib/types'
import { fetchCarTypes, fetchPreviewCars } from '~/server/car'

import { Text, Divider } from '~/client/ui/components'

import { Section } from '~/client/components/Section'

import { CarListName } from '~/client/modules/CarList/CarListName'
import { CarListLoader } from '~/client/modules/CarList/loader'
import { CarFilterType, CarFilterPasting } from '~/client/modules/CarFilter'

import styles from './styles.module.css'

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
				<CarListName options={carTypes} />
				<CarList initialData={cars} />
			</div>
		</Section>
	)
}

const CarList = dynamic(() => import('~/client/modules/CarList'), {
	loading: () => <CarListLoader />,
})

export const metadata: Metadata = {}

export default CarsPage
