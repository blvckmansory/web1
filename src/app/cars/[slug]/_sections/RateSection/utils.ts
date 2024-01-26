import { formatCurrency } from '~/shared/helpers/currency'
import type { Rate, RateWithConditions } from '~/shared/entities/rate'

import type { Filter } from '~/client/features/car/useCarRate'

type AvailableFilter = Record<keyof Filter, boolean>

const getAvailableFilters = (rates: Rate[]): AvailableFilter => {
	let available = {
		isResident: {
			true: false,
			false: false,
		},
		overTwentyThreeYears: {
			true: false,
			false: false,
		},
		experienceMoreThanYear: {
			true: false,
			false: false,
		},
	}

	rates.forEach(({ customRates }) =>
		customRates.forEach(({ conditions }) => {
			Object.entries(conditions).forEach(([key, value]) => {
				if (typeof value !== 'boolean') {
					return
				}
				// @ts-expect-error
				return (available[key][value] = true)
			})
		}),
	)

	return Object.entries(available).reduce(
		(acc, [key, value]) => {
			// @ts-expect-error
			acc[key] = value.true && value.false ? true : false
			return acc
		},
		{
			isResident: false,
			overTwentyThreeYears: false,
			experienceMoreThanYear: false,
		},
	)
}

const findRateWithConditions = (_0: RateWithConditions[], filter: Filter) => {
	const _1 = _0.filter((_rate) => _rate.conditions.isResident === filter.isResident)

	if (!_1.length) {
		return _0.at(0)
	}

	const _2 = _1.filter(
		(_rate) => _rate.conditions.experienceMoreThanYear === filter.experienceMoreThanYear,
	)

	if (!_2.length) {
		return _1.at(0)
	}

	const _3 = _2.filter(
		(_rate) => _rate.conditions.overTwentyThreeYears === filter.overTwentyThreeYears,
	)

	if (!_3.length) {
		return _2.at(0)
	}

	return _3.at(0)
}

const generateFooter = (start: string, cost?: number) => {
	if (!cost) {
		return start
	}

	return `${start} **${formatCurrency(cost)}**`
}

export { generateFooter, getAvailableFilters, findRateWithConditions }
