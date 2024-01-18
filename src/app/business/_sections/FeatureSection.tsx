import uniqby from 'lodash.uniqby'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { FEATURE_BUSINESS_CARD_CONFIG } from '~/shared/config/feature-card'

import { fetchCarIds } from '~/server/car'

import { Tag } from '~/client/ui/components/Tag'
import { Text, Label } from '~/client/ui/components/Text'

import { FeatureCard } from '~/client/components/cards/FeatureCard'

const FeatureSection = async ({ className, ...props }: StyleProps) => {
	const { data } = await fetchCarIds()

	const cars = uniqby(data, 'name')

	const unwrapperCars = cars.filter((_car) => !_car.isWrapped)

	const carsText = cars.map((car) => car.name).join(', ')
	const unwrappedCarsText = unwrapperCars.map((car) => car.name).join(', ')

	return (
		<section
			{...props}
			id="features"
			className={clsx(
				'bg-transparent h-fit grid grid-rows-[auto] grid-cols-1 md:grid-cols-3 gap-[3px]',
				'text-base text-ghost',
				className,
			)}>
			{FEATURE_BUSINESS_CARD_CONFIG.map((card, key) => (
				<FeatureCard
					key={key}
					{...card}
					className="first:space-y-5  md:first:row-span-2 text-base text-ghost gap-y-2"
				/>
			))}
			<FeatureCard
				icon="car"
				title="Разнообразный автопарк"
				className="space-y-5 md:col-span-3">
				<Label color="default">В нашем автопарке более 30 моделей автомобилей:</Label>

				<div className="font-medium text-default">
					<Text className="md:hidden ">{carsText}</Text>
					<Text className="hidden md:flex md:flex-wrap md:gap-x-1 md:gap-y-2">
						{cars.map(({ id, name }) => (
							<Tag key={id}>{name}</Tag>
						))}
					</Text>
				</div>

				<Label color="default">Автомобили без оклейки::</Label>

				<div className="font-medium text-default">
					<Text className="md:hidden ">{unwrappedCarsText}</Text>
					<Text className="hidden md:flex md:flex-wrap md:gap-x-1 md:gap-y-2">
						{unwrapperCars.map(({ id, name }) => (
							<Tag key={id}>{name}</Tag>
						))}
					</Text>
				</div>
			</FeatureCard>
		</section>
	)
}

export { FeatureSection }
