'use client'

import { useCallback } from 'react'

import { useCarRate } from '~/client/features/car/useCarRate'

import { Switch, type SwitchProps } from '~/client/ui/components/Toggle'

const CarRateAgeOverSwitch = (props: SwitchProps) => {
	const [filter, setFilter] = useCarRate()

	const handleChange = useCallback((value: boolean) => {
		setFilter({ ageOver: value })
	}, [])

	return (
		<Switch
			labelLeft="Мне 19-22 года"
			labelRight="23 года и старше"
			{...props}
			onChange={handleChange}
			initialValue={filter.ageOver}
		/>
	)
}

export { CarRateAgeOverSwitch }
