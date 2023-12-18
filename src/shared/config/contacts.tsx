type ContactOptionConfig = {
	type: 'phone' | 'mail'
	value: string
}

type ContactConfig = {
	title: string
	options: ContactOptionConfig[]
}

const CONTACTS_CONFIG = [
	{
		title: 'СЛУЖБА ПОДДЕРЖКИ',
		options: [
			{
				type: 'phone',
				value: '+375 44 777 60 60',
			},
			{
				type: 'mail',
				value: 'info@hello.by',
			},
		],
	},
	{
		title: 'КОРПОРАТИВНЫМ КЛИЕНТАМ',
		options: [
			{
				type: 'mail',
				value: 'partners@hello.by',
			},
		],
	},
	{
		title: 'СОТРУДНИЧЕСТВО / реклама',
		options: [
			{
				type: 'mail',
				value: 'offers@hello.by',
			},
			{
				type: 'mail',
				value: 'marketing@hello.by',
			},
		],
	},
] satisfies ContactConfig[]

export { CONTACTS_CONFIG }
export type { ContactConfig, ContactOptionConfig }
