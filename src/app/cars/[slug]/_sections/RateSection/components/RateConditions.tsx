import { memo } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Label } from '~/client/ui/components/Text'
import { List, ListItem } from '~/client/ui/components/List'

type RateConditionsProps = StyleProps & {
	ageOver?: boolean
	expOver?: boolean
}

const RateConditions = memo(({ style, expOver, ageOver, className }: RateConditionsProps) => (
	<article>
		<Label uppercase>Условия</Label>
		<List
			style={style}
			className={clsx('flex flex-row flex-wrap gap-y-4 gap-x-20', className)}>
			{ageOver ? <ListItem>Возраст от 23 лет</ListItem> : null}
			{expOver ? <ListItem>1 год водительского стажа</ListItem> : null}
			<ListItem>Бензин включен</ListItem>
		</List>
	</article>
))

export { RateConditions }
export type { RateConditionsProps }
