'use client'

import { useContext, createContext } from 'react'

import type { ArrowFunction } from '~/lib/types'

import type { Item } from './types'

type SelectConfig = {
	selectedItem?: Item
	setSelectedItem?: ArrowFunction<[Item]>
}

const SelectContext = createContext<SelectConfig>({} as SelectConfig)

const useSelectContext = (): SelectConfig => {
	const ctx = useContext(SelectContext)

	if (!ctx) {
		throw new Error('`useSelectContext` can not be used out of `SelectContext`')
	}

	return ctx
}

export { SelectContext, useSelectContext }
export type { SelectConfig }
