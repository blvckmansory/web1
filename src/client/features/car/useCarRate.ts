'use client'

import { useMemo, useCallback } from 'react'
import { useQueryState, parseAsBoolean } from 'next-usequerystate'

type Filter = {
	ageOver: boolean
	isResident: boolean
}

const QUERY_AGE = 'ageOver' as const
const QUERY_RESIDENT = 'isResident' as const

const useCarRate = () => {
	const [ageOver, setAgeOver] = useQueryState(QUERY_AGE, {
		...parseAsBoolean,
		shallow: false,
		defaultValue: true,
	})
	const [isResident, setIsResident] = useQueryState(QUERY_RESIDENT, {
		...parseAsBoolean,
		shallow: false,
		defaultValue: true,
	})

	const filter = useMemo<Filter>(
		() => ({
			ageOver,
			isResident,
		}),
		[ageOver, isResident],
	)

	const handleChange = useCallback(
		(_filter: Partial<Filter>) => {
			typeof _filter.ageOver !== 'undefined' ? setAgeOver(_filter.ageOver) : null
			typeof _filter.isResident !== 'undefined' ? setIsResident(_filter.isResident) : null
		},
		[setAgeOver, setIsResident],
	)

	return [filter, handleChange] as const
}

export { useCarRate }
export type { Filter }
