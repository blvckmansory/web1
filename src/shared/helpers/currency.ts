const getCurrency = () => 'BYN'

const formatCurrency = (price: number) => `${price.toFixed(2)} ${getCurrency()}`

const computePriceWithDiscount = (price: number, discount?: number) => {
	if (!discount) {
		return formatCurrency(price)
	}

	const discountFloat = discount / 100

	const newPrice = discount ? price * (1.0 - discountFloat) : price

	return formatCurrency(newPrice)
}

export { getCurrency, formatCurrency, computePriceWithDiscount }
