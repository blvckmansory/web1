import { Text } from '~/client/ui/components/Text'
import { Spacer } from '~/client/ui/components/Spacer'
import { Collapse } from '~/client/ui/components/Collapse'
import { List, ListItem } from '~/client/ui/components/List'

import { MarkdownContent } from '~/client/components/MarkdownContent'
import { PriceWithDiscount } from '~/client/components/PriceWithDiscount'

import { CarDiscount } from './CarDiscount'
import type { CarRateProps } from './types'

import styles from './styles.mobile.module.css'

const CarRateMobile: React.FC<CarRateProps> = ({
	title,
	footer,
	options,
	discount,

	description,
}) => (
	<Collapse
		title={title}
		classNames={{ content: styles.content, trigger: styles.trigger }}>
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
	</Collapse>
)

export { CarRateMobile }
