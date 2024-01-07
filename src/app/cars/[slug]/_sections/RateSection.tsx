import { clsx } from '~/lib/clsx'
import { TARIFF_CONFIG } from '~/shared/config/tariff-config'

import { Divider } from '~/client/ui/components/Divider'
import { Title, Label } from '~/client/ui/components/Text'
import { List, ListItem } from '~/client/ui/components/List'

import { Section, type SectionProps } from '~/client/components/Section'
import { CarRateAgeOverSwitch } from '~/client/components/CarRateAgeOverSwitch'
import { CarRateResidentCheckbox } from '~/client/components/CarRateResidentCheckbox'

import { CarRate } from '~/client/components/CarRate'

import styles from './styles.module.css'

type RateSectionProps = SectionProps & {}

const RateSection = ({ className, ...props }: RateSectionProps) => {
	const tariffs = TARIFF_CONFIG.map((tariff, idx) => (
		<CarRate
			key={idx}
			title={tariff.title}
			options={tariff.options}
			footer={tariff.footer('0.39')}
			discount={tariff.discount}
			description={tariff.description('0.57 за 1 км')}
		/>
	))

	return (
		<Section
			{...props}
			className={clsx('gap-8', className)}>
			<Title className="!text-2xl">Тарифы</Title>

			<Divider dir="x" />

			<div className={styles.tariff__filter}>
				<CarRateResidentCheckbox />
				<CarRateAgeOverSwitch />
			</div>

			<div className={styles.tariff__container}>{tariffs}</div>

			<article>
				<Label uppercase>Условия</Label>
				<List className={styles.tariff_conditions}>
					{conditions.map((condition, key) => (
						<ListItem key={key}>{condition}</ListItem>
					))}
				</List>
			</article>
		</Section>
	)
}

const conditions = ['1 год водительского стажа', 'Бензин включен']

export { RateSection }
export type { RateSectionProps }
