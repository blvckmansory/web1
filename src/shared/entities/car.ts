import type { StrapiSchema } from '~/lib/strapi'

import type { Rate } from './rate'
import type { Media } from './image'

type CarCharacteristicBase = {
	name: string
}

type CarCharacteristicExtended = {
	icon: Media
	description: string
}

type CarCharacteristic<Extended = true> = StrapiSchema<
	CarCharacteristicBase & (Extended extends true ? CarCharacteristicExtended : {})
>

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

	rates: Rate[]

	sideImages: CarColorImage[]

	characteristics: StrapiSchema<{
		mainFeatures: CarCharacteristic<true>[]
		otherFeatures: CarCharacteristic<false>[]
	}>
}>

type CarId = Pick<Car, 'id' | 'name'>

type CarMetadata = Pick<Car, 'name' | 'carType' | 'minMinuteRate' | 'previewImage'>

type CarPreview = Pick<
	Car,
	'name' | 'minMinuteRate' | 'isWrapped' | 'isNew' | 'isHot' | 'carType' | 'id' | 'previewImage'
>

export type { Car, CarId, CarType, CarPreview, CarMetadata, CarColorImage, CarCharacteristic }
