import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Icon } from '~/client/ui/components/Icon'

type CommunicationTextProps = StyleProps & {
	type: 'phone' | 'mail'
	value: string
}

const CommunicationText = ({ type, value, className, ...props }: CommunicationTextProps) => (
	<span
		{...props}
		className={clsx('', className)}>
		<Icon name={type} />
		{value}
	</span>
)

export { CommunicationText }
