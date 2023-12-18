'use client'

import { useMemo } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import type { PreviewCar } from '~/server/car'

import { useCarFilter } from '~/client/features/car/useCarFilter'
import { selectFilteredCars } from '~/client/features/car/selectors'

import { CarCard } from '~/client/components/cards/CarCard'

import styles from './styles.module.css'

type CarListProps = {
	initialData: PreviewCar[]
}

const CarList = ({ style, className, initialData }: StyleProps & CarListProps) => {
	const [filter] = useCarFilter()

	const cars = useMemo(() => selectFilteredCars(initialData, filter), [filter, initialData])

	return (
		<section
			style={style}
			className={clsx(styles.inner, className)}>
			{cars.map((card, key) => (
				<CarCard
					{...card}
					key={key}
				/>
			))}
		</section>
	)
}

export { CarList }
export type { CarListProps }
