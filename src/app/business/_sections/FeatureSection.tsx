import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { FEATURE_BUSINESS_CARD_CONFIG } from '~/shared/config/feature-card'

import { fetchCarIds } from '~/server/car'

import { Tag } from '~/client/ui/components/Tag'
import { Text, Label } from '~/client/ui/components/Text'

import { FeatureCard } from '~/client/components/cards/FeatureCard'

const FeatureSection = async ({ className, ...props }: StyleProps) => {
	const { data: cars } = await fetchCarIds()

	const carsText = cars.map((car) => car.name).join(', ')

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
					className="first:space-y-5  md:first:row-span-2  text-base text-ghost"
				/>
			))}
			<FeatureCard
				icon="car"
				title="Разнообразный автопарк"
				className="space-y-5 md:col-span-3">
				<Label color="default">
					В нашем автопарке более {cars.length} моделей автомобилей:
				</Label>

				<div className="font-medium text-default">
					<Text className="md:hidden ">{carsText}</Text>
					<Text className="hidden md:flex md:flex-wrap md:gap-x-1 md:gap-y-2">
						{cars.map(({ id, name }) => (
							<Tag key={id}>{name}</Tag>
						))}
					</Text>
				</div>
			</FeatureCard>
		</section>
	)
}

export { FeatureSection }
