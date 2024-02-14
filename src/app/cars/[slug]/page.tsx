import { notFound, redirect } from 'next/navigation'

import type { Page, GenerateMetadata } from '~/lib/types'

import { fetchCar, fetchCarIds, fetchCarMetadata } from '~/server/car'

import { CarSuggests } from '~/client/modules/CarSuggests'

import { RateSection } from './_sections/RateSection'
import { CharSection } from './_sections/CharSection'
import { PreviewSection } from './_sections/PreviewSection'

type Params = {
	slug: string
}

const CarPage: Page<Params> = async ({ params }) => {
	const { slug } = params

	const { data: car } = await fetchCar(slug)

	if (!car) {
		redirect('/cars')
	}

	return (
		<>
			<PreviewSection
				name={car.name}
				carType={car.carType}
				isWrapped={car.isWrapped}
				sideImages={car.sideImages}
			/>
			<RateSection
				rates={car.rates}
				conditions={car.conditions}
			/>
			<CharSection
				main={car.characteristics.mainFeatures}
				other={car.characteristics.otherFeatures}
			/>
			<CarSuggests excludeId={slug} />
		</>
	)
}

const generateStaticParams = async () => {
	const { data: cars } = await fetchCarIds()

	return cars.map((post) => ({
		slug: String(post.id),
	}))
}

const generateMetadata: GenerateMetadata<Params> = async ({ params }) => {
	const slug = params.slug

	const { data: car } = await fetchCarMetadata(slug)

	if (!car) {
		notFound()
	}

	const images = [car.previewImage.url]
	const title = `${car.name} | Тарифы | Каршеринг Hello - Поминутная аренда автомобилей в Минске`
	const description = title

	return {
		title,
		description,
		twitter: {
			title,
			images,
			description,
		},
		openGraph: {
			title,
			images,
			description,
			type: 'article',
		},
		alternates: {
			canonical: `/cars/${slug}`,
		},
	}
}

export default CarPage
export { generateMetadata, generateStaticParams }
