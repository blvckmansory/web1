'use client'

import { useCarRate } from '~/client/features/car/useCarRate'

import { Checkbox, type CheckboxProps } from '~/client/ui/components/Toggle'

const RateExpOverCheckbox = (props: CheckboxProps) => {
	const { value, onChange } = useCarRate((store) => ({
		value: store.experienceMoreThanYear,
		onChange: store.setExperienceMoreThanYear,
	}))

	return (
		<Checkbox
			label="Опыт больше 1 года"
			{...props}
			onChange={onChange}
			initialValue={value}
		/>
	)
}

export { RateExpOverCheckbox }
