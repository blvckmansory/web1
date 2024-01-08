'use client'

import { useCallback } from 'react'

import { useCarRate } from '~/client/features/car/useCarRate'

import { Checkbox, type CheckboxProps } from '~/client/ui/components/Toggle'

const RateResidentCheckbox = (props: CheckboxProps) => {
	const [filter, setFilter] = useCarRate()

	const handleChange = useCallback((value: boolean) => {
		setFilter({ isResident: value })
	}, [])

	return (
		<Checkbox
			label="Я резидент Беларуси"
			{...props}
			onChange={handleChange}
			initialValue={filter.isResident}
		/>
	)
}

export { RateResidentCheckbox }
