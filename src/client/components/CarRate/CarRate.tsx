import { memo } from 'react'

import type { StyleProps } from '~/lib/types'

import { Spacer } from '~/client/ui/components/Spacer'
import { Text, Title } from '~/client/ui/components/Text'
import { List, ListItem } from '~/client/ui/components/List'

import { MarkdownContent } from '~/client/components/MarkdownContent'
import { PriceWithDiscount } from '~/client/components/PriceWithDiscount'

import { CarDiscount } from './CarDiscount'

import styles from './styles.module.css'

type Option = {
	name: string
	price: number
	newPrice?: number | null
}

type CarRateProps = StyleProps & {
	title: string
	description: string
	footer: string

	discount?: number
	options?: Option[]
}

const CarRate = memo<CarRateProps>(({ title, footer, options, discount, description }) => (
	<article className={`card ${styles.container}`}>
		<Title className="!text-xl">{title}</Title>

		{discount ? <CarDiscount discount={discount} /> : null}

		<Text weight={400}>{description}</Text>
		{discount ? <Text weight={400}>* Стоимость указана с учетом скидки.</Text> : null}

		<List>
			{options?.map((option, key) => (
				<ListItem
					key={key}
					className={styles.option__item}>
					<Text>{option.name}</Text> —
					<PriceWithDiscount
						price={option.price}
						newPrice={option.newPrice}
					/>
				</ListItem>
			))}
		</List>

		<Spacer
			y={48}
			full
		/>

		<MarkdownContent className={styles.footer}>{footer}</MarkdownContent>
	</article>
))

export { CarRate }
export type { CarRateProps }
