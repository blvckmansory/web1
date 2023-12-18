import type { ArrowFunction } from '~/lib/types'

type TariffOption = {
	name: string
	price: number
}

type TariffType = {
	discount?: number
	options: TariffOption[]

	title: string
	description: ArrowFunction<[string], string>
	footer: ArrowFunction<[string], string>
}

const TARIFF_CONFIG: TariffType[] = [
	{
		title: 'Минуты',
		description: () =>
			'Тариф, в котором вы платите только за минуты использования авто. Стоимость указана уже с учётом скидки.',
		footer: (price) => `Каждая минута по ${price} BYN`,

		discount: 15,
		options: [{ name: '1 мин.', price: 4.9 }],
	},
	{
		title: 'Минуты и КМ',
		description: (price) =>
			`Минутные пакеты включают время аренды, а пробег вы регулируете сами - ${price}. Режим стоянка отдельно не тарифицируется. Стоимость указана уже с учётом скидки.`,
		footer: (price) => `Каждый км по ${price} BYN`,

		discount: 15,
		options: [
			{ name: '30 мин.', price: 4.9 },
			{ name: '60 мин.', price: 4.9 },
		],
	},
	{
		title: 'Часы и КМ',
		description: (price) =>
			`Часовые абонементы включают время аренды, а пробег вы регулируете сами - ${price}. Режим стоянка отдельно не тарифицируется. Стоимость указана уже с учётом скидки.`,
		footer: (price) => `Каждый км по ${price} BYN`,

		discount: 15,
		options: [
			{ name: '3 ч.', price: 4.9 },
			{ name: '6 ч.', price: 4.9 },
		],
	},
	{
		title: 'Сутки и КМ',
		description: (price) =>
			`Абонементы на сутки включают время аренды, а пробег вы регулируете сами - ${price}. Режим стоянка отдельно не тарифицируется. Стоимость указана уже с учётом скидки.`,
		footer: (price) => `Каждый км по ${price} BYN`,

		discount: 15,
		options: [
			{ name: '1 сут.', price: 4.9 },
			{ name: '2 сут.', price: 4.9 },
			{ name: '3 сут.', price: 4.9 },
			{ name: '4 сут.', price: 4.9 },
			{ name: '5 сут.', price: 4.9 },
			{ name: '6 сут.', price: 4.9 },
		],
	},
]

export { TARIFF_CONFIG }
export type { TariffType, TariffOption }
