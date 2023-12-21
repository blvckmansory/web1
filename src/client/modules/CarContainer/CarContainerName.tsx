'use client'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import type { CarType } from '~/server/car/types'

import { Text } from '~/client/ui/components'
import { useCarFilter } from '~/client/features/car/useCarFilter'

type CarContainerNameProps = {
	options: CarType[]
}

const CarContainerName = ({ options, style, className }: StyleProps & CarContainerNameProps) => {
	const [filter] = useCarFilter()

	const type = options.find((option) => option.id === filter.typeId)

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
