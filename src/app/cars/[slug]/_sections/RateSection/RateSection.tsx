'use client'

import { useMemo } from 'react'

import { clsx } from '~/lib/clsx'

import type { Rate } from '~/shared/entities/rate'

import { useCarRate } from '~/client/features/car/useCarRate'

import { Title } from '~/client/ui/components/Text'
import { Divider } from '~/client/ui/components/Divider'

import { CarRate } from '~/client/components/CarRate'
import { Section, type SectionProps } from '~/client/components/Section'

import { RateFilters, RateConditions } from './components'

import { findRateWithConditions, generateFooter, getAvailableFilters } from './utils'

import styles from './styles.module.css'

type RateSectionProps = SectionProps & {
	rates: Rate[]
}

const RateSection = ({ rates, className, ...props }: RateSectionProps) => {
	const [filter] = useCarRate()

	const availableFilters = useMemo(() => getAvailableFilters(rates), [rates])

	const ratesByFilter = useMemo(
		() =>
			rates.map(({ id, rateType, customRates }) => ({
				id,
				title: rateType.name,
				footer: rateType.footer,
				description: rateType.description,

				current: findRateWithConditions(customRates, filter),
			})),
		[rates, filter],
	)

	return (
		<Section
			{...props}
			className={clsx('gap-8', className)}>
			<Title className="!text-2xl">Тарифы</Title>

			<Divider dir="x" />

			<RateFilters
				ageOver={availableFilters.overTwentyThreeYears}
				expOver={availableFilters.experienceMoreThanYear}
			/>

			<article className={styles.container}>
				{ratesByFilter.map(({ id, current, footer, ...props }) => (
					<CarRate
						{...props}
						key={id}
						options={current?.options}
						discount={current?.discount}
						footer={generateFooter(footer, current?.cost)}
					/>
				))}
			</article>

			<RateConditions
				ageOver={!availableFilters.overTwentyThreeYears}
				expOver={!availableFilters.experienceMoreThanYear}
			/>
		</Section>
	)
}

export { RateSection }
export type { RateSectionProps }
