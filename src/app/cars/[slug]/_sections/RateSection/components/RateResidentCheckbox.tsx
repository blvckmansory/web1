'use client'

import { useCarRate } from '~/client/features/car/useCarRate'

import { Checkbox, type CheckboxProps } from '~/client/ui/components/Toggle'

const RateResidentCheckbox = (props: CheckboxProps) => {
	const { value, onChange } = useCarRate((store) => ({
		value: store.isResident,
		onChange: store.setIsResident,
	}))

	return (
		<Checkbox
			label="Я резидент Беларуси"
			{...props}
			onChange={onChange}
			initialValue={value}
		/>
	)
}

export { RateResidentCheckbox }
