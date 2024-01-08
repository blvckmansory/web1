import { memo } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Text } from '~/client/ui/components/Text'

import { HeroIcon } from '~/client/components/HeroIcon'

type CarDiscountProps = StyleProps & {
	discount?: number
}

const CarDiscount = memo<CarDiscountProps>(({ style, discount, className }) => (
	<div className={clsx('flex flex-row items-center gap-x-3', className)}>
		<HeroIcon
			name="percent"
			color={discount ? '#22FF01' : '#FFFFFF'}
		/>
		{discount ? (
			<Text>
				Действует скидка <b>{discount}</b> %
			</Text>
		) : (
			<Text>Скидка не действует</Text>
		)}
	</div>
))

export { CarDiscount }
export type { CarDiscountProps }
