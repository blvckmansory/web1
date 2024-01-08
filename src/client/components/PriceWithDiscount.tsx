import { formatCurrency, computePriceWithDiscount } from '~/shared/helpers/currency'

import { Text } from '~/client/ui/components/Text'

type PriceWithDiscountProps = {
	price: number
	discount?: number
}

const PriceWithDiscount = ({ price, discount }: PriceWithDiscountProps) => {
	const newPrice = computePriceWithDiscount(price, discount)

	if (!discount) {
		return <Text>{newPrice}</Text>
	}

	return (
		<>
			<Text color="primary">{newPrice}</Text>
			<Text className="line-through mb-px text-sm">{formatCurrency(price)}</Text>
		</>
	)
}

export { PriceWithDiscount }
export type { PriceWithDiscountProps }
