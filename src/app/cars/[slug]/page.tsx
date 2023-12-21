import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import type { Page } from '~/lib/types'

import { fetchCar, fetchPreviewCars } from '~/server/car'

import { CarCard } from '~/client/components/cards/CarCard'
import { SectionSuggests } from '~/client/components/Section'

import { CharSection } from './_sections/CharSection'
import { TariffSection } from './_sections/TariffSection'

import { PreviewSection } from './_sections/PreviewSection'

const CarPage: Page<{ slug: string }> = async ({ params }) => {
	const { slug } = params

	const car = await fetchCar(slug)

	if (!car) {
		redirect('/cars')
	}

	const randomCars = await fetchPreviewCars({ random: true, count: 3 })

	return (
		<>
			<PreviewSection
				nova={car.nova}
				name={car.title}
				pasting={car.pasting}
				img="/assets/main-car-id.svg"
			/>
			<TariffSection />
			<CharSection />
			<SectionSuggests minmax={['260px', 'auto']}>
				{randomCars.map((car) => (
					<CarCard
						key={car.id}
						{...car}
					/>
				))}
			</SectionSuggests>
		</>
	)
}

export const metadata: Metadata = {}

export default CarPage
