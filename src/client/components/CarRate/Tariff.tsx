import type { StyleProps } from '~/lib/types'

import { Text, Title } from '~/client/ui/components/Text'
import { List, ListItem } from '~/client/ui/components/List'

import { HeroIcon } from '~/client/components/HeroIcon'

import styles from './styles.module.css'

type Option = {
	name: string
	price: number
}

type CarRateProps = StyleProps & {
	title: string
	description: string
	footer: string

	discount?: number
	options: Option[]
}

const CarRate = ({ title, footer, options, discount, description }: CarRateProps) => (
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

export { CarRate }
export type { CarRateProps }
