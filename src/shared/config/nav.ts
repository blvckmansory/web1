type NavLinkConfig = {
	href: string
	children: string
}

type NavConfig = {
	title: string
	options: NavLinkConfig[]
}

const APP_NAV_CONFIG = {
	title: 'Навигация',
	options: [
		{
			children: 'Тарифы',
			href: '/cars',
		},
		{
			children: 'Зоны завершения',
			href: '/zones',
		},
		{
			children: 'Подсказки',
			href: '/hints',
		},
		{
			children: 'Новости',
			href: '/posts',
		},
		{
			children: 'Контакты',
			href: '/contacts',
		},
		{
			children: 'Каршеринг для бизнеса',
			href: '/business',
		},
	],
} as NavConfig

const DOCUMENT_NAV_CONFIG = {
	title: 'Прочее',
	options: [
		{
			children: 'Договор соглашения',
			href: '/',
		},
		{
			children: 'Пользовательское соглашение',
			href: '/',
		},
		{
			children: 'Политика обработки персональных данных',
			href: '/',
		},
		{
			children: 'Информация о способах оплаты',
			href: '/',
		},
		{
			children: 'Положение о видеонаблюдении',
			href: '/',
		},
		{
			children: 'Согласие на обработку персональных данных',
			href: '/',
		},
	],
} as NavConfig

const HEADER_NAV_CONFIG = {
	title: '',
	options: [
		{
			children: 'Новости',
			href: '/posts',
		},
		{
			children: 'Подсказки',
			href: '/hints',
		},
		{
			children: 'Зоны завершения',
			href: '/zones',
		},
		{
			children: 'Тарифы',
			href: '/cars',
		},
	],
} as NavConfig

const CONTACT_NAV_CONFIG = {
	title: 'Контакты',
	options: [
		{
			children: 'Контакты и реквизиты',
			href: '/',
		},
		{
			children: 'Написать руководству',
			href: '/',
		},
	],
} as NavConfig

const FAQ_NAV_CONFIG = {
	title: 'Все, что нужно знать О нас',
	options: [
		{
			href: '/hints',
			children: 'Подсказки',
		},
		/** @fix */
		{
			href: '/help',
			children: 'Инструкции',
		},
		{
			href: '/rules',
			children: 'Правила дружбы',
		},
	],
} as NavConfig

export {
	FAQ_NAV_CONFIG,
	APP_NAV_CONFIG,
	HEADER_NAV_CONFIG,
	CONTACT_NAV_CONFIG,
	DOCUMENT_NAV_CONFIG,
}
export type { NavConfig, NavLinkConfig }
