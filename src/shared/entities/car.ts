import type { StrapiSchema } from '~/lib/strapi'

import type { Media } from './image'

type CarCharacteristic<Main = true> = StrapiSchema<
	{
		name: string
	} & (Main extends true
		? {
				icon: Media
				description: string
			}
		: {})
>

type CarMinuteRate = StrapiSchema<{
	minuteRate: number
	minuteRateParking: number

	isResident: boolean
}>

type CarColorImage = StrapiSchema<{
	color: string
	image: Media
}>

type CarType = StrapiSchema<{
	name: string
}>

type Car = StrapiSchema<{
	name: string
	minMinuteRate: number

	isNew?: boolean
	isHot?: boolean
	isWrapped?: boolean

	carType: CarType

	previewImage: Media

	characteristics: StrapiSchema<{
		mainFeatures: CarCharacteristic<true>[]
		otherFeatures: CarCharacteristic<false>[]
	}>

	minutes: CarMinuteRate[]
	sideImages: CarColorImage[]
}>

type CarId = Pick<Car, 'id' | 'name'>

type CarMetadata = Pick<Car, 'name' | 'carType' | 'minMinuteRate' | 'previewImage'>

type CarPreview = Pick<
	Car,
	'name' | 'minMinuteRate' | 'isWrapped' | 'isNew' | 'isHot' | 'carType' | 'id' | 'previewImage'
>

export type {
	Car,
	CarId,
	CarType,
	CarPreview,
	CarMetadata,
	CarMinuteRate,
	CarColorImage,
	CarCharacteristic,
}
