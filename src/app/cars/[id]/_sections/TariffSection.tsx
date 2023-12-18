import { clsx } from '~/lib/clsx'
import { TARIFF_CONFIG } from '~/shared/config/tariff-config'

import { List, Title, Label, Switch, Divider, ListItem, Checkbox } from '~/client/ui/components'

import { Section, type SectionProps } from '~/client/components/Section'

import { Tariff } from './components/Tariff'

import styles from './styles.module.css'

type TariffSectionProps = SectionProps & {}

const TariffSection = ({ className, ...props }: TariffSectionProps) => {
	const tariffs = TARIFF_CONFIG.map((tariff, idx) => (
		<Tariff
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
				<Checkbox label="Я не резидент Беларуси" />
				<Switch
					labelLeft="Мне 19-22 года"
					labelRight="23 года и старше"
				/>
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

const conditions = ['Возраст от 19 до 22 лет', '1 год водительского стажа', 'Бензин включен']

export { TariffSection }
export type { TariffSectionProps }
