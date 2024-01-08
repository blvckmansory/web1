import { getCurrency } from '~/shared/helpers/currency'

import { Text } from '~/client/ui/components/Text'

type PriceWithDiscountProps = {
	price: number
	discount?: number
}

const PriceWithDiscount = ({ price, discount }: PriceWithDiscountProps) => {
	const currency = getCurrency()

	if (!discount) {
		return (
			<Text>
				{price} {currency}
			</Text>
		)
	}

	const newPrice = Math.ceil((price * (100 - discount)) / 100).toFixed(2)

	return (
		<>
			<Text color="primary">
				{newPrice} {currency}
			</Text>
			<Text className="line-through mb-px text-sm">
				{price} {currency}
			</Text>
		</>
	)
}

export { PriceWithDiscount }
export type { PriceWithDiscountProps }
