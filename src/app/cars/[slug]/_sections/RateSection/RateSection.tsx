'use client'

import { memo, useMemo } from 'react'

import { clsx } from '~/lib/clsx'

import type { Rate } from '~/shared/entities/rate'
import type { CarConditon } from '~/shared/entities/car'

import { useCarRate } from '~/client/features/car/useCarRate'

import { Divider } from '~/client/ui/components/Divider'
import { Label, Title } from '~/client/ui/components/Text'
import { List, ListItem } from '~/client/ui/components/List'

import { CarRate } from '~/client/components/CarRate'
import { Section, type SectionProps } from '~/client/components/Section'

import { RateFilters } from './components'

import { findRateWithConditions, generateFooter, getAvailableFilters } from './utils'

import styles from './styles.module.css'

type RateSectionProps = SectionProps & {
	rates: Rate[]
	conditions: CarConditon[]
}

const RateSection = memo<RateSectionProps>(({ rates, conditions, className, ...props }) => {
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
						footer={generateFooter(
							footer,
							current?.cost
								? { price: current?.cost, discount: current.discount }
								: undefined,
						)}
					/>
				))}
			</article>

			{conditions?.length ? (
				<article>
					<Label uppercase>Условия</Label>
					<List className="flex flex-row flex-wrap gap-y-4 gap-x-20">
						{conditions.map((condition) => (
							<ListItem key={condition.id}>{condition.name}</ListItem>
						))}
					</List>
				</article>
			) : null}
		</Section>
	)
})

export { RateSection }
export type { RateSectionProps }
