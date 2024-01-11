import { memo } from 'react'

import type { StyleProps } from '~/lib/types'

import { Text, Title } from '~/client/ui/components/Text'
import { List, ListItem } from '~/client/ui/components/List'

import { MarkdownContent } from '~/client/components/MarkdownContent'
import { PriceWithDiscount } from '~/client/components/PriceWithDiscount'

import { CarDiscount } from './CarDiscount'

import styles from './styles.module.css'
import { Spacer } from '~/client/ui/components'

type Option = {
	name: string
	price: number
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

		<CarDiscount discount={discount} />

		<Text weight={400}>{description}</Text>
		{discount ? <Text weight={400}>* Стоимость указана с учетом скидки.</Text> : null}

		<List>
			{options?.map((option, key) => (
				<ListItem
					key={key}
					className={styles.option__item}>
					<Text>{option.name}</Text> —
					<PriceWithDiscount
						discount={discount}
						price={option.price}
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
