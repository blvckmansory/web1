'use client'

import { useMemo, useCallback } from 'react'
import { useQueryState, parseAsBoolean } from 'next-usequerystate'

type Filter = {
	isResident: boolean
	overTwentyThreeYears: boolean
	experienceMoreThanYear: boolean
}

const QUERY_AGE = 'ageOver' as const
const QUERY_RESIDENT = 'isResident' as const

const useCarRate = () => {
	const [overTwentyThreeYears, setAgeOver] = useQueryState(QUERY_AGE, {
		...parseAsBoolean,
		shallow: true,
		defaultValue: true,
	})
	const [experienceMoreThanYear, setExpOver] = useQueryState(QUERY_AGE, {
		...parseAsBoolean,
		shallow: true,
		defaultValue: true,
	})
	const [isResident, setIsResident] = useQueryState(QUERY_RESIDENT, {
		...parseAsBoolean,
		shallow: true,
		defaultValue: true,
	})

	const filter = useMemo<Filter>(
		() => ({
			isResident,
			overTwentyThreeYears,
			experienceMoreThanYear,
		}),
		[overTwentyThreeYears, experienceMoreThanYear, isResident],
	)

	const handleChange = useCallback((_filter: Partial<Filter>) => {
		typeof _filter.overTwentyThreeYears !== 'undefined'
			? setAgeOver(_filter.overTwentyThreeYears)
			: null
		typeof _filter.experienceMoreThanYear !== 'undefined'
			? setExpOver(_filter.experienceMoreThanYear)
			: null
		typeof _filter.isResident !== 'undefined' ? setIsResident(_filter.isResident) : null
	}, [])

	return [filter, handleChange] as const
}

export { useCarRate }
export type { Filter }
