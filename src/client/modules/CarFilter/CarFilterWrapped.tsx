'use client'

import { useCallback } from 'react'

import type { StyleProps } from '~/lib/types'

import { Label } from '~/client/ui/components/Text'
import { Tab, Tabs } from '~/client/ui/components/Tabs'
import { Responsive } from '~/client/ui/components/Responsive'
import { Select, SelectItem } from '~/client/ui/components/Select'
import type { SelectableItem } from '~/client/ui/(utils)/types'

import { useCarsFilter } from '~/client/features/car/useCarsFilter'

import { renderOption, CAR_FILTER_WRAPPED } from './utils'

const CarFilterWrapped = ({ style, className }: StyleProps) => {
	const { value, onChange } = useCarsFilter((store) => ({
		value: store.wrapped,
		onChange: store.setWrapped,
	}))

	const item = CAR_FILTER_WRAPPED.find((item) => item.id === value)

	const handleChange = useCallback(
		(_item?: SelectableItem) => {
			_item && onChange(_item.id as boolean)
		},
		[onChange],
	)

	return (
		<div>
			<Label>Оклейка</Label>
			<Responsive
				style={style}
				className={className}
				desktop={
					<Tabs
						item={item}
						onChange={handleChange}>
						{CAR_FILTER_WRAPPED.map((tab) => renderOption(Tab, tab))}
					</Tabs>
				}
				mobile={
					<Select
						item={item}
						onChange={handleChange}>
						{CAR_FILTER_WRAPPED.map((tab) => renderOption(SelectItem, tab))}
					</Select>
				}
			/>
		</div>
	)
}

export { CarFilterWrapped }
