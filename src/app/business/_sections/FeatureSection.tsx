import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { FEATURE_BUSINESS_CARD_CONFIG } from '~/shared/config/feature-card'

import { FeatureCard } from '~/client/components/cards/FeatureCard'

const FeatureSection = ({ className, ...props }: StyleProps) => (
	<section
		{...props}
		id="features"
		className={clsx(
			'bg-transparent h-fit grid grid-rows-[auto] grid-cols-1 md:grid-cols-3 gap-[3px]',
			className,
		)}>
		{FEATURE_BUSINESS_CARD_CONFIG.map((card, key) => (
			<FeatureCard
				key={key}
				{...card}
				className="first:space-y-5 last:space-y-5 md:first:row-span-2 md:last:col-span-3 text-base text-ghost"
			/>
		))}
	</section>
)

export { FeatureSection }
