type CarType = {
	id: string
	name: string
}

type Car = {
	id: string
	min_tariff: number

	img: string
	title: string

	nova?: boolean
	pasting: boolean

	type: CarType
}

export type { Car, CarType }
