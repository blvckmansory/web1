import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { FEATURE_CARD_CONFIG } from '~/shared/config/feature-card'

import { FeatureCard } from '~/client/components/cards/FeatureCard'

const FeatureSection = ({ className, ...props }: StyleProps) => (
	<section
		{...props}
		id="features"
		className={clsx(
			'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-[3px]',
			className,
		)}>
		{FEATURE_CARD_CONFIG.map((card, key) => (
			<FeatureCard
				key={key}
				{...card}
			/>
		))}
	</section>
)

export { FeatureSection }
