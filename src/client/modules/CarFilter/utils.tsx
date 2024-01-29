import type { SelectableItem } from '~/client/ui/(utils)/types'

const CAR_FILTER_WRAPPED = [
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
	id: '',
	name: 'Все',
} as const

const renderOption = <T extends SelectableItem>(
	Item: React.JSXElementConstructor<any>,
	props: T,
) => (
	<Item
		key={props.id}
		{...props}
	/>
)

export { ALL_TYPE, CAR_FILTER_WRAPPED, renderOption }
