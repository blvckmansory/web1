import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { fetchPreviewCars } from '~/server/car'

import { Title } from '~/client/ui/components'

import { Section } from '~/client/components/Section'
import { CarCard } from '~/client/components/cards/CarCard'

import styles from './styles.module.css'

const OthersSection = async ({ className, ...props }: StyleProps) => {
	const randomCars = await fetchPreviewCars({ random: true, count: 3 })

	return (
		<Section
			{...props}
			className={clsx(styles.others, className)}>
			<Title className={styles.others__title}>Смотрите также</Title>
			<div className={styles.others__grid}>
				{randomCars.map((car) => (
					<CarCard
						key={car.id}
						{...car}
					/>
				))}
			</div>
		</Section>
	)
}

export { OthersSection }
