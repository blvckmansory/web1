'use client'

import { useCallback } from 'react'

import type { ArrowFunction } from '~/lib/types'

import { useControlledValue } from './useControlledValue'
import type { ControlledOrUncontrolledProps } from './useControlledValue'

type UseToggleProps =
	| (Partial<{
			disabled: boolean
			onActive: ArrowFunction<[boolean]>
			onUnactive: ArrowFunction<[boolean]>
	  }> &
			ControlledOrUncontrolledProps<boolean>)
	| undefined

type UseToggleMethods = {
	open: ArrowFunction
	close: ArrowFunction
	toggle: ArrowFunction
	set: ArrowFunction<[boolean]>
}

type UseToggleReturn = [boolean, UseToggleMethods]

const useToggle = ({
	onActive,
	onChange,
	onUnactive,
	value: externalValue,
	disabled = false,
	readOnly = false,
	initialValue = false,
}: UseToggleProps = {}): UseToggleReturn => {
	const [value, setValue] = useControlledValue({
		onChange,
		readOnly,
		initialValue,
		value: externalValue,
	})

	const set = useCallback(
		(newValue: boolean) => {
			if (disabled || readOnly) {
				return null
			}

			setValue(newValue)
			newValue ? onActive?.(newValue) : onUnactive?.(newValue)
		},
		[disabled, readOnly],
	)

	const open = useCallback(() => set(true), [])
	const close = useCallback(() => set(false), [])
	const toggle = useCallback(() => set(!value), [value])

	return [
		value,
		{
			set,
			open,
			close,
			toggle,
		},
	]
}

export { useToggle }
export type { UseToggleProps, UseToggleMethods, UseToggleReturn }
