'use client'

import { useMemo, useCallback } from 'react'

import { useToggle } from './useToggle'
import type { ControlledOrUncontrolledProps } from './useControlledValue'

type UseCheckboxProps = ControlledOrUncontrolledProps<boolean> & {
	disabled?: boolean
}

const useCheckbox = ({ value, onChange, disabled, readOnly, initialValue }: UseCheckboxProps) => {
	const clickable = !(disabled || readOnly)

	const [checked, { set, toggle }] = useToggle({
		value,
		onChange,
		initialValue,
		disabled: !clickable,
	})

	const changeHandler = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => set(event.target.checked),
		[set],
	)

	return useMemo(
		() => ({ checked, clickable, onChange: changeHandler, onClick: toggle }),
		[checked, clickable, changeHandler, toggle],
	)
}

type UseCheckboxReturn = ReturnType<typeof useCheckbox>

export { useCheckbox }
export type { UseCheckboxProps, UseCheckboxReturn }
