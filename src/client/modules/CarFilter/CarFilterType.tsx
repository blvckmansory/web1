'use client'

import { useCallback } from 'react'

import type { StyleProps } from '~/lib/types'

import { CarType } from '~/shared/entities/car'

import { Label } from '~/client/ui/components/Text'
import { Tab, Tabs } from '~/client/ui/components/Tabs'
import { Responsive } from '~/client/ui/components/Responsive'
import { Select, SelectItem } from '~/client/ui/components/Select'
import type { SelectableItem } from '~/client/ui/(utils)/types'

import { useCarFilter } from '~/client/features/car/useCarFilter'

import { ALL_TYPE } from './utils'

type CarFilterTypeProps = {
	options: CarType[]
}

const CarFilterType = ({ style, className, options }: StyleProps & CarFilterTypeProps) => {
	const [filter, setFilter] = useCarFilter()

	const item = options.find((item) => String(item.id) === filter.typeId) || ALL_TYPE

	const handleChange = useCallback(
		(_item?: SelectableItem) => {
			if (!_item) {
				return null
			}

			if (_item.id === ALL_TYPE.id) {
				return setFilter({ typeId: null })
			}

			return setFilter({ typeId: String(_item.id) })
		},
		[setFilter],
	)

	const renderComp = useCallback(
		// @ts-expect-error
		(Comp, CompItem) => (
			<Comp
				item={item}
				onChange={handleChange}>
				<CompItem {...ALL_TYPE} />
				{options.map((tab, key) => (
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
			<Label>Тип машины</Label>
			<Responsive
				style={style}
				className={className}
				desktop={renderComp(Tabs, Tab)}
				mobile={renderComp(Select, SelectItem)}
			/>
		</div>
	)
}

export { CarFilterType }
