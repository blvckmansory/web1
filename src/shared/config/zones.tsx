import type { IconNames } from '~/client/ui/components/Icon'

type ZoneConfig = {
	title: string
	description?: string

	color: string
	icon: IconNames
}

const ZONES_CONFIG = [
	{
		title: 'Фиолетовая зона',
		description: 'Какое-то описание',

		color: '#E5D0FF',
		icon: 'parking-circle',
	},
	{
		title: 'Красная зона',
		description: 'Какое-то описание',

		color: '#FBC3C3',
		icon: 'plane-takeoff',
	},
] satisfies ZoneConfig[]

export { ZONES_CONFIG }
export type { ZoneConfig }
