'use client'

import { useMemo } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { CarPreview as CarPreviewType } from '~/shared/entities/car'

import { useCarsFilter } from '~/client/features/car/useCarsFilter'
import { selectFilteredCars } from '~/client/features/car/selectors'

import { NoData } from '~/client/components/NoData'
import { CarPreview } from '~/client/components/CarPreview'

import styles from './styles.module.css'

type CarContainerProps = {
	initialData: CarPreviewType[]
}

const CarContainer = ({ style, className, initialData }: StyleProps & CarContainerProps) => {
	const filter = useCarsFilter((store) => ({
		wrapped: store.wrapped,
		carTypeId: store.carTypeId,
	}))

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
				<CarPreview
					{...card}
					key={key}
				/>
			))}
		</section>
	)
}

export { CarContainer }
export type { CarContainerProps }
