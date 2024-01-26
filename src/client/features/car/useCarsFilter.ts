'use client'

import { create } from 'zustand'

type CarsFilter = {
	wrapped: boolean
	carTypeId: string | null
}

type CarsFilterStore = CarsFilter & {
	setWrapped: (value: boolean) => unknown
	setCarTypeId: (value: string | null) => unknown
}

const useCarsFilter = create<CarsFilterStore>((set) => ({
	wrapped: true,
	carTypeId: null,
	setWrapped: (value: boolean) => set({ wrapped: value }),
	setCarTypeId: (value: string | null) => set({ carTypeId: value }),
}))

export { useCarsFilter }
export type { CarsFilter, CarsFilterStore }
