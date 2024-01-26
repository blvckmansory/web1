import { StrapiSchema } from '~/lib/strapi'

type RateType = StrapiSchema<{
	name: string
	footer: string
	description: string
}>

type RateOption = StrapiSchema<{
	name: string
	price: number
	newPrice: number | null | undefined
}>

type RateConditions = StrapiSchema<{
	isResident: boolean
	overTwentyThreeYears: boolean
	experienceMoreThanYear: boolean
}>

type RateWithConditions = StrapiSchema<{
	cost: number
	/**
	 * @description integer from 0 to 100
	 */
	discount: number
	options: RateOption[]
	conditions: RateConditions
}>

type Rate = StrapiSchema<{
	rateType: RateType
	customRates: RateWithConditions[]
}>

export type { Rate, RateType, RateOption, RateConditions, RateWithConditions }
