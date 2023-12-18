'use client'

import { createContext, useContext } from 'react'

import type { ArrowFunction } from '~/lib/types'

type RadioConfig = {
	id?: string

	selectedValue?: string
	setSelectedValue?: ArrowFunction<[string]>
}

const RadioContext = createContext<RadioConfig>({} as RadioConfig)

const useRadioContext = (): RadioConfig => {
	const ctx = useContext(RadioContext)

	if (!ctx) {
		throw new Error('`useRadioContext` can not be used out of `RadioContext`')
	}

	return ctx
}

export { RadioContext, useRadioContext }
export type { RadioConfig }
