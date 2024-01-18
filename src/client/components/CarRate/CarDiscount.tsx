import { memo } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Text } from '~/client/ui/components/Text'
import { Button } from '~/client/ui/components/Button'

import { PercentIcon } from './PercentIcon'

type CarDiscountProps = StyleProps & {
	discount: number
}

const CarDiscount = memo<CarDiscountProps>(({ style, discount, className }) => (
	<div
		style={style}
		className={clsx('flex flex-row items-center gap-x-3', className)}>
		<Button
			readOnly
			iconLeft={<PercentIcon />}
			style={{ backgroundColor: discount ? '#22FF01' : '#FFFFFF' }}
		/>

		<Text>
			Действует скидка <b>{discount}</b> %
		</Text>
	</div>
))

export { CarDiscount }
export type { CarDiscountProps }
