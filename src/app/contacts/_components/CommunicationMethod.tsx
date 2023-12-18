import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import type { ContactConfig } from '~/shared/config/contacts'

import { Text } from '~/client/ui/components/Text'

import { CommunicationOption } from './CommunicationOption'

type CommunicationMethodProps = StyleProps & ContactConfig

const CommunicationMethod = ({ title, options, className, ...props }: CommunicationMethodProps) => (
	<div
		{...props}
		className={clsx('space-y-4', className)}>
		<Text
			as="h3"
			uppercase
			weight={700}
			className="text-lg">
			{title}
		</Text>
		<div className="space-y-3">
			{options.map((option) => (
				<CommunicationOption
					key={option.value}
					{...option}
				/>
			))}
		</div>
	</div>
)

export { CommunicationMethod }
export type { CommunicationMethodProps }
