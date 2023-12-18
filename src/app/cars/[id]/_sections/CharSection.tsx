import { clsx } from '~/lib/clsx'

import { List, Title, Label, Divider, ListItem } from '~/client/ui/components'
import { Section, type SectionProps } from '~/client/components/Section'

import { MainChar, type MainCharProps } from './components/MainChar'

import styles from './styles.module.css'

type CharSectionProps = SectionProps & {}

const CharSection = ({ className, ...props }: CharSectionProps) => (
	<Section
		{...props}
		className={clsx('gap-8', className)}>
		<Title className="!text-2xl">Характеристики</Title>
		<Divider dir="x" />
		<article>
			<Label
				uppercase
				className="text-sm">
				Основные
			</Label>
			<List className={styles.chars__icons}>
				{main.map((item, key) => (
					<MainChar
						key={key}
						{...item}
					/>
				))}
			</List>
		</article>
		<Divider dir="x" />
		<article>
			<Label
				uppercase
				className="text-sm">
				Особенности
			</Label>
			<List className={styles.chars__features}>
				{features.map((feature, key) => (
					<ListItem key={key}>{feature}</ListItem>
				))}
			</List>
		</article>
	</Section>
)

const main: MainCharProps[] = [
	{
		title: 'Коробка',
		hint: 'АККП',
		icon: 'brain-circuit',
	},
	{
		title: 'Двигатель',
		hint: '2.0L (220 л.с.)',
		icon: 'factory',
	},
	{
		title: 'Зарядка',
		hint: 'USB',
		icon: 'smartphone',
	},
	{
		title: 'Топливо',
		hint: 'Бензин',
		icon: 'fuel',
	},
	{
		title: 'Бустер',
		icon: 'arrow-up-from-line',
	},
	{
		title: 'Держатель для телефона',
		icon: 'smartphone',
	},
]

const features = [
	'Спортивный интерьер',
	'Панорамная крыша с люком',
	'LED фары',
	'Климат-контроль',
	'Электроручник',
	'LED фары',
	'Климат-контроль',
]

export { CharSection }
export type { CharSectionProps }
