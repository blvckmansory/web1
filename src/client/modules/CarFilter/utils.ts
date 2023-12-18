import type { SelectableItem } from '~/client/ui/(utils)/types'

const CAR_FILTER_PASTING = [
	{
		id: true,
		name: 'С оклейкой',
	},
	{
		id: false,
		name: 'Без оклейки',
	},
] satisfies SelectableItem[]

const ALL_TYPE = {
	id: 'ALL',
	name: 'Все',
} as const

export { ALL_TYPE, CAR_FILTER_PASTING }
