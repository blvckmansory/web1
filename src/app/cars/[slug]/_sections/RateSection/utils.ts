import { getCurrency } from '~/shared/helpers/currency'
import { compareObject } from '~/shared/helpers/object'
import type { Rate, RateWithConditions } from '~/shared/entities/rate'

import type { Filter } from '~/client/features/car/useCarRate'

const getAvailableFilters = (rates: Rate[]) => {
	let available: Filter = {
		isResident: true,
		overTwentyThreeYears: false,
		experienceMoreThanYear: false,
	}

	rates.forEach((rate) => {
		available.isResident = rate.customRates.some(
			(customRate) => customRate.conditions.isResident,
		)
		available.experienceMoreThanYear = rate.customRates.some(
			(customRate) => customRate.conditions.experienceMoreThanYear,
		)
		available.overTwentyThreeYears = rate.customRates.some(
			(customRate) => customRate.conditions.overTwentyThreeYears,
		)
	})

	return available
}

const findRateWithConditions = (ratesWithConditions: RateWithConditions[], filter: Filter) => {
	return (
		ratesWithConditions.find((customRate) =>
			compareObject(
				{
					isResident: customRate.conditions.isResident,
					overTwentyThreeYears: customRate.conditions.overTwentyThreeYears,
					experienceMoreThanYear: customRate.conditions.experienceMoreThanYear,
				},
				filter,
			),
		) || ratesWithConditions[0]
	)
}

const generateFooter = (start: string, price?: number) =>
	price ? `${start} **${price} ${getCurrency()}**` : start

export { generateFooter, getAvailableFilters, findRateWithConditions }
