import { clsx } from '~/lib/clsx'
import type { MergeWithHTMLProps } from '~/lib/types'

import { Text, Title } from '~/client/ui/components/Text'
import type { IconNames } from '~/client/ui/components/Icon'

import { HeroIcon } from '../HeroIcon'

type FeatureCardProps = MergeWithHTMLProps<
	'article',
	{
		title: string
		description?: string

		color?: string
		icon: IconNames
	}
>

const FeatureCard = ({
	icon,
	title,
	children,
	className,
	description,
	color = '#A8FFA8',
	...props
}: FeatureCardProps) => (
	<article
		{...props}
		className={clsx(
			'w-full px-5 sm:px-6 pt-6 pb-8 bg-white rounded-xl text-sm flex flex-col gap-y-1',
			className,
		)}>
		<HeroIcon
			name={icon}
			color={color}
		/>

		<Title
			as="h2"
			size={18}
			className="text-default !leading-6 !mt-4">
			{title}
		</Title>

		<Text color="ghost">{description}</Text>

		{children}
	</article>
)

export { FeatureCard }
export type { FeatureCardProps }
