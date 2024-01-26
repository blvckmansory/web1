'use client'

import { useCarRate } from '~/client/features/car/useCarRate'

import { Switch, type SwitchProps } from '~/client/ui/components/Toggle'

const RateAgeOverSwitch = (props: SwitchProps) => {
	const { value, onChange } = useCarRate((store) => ({
		value: store.overTwentyThreeYears,
		onChange: store.setOverTwentyThreeYears,
	}))

	return (
		<Switch
			labelLeft="Мне 19-22 года"
			labelRight="23 года и старше"
			{...props}
			onChange={onChange}
			initialValue={value}
		/>
	)
}

export { RateAgeOverSwitch }
