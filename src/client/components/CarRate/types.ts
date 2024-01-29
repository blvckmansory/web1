import type { StyleProps } from '~/lib/types'

type CarRateOption = {
	name: string
	price: number
	newPrice?: number | null
}

type CarRateProps = StyleProps & {
	title: string
	description: string
	footer: string

	discount?: number
	options?: CarRateOption[]
}

export type { CarRateOption, CarRateProps }
