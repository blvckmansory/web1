import type { Populate, StrapiApiSchema } from '~/lib/strapi'

import type { Locale } from './locale'

type CarCategoryAPI = StrapiApiSchema<{
	name: string
}>

type CarApi = StrapiApiSchema<{
	min_tariff: number

	img: string
	title: string

	locale: Locale
	nova?: boolean
	pasting: boolean

	type: Populate<CarCategoryAPI>
}>

export type { CarApi }
