'use client'

import { useCallback, useState } from 'react'

import type { ArrowFunction } from '~/lib/types'

type ControlledOrUncontrolledProps<T> = Partial<{
	readOnly: boolean

	value: T | null
	initialValue: T | null

	onChange: ArrowFunction<[T]>
}>

const useControlledValue = <T>({
	readOnly,
	onChange,
	initialValue,
	value: externalValue,
}: ControlledOrUncontrolledProps<T> = {}) => {
	const [localValue, setLocalValue] = useState<T | null | undefined>(initialValue)
	const value = (typeof externalValue === 'undefined' ? localValue : externalValue) as T

	const setValue = useCallback(
		(val: T) => {
			if (readOnly) {
				return null
			}

			setLocalValue(val)
			onChange?.(val)
		},
		[readOnly, setLocalValue, onChange],
	)

	return [value, setValue] as const
}

export { useControlledValue }
export type { ControlledOrUncontrolledProps }
