import type { IconNames } from '~/client/ui/components/Icon'

type ZoneConfig = {
	title: string
	description?: string

	color: string
	icon: IconNames
}

const ZONES_CONFIG = [
	{
		title: 'Синяя зона',
		description: 'Здесь вы можете оставить автомобиль.',

		icon: 'parking-circle',
		color: 'rgba(98, 143, 328, 0.7)',
	},
] satisfies ZoneConfig[]

export { ZONES_CONFIG }
export type { ZoneConfig }
