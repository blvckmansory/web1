'use client'

import { create } from 'zustand'

type Filter = {
	isResident: boolean
	overTwentyThreeYears: boolean
	experienceMoreThanYear: boolean
}

type CarRateStore = Filter & {
	setIsResident: (value: boolean) => unknown
	setOverTwentyThreeYears: (value: boolean) => unknown
	setExperienceMoreThanYear: (value: boolean) => unknown
}

const useCarRate = create<CarRateStore>((set) => ({
	isResident: true,
	overTwentyThreeYears: true,
	experienceMoreThanYear: true,

	setIsResident: (value: boolean) => set({ isResident: value }),
	setOverTwentyThreeYears: (value: boolean) => set({ overTwentyThreeYears: value }),
	setExperienceMoreThanYear: (value: boolean) => set({ experienceMoreThanYear: value }),
}))

export { useCarRate }
export type { Filter }
