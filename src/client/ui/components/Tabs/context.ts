'use client'

import { createContext, useContext } from 'react'

import type { ArrowFunction } from '~/lib/types'

import type { SelectableItem } from '../../(utils)/types'

type TabsConfig = {
	id?: string

	selectedItem?: SelectableItem
	setSelectedItem?: ArrowFunction<[SelectableItem]>
}

const TabsContext = createContext<TabsConfig>({} as TabsConfig)

const useTabsContext = (): TabsConfig => {
	const ctx = useContext(TabsContext)

	if (!ctx) {
		throw new Error('`useTabsContext` can not be used out of `TabsContext`')
	}

	return ctx
}

export { TabsContext, useTabsContext }
export type { TabsConfig }
