type CarRateOption = {
	name: string
	price: number
	newPrice?: number | null
}

type CarRateProps = {
	title: string
	description: string
	footer: string

	discount?: number
	options?: CarRateOption[]
}

export type { CarRateOption, CarRateProps }
