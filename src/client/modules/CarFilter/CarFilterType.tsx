'use client'

import { useCallback } from 'react'

import type { StyleProps } from '~/lib/types'

import { CarType } from '~/shared/entities/car'

import { Label } from '~/client/ui/components/Text'
import { Tab, Tabs } from '~/client/ui/components/Tabs'
import { Responsive } from '~/client/ui/components/Responsive'
import { Select, SelectItem } from '~/client/ui/components/Select'

import type { SelectableItem } from '~/client/ui/(utils)/types'

import { useCarsFilter } from '~/client/features/car/useCarsFilter'

import { renderOption, ALL_TYPE } from './utils'

type CarFilterTypeProps = StyleProps & {
	options: CarType[]
}

const CarFilterType = ({ style, className, options }: CarFilterTypeProps) => {
	const { value, onChange } = useCarsFilter((store) => ({
		value: store.carTypeId,
		onChange: store.setCarTypeId,
	}))

	const item = options.find((item) => String(item.id) === value) || ALL_TYPE

	const handleChange = useCallback(
		(_item?: SelectableItem) => {
			if (!_item) {
				return null
			}

			if (_item.id === ALL_TYPE.id) {
				return onChange(null)
			}

			return onChange(String(_item.id))
		},
		[onChange],
	)

	return (
		<div>
			<Label>Тип машины</Label>
			<Responsive
				style={style}
				className={className}
				desktop={
					<Tabs
						item={item}
						onChange={handleChange}>
						{renderOption(Tab, ALL_TYPE)}
						{options.map((option) => renderOption(Tab, option))}
					</Tabs>
				}
				mobile={
					<Select
						item={item}
						onChange={handleChange}>
						{renderOption(Tab, ALL_TYPE)}
						{options.map((option) => renderOption(SelectItem, option))}
					</Select>
				}
			/>
		</div>
	)
}

export { CarFilterType }
export type { CarFilterTypeProps }
