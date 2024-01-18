'use client'

import { useCallback } from 'react'

import { useCarRate } from '~/client/features/car/useCarRate'

import { Checkbox, type CheckboxProps } from '~/client/ui/components/Toggle'

const CarRateExpOverCheckbox = (props: CheckboxProps) => {
	const [filter, setFilter] = useCarRate()

	const handleChange = useCallback((value: boolean) => {
		setFilter({ experienceMoreThanYear: value })
	}, [])

	return (
		<Checkbox
			label="Опыт больше 1 года"
			{...props}
			onChange={handleChange}
			initialValue={filter.experienceMoreThanYear}
		/>
	)
}

export { CarRateExpOverCheckbox }
