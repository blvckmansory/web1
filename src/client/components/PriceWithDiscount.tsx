import { formatCurrency } from '~/shared/helpers/currency'

import { Text } from '~/client/ui/components/Text'

type PriceWithDiscountProps = {
	price: number
	newPrice?: number | null | undefined
}

const PriceWithDiscount = ({ price, newPrice }: PriceWithDiscountProps) => {
	const priceFormatted = formatCurrency(price)

	if (!newPrice) {
		return <Text>{priceFormatted}</Text>
	}

	return (
		<>
			<Text color="primary">{formatCurrency(newPrice)}</Text>
			<Text className="line-through mb-px text-sm">{priceFormatted}</Text>
		</>
	)
}

export { PriceWithDiscount }
export type { PriceWithDiscountProps }
