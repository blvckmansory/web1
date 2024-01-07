type NavLinkConfig = {
	href: string
	name: string
}

type NavConfig = {
	title: string
	options: NavLinkConfig[]
}

const APP_NAV_CONFIG = {
	title: 'Навигация',
	options: [
		{
			name: 'Тарифы',
			href: '/cars',
		},
		{
			name: 'Зоны завершения',
			href: '/zones',
		},
		{
			name: 'Подсказки',
			href: '/faq/hints',
		},
		{
			name: 'Новости',
			href: '/posts',
		},
		{
			name: 'Контакты',
			href: '/contacts',
		},
		{
			name: 'Каршеринг для бизнеса',
			href: '/business',
		},
	],
} as NavConfig

const DOCUMENT_NAV_CONFIG = {
	title: 'Прочее',
	options: [
		{
			name: 'Договор соглашения',
			href: '/',
		},
		{
			name: 'Пользовательское соглашение',
			href: '/',
		},
		{
			name: 'Политика обработки персональных данных',
			href: '/',
		},
		{
			name: 'Информация о способах оплаты',
			href: '/',
		},
		{
			name: 'Положение о видеонаблюдении',
			href: '/',
		},
		{
			name: 'Согласие на обработку персональных данных',
			href: '/',
		},
	],
} as NavConfig

const HEADER_NAV_CONFIG = {
	title: '',
	options: [
		{
			name: 'Новости',
			href: '/posts',
		},
		{
			name: 'Подсказки',
			href: '/faq/hints',
		},
		{
			name: 'Зоны завершения',
			href: '/zones',
		},
		{
			name: 'Тарифы',
			href: '/cars',
		},
	],
} as NavConfig

const CONTACT_NAV_CONFIG = {
	title: 'Контакты',
	options: [
		{
			name: 'Контакты и реквизиты',
			href: '/contacts',
		},
		{
			name: 'Написать руководству',
			href: '/contacts',
		},
	],
} as NavConfig

const FAQ_NAV_CONFIG = {
	title: 'Все, что нужно знать О нас',
	options: [
		{
			href: '/faq/hints',
			name: 'Подсказки',
		},
		/** @fix */
		{
			href: '/faq/help',
			name: 'Инструкции',
		},
		{
			href: '/faq/rules',
			name: 'Правила дружбы',
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
