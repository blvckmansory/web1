'use client'

import { useQueryState, parseAsString } from 'next-usequerystate'

const QUERY_COLOR = 'color' as const

const useCarColor = (defaultValue: string) => {
	const [carColor, setCarColor] = useQueryState(QUERY_COLOR, {
		...parseAsString,
		shallow: true,
		defaultValue,
	})

	return [carColor, setCarColor] as const
}

export { useCarColor }
