import { memo } from 'react'
import { PercentIcon } from 'lucide-react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Text } from '~/client/ui/components/Text'
import { Button } from '~/client/ui/components/Button'

type CarDiscountProps = StyleProps & {
	discount?: number
}

const CarDiscount = memo<CarDiscountProps>(({ style, discount, className }) => (
	<div
		style={style}
		className={clsx('flex flex-row items-center gap-x-3', className)}>
		<Button
			readOnly
			iconLeft={<PercentIcon className="text-default" />}
			style={{ backgroundColor: discount ? '#22FF01' : '#FFFFFF' }}
		/>

		{discount ? (
			<Text>
				Действует скидка <b>{discount}</b> %
			</Text>
		) : null}
	</div>
))

export { CarDiscount }
export type { CarDiscountProps }
