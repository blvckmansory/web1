'use client'

import { useCallback } from 'react'

import type { StyleProps } from '~/lib/types'

import { Label } from '~/client/ui/components/Text'
import { Tab, Tabs } from '~/client/ui/components/Tabs'
import { Responsive } from '~/client/ui/components/Responsive'
import { Select, SelectItem } from '~/client/ui/components/Select'
import type { SelectableItem } from '~/client/ui/(utils)/types'

import { useCarFilter } from '~/client/features/car/useCarFilter'

import { CAR_FILTER_PASTING } from './utils'

const CarFilterPasting = ({ style, className }: StyleProps) => {
	const [filter, setFilter] = useCarFilter()

	const item = CAR_FILTER_PASTING.find((item) => item.id === filter.pasting)

	const handleChange = useCallback(
		(_item?: SelectableItem) => {
			_item && setFilter({ pasting: _item.id as boolean })
		},
		[setFilter],
	)

	const renderComp = useCallback(
		// @ts-expect-error
		(Comp, CompItem) => (
			<Comp
				item={item}
				onChange={handleChange}>
				{CAR_FILTER_PASTING.map((tab, key) => (
					<CompItem
						{...tab}
						key={key}
					/>
				))}
			</Comp>
		),
		[item, handleChange],
	)

	return (
		<div>
			<Label>Оклейка</Label>
			<Responsive
				style={style}
				className={className}
				desktop={renderComp(Tabs, Tab)}
				mobile={renderComp(Select, SelectItem)}
			/>
		</div>
	)
}

export { CarFilterPasting }
