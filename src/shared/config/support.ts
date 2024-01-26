type SupportConfigItem = {
	img: string
	name: string
	href: string
	value: string
}

const SUPPORT_CONFIG = {
	phone: {
		name: 'Телефон',
		value: '+375 44 777 60 60',
		href: 'tel:+375447776060',
		img: '/support/phone.svg',
	},
	telegram: {
		name: 'Telegram',
		value: '+375 44 777 60 60',
		href: 'https://telegram.me/hello_carsharing_minsk',
		img: '/support/telegram.svg',
	},
	viber: {
		name: 'Viber',
		value: '+375 44 777 60 60',
		href: 'viber://chat/?number=+375447776060',
		img: '/support/viber.svg',
	},
	whatsapp: {
		name: 'WhatsApp',
		value: '+375 44 777 60 60',
		href: 'https://api.whatsapp.com/send?phone=375447776060',
		img: '/support/whatsapp.svg',
	},
} satisfies Record<string, SupportConfigItem>

export { SUPPORT_CONFIG }
