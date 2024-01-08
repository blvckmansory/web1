import { clsx } from '~/lib/clsx'

import type { CarCharacteristic } from '~/shared/entities/car'

import { Divider } from '~/client/ui/components/Divider'
import { Title, Label } from '~/client/ui/components/Text'
import { List, ListItem } from '~/client/ui/components/List'

import { Section, type SectionProps } from '~/client/components/Section'

import { MainChar } from './MainChar'

import styles from './styles.module.css'

type CharSectionProps = SectionProps & {
	main: CarCharacteristic<true>[]
	other: CarCharacteristic<false>[]
}

const CharSection = ({ main, other, className, ...props }: CharSectionProps) => (
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
			<List className={styles.icons}>
				{main.map((item, key) => (
					<MainChar
						key={key}
						title={item.name}
						icon={item.icon.url}
						hint={item.description}
					/>
				))}
			</List>
		</article>

		{other.length ? (
			<>
				<Divider dir="x" />
				<article>
					<Label
						uppercase
						className="text-sm">
						Особенности
					</Label>
					<List className={styles.features}>
						{other.map((feature, key) => (
							<ListItem key={key}>{feature.name}</ListItem>
						))}
					</List>
				</article>
			</>
		) : null}
	</Section>
)

export { CharSection }
export type { CharSectionProps }
