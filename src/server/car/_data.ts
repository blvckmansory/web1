const categories = [
	{
		id: 'standart',
		name: 'Стандарт',
	},
	{
		id: 'crossovers',
		name: 'Кроссоверы',
	},
	{
		id: 'exclusive',
		name: 'Эксклюзив',
	},
	{
		id: 'electro',
		name: 'Электро',
	},
	{
		id: 'cabriolet',
		name: 'Кабриолеты',
	},
	{
		id: 'cargo',
		name: 'Грузовые',
	},
	{
		id: 'huy',
		name: 'Хуйня',
	},
]

const cars = [
	{
		id: '0',
		min_tariff: 0.35,
		img: '/assets/car.png',
		type: {
			id: 'cabriolet',
			name: 'Кабриолеты',
		},
		title: 'Tesla Model X',
		nova: true,
		pasting: false,
	},
	{
		id: '1',
		min_tariff: 0.35,
		img: '/assets/car.png',
		type: {
			id: 'standart',
			name: 'Стандрат',
		},
		title: 'Skoda Rapid',
		nova: false,
		pasting: true,
	},
	{
		id: '2',
		min_tariff: 0.35,
		img: '/assets/car.png',
		type: {
			id: 'standart',
			name: 'Стандрат',
		},
		title: 'Tesla Model X',
		nova: false,
		pasting: false,
	},
	{
		id: '3',
		min_tariff: 0.35,
		img: '/assets/car.png',
		type: {
			id: 'elector',
			name: 'Электро',
		},
		title: 'Tesla Model X',
		nova: true,
		pasting: true,
	},
	{
		id: '4',
		min_tariff: 0.35,
		img: '/assets/car.png',
		type: {
			id: 'cabriolet',
			name: 'Кабриолеты',
		},
		title: 'Kia Rio X',
		nova: true,
		pasting: true,
	},
	{
		id: '5',
		min_tariff: 0.35,
		img: '/assets/car.png',
		type: {
			id: 'exclusive',
			name: 'Эксклюзив',
		},
		title: 'Skoda Rapid',
		nova: false,
		pasting: false,
	},
	{
		id: '6',
		min_tariff: 0.35,
		img: '/assets/car.png',
		type: {
			id: 'exclusive',
			name: 'Эксклюзив',
		},
		title: 'Skoda Rapid',
		nova: true,
		pasting: true,
	},
	{
		id: '7',
		min_tariff: 0.35,
		img: '/assets/car.png',
		type: {
			id: 'exclusive',
			name: 'Эксклюзив',
		},
		title: 'Tesla Model X',
		nova: true,
		pasting: true,
	},
	{
		id: '8',
		min_tariff: 0.35,
		img: '/assets/car.png',
		type: {
			id: 'crossovers',
			name: 'Кроссоверы',
		},
		title: 'Tesla Model X',
		nova: false,
		pasting: false,
	},
	{
		id: '9',
		min_tariff: 0.35,
		img: '/assets/car.png',
		type: {
			id: 'exclusive',
			name: 'Эксклюзив',
		},
		title: 'Tesla Model X',
		nova: false,
		pasting: false,
	},
	{
		id: '10',
		min_tariff: 0.35,
		img: '/assets/car.png',
		type: {
			id: 'cargo',
			name: 'Грузовые',
		},
		title: 'Kia Rio X',
		nova: true,
		pasting: false,
	},
]

export default cars
export { categories }
