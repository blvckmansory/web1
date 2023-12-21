'use client'

import { useMemo } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import type { PreviewCar } from '~/server/car'

import { useCarFilter } from '~/client/features/car/useCarFilter'
import { selectFilteredCars } from '~/client/features/car/selectors'

import { NoData } from '~/client/components/NoData'
import { CarCard } from '~/client/components/cards/CarCard'

import styles from './styles.module.css'

type CarContainerProps = {
	initialData: PreviewCar[]
}

const CarContainer = ({ style, className, initialData }: StyleProps & CarContainerProps) => {
	const [filter] = useCarFilter()

	const cars = useMemo(() => selectFilteredCars(initialData, filter), [filter, initialData])

	if (!cars || !cars.length) {
		return (
			<NoData
				imgSize={350}
				className="pb-10"
			/>
		)
	}

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

export { CarContainer }
export type { CarContainerProps }
