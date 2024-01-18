'use client'

import { useMemo, useCallback } from 'react'
import { useQueryState, parseAsString, parseAsBoolean } from 'next-usequerystate'

type Filter = {
	typeId: string | null
	pasting: boolean
}

const QUERY_TYPE = 'typeId' as const
const QUERY_WRAPPED = 'wrapped' as const

const useCarFilter = () => {
	const [typeId, setTypeId] = useQueryState(QUERY_TYPE, {
		...parseAsString,
		shallow: false,
	})
	const [pasting, setPasting] = useQueryState(QUERY_WRAPPED, {
		...parseAsBoolean,
		shallow: false,
		defaultValue: true,
	})

	const filter = useMemo<Filter>(
		() => ({
			typeId,
			pasting,
		}),
		[typeId, pasting],
	)

	const handleChange = useCallback(
		(_filter: Partial<Filter>) => {
			typeof _filter.pasting !== 'undefined' ? setPasting(_filter.pasting) : null
			typeof _filter.typeId !== 'undefined' ? setTypeId(_filter.typeId) : null
		},
		[setTypeId, setPasting],
	)

	return [filter, handleChange] as const
}

export { useCarFilter, QUERY_TYPE, QUERY_WRAPPED }
export type { Filter }
