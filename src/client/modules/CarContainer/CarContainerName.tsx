'use client'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { CarType } from '~/shared/entities/car'

import { Text } from '~/client/ui/components'
import { useCarsFilter } from '~/client/features/car/useCarsFilter'

type CarContainerNameProps = {
	options: CarType[]
}

const CarContainerName = ({ options, style, className }: StyleProps & CarContainerNameProps) => {
	const carTypeId = useCarsFilter((store) => store.carTypeId)

	const type = options.find((option) => String(option.id) === carTypeId)

	return (
		<Text
			as="h2"
			uppercase
			weight={700}
			style={style}
			className={clsx('text-2xl md:text-3xl', className)}>
			{type?.name || 'Все'}
		</Text>
	)
}

export { CarContainerName }
export type { CarContainerNameProps }
