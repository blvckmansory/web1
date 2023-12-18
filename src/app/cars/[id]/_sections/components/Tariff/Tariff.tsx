import type { StyleProps } from '~/lib/types'

import { Text, List, Title, ListItem } from '~/client/ui/components'
import { HeroIcon } from '~/client/components/HeroIcon'

import styles from './styles.module.css'

type Option = {
	name: string
	price: number
}

type TariffProps = StyleProps & {
	title: string
	description: string
	footer: string

	discount?: number
	options: Option[]
}

const Tariff = ({ title, footer, options, discount, description }: TariffProps) => (
	<article className={`card ${styles.container}`}>
		<Title className="!text-xl">{title}</Title>

		{discount ? (
			<div className={styles.discount}>
				<HeroIcon
					name="percent"
					color="#22FF01"
				/>
				<Text>
					Действует скидка до <b>{discount}</b> %
				</Text>
			</div>
		) : null}

		<Text weight={400}>{description}</Text>

		<List>
			{options.map((option, key) => (
				<ListItem
					key={key}
					className={styles.option__item}>
					<Text>{option.name}</Text> —
					<Text className="text-link-active">{option.price} BYN</Text>
				</ListItem>
			))}
		</List>

		<Text className={styles.footer}>{footer}</Text>
	</article>
)

export { Tariff }
