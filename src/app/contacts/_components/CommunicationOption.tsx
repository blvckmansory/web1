import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import type { ContactOptionConfig } from '~/shared/config/contacts'

import { Icon } from '~/client/ui/components/Icon'

type CommunicationOptionProps = StyleProps & ContactOptionConfig

const CommunicationOption = ({ type, value, className, ...props }: CommunicationOptionProps) => (
	<span
		{...props}
		className={clsx('flex items-center gap-2 font-medium', className)}>
		<Icon
			name={type}
			className="fill-primary"
		/>
		{value}
	</span>
)

export { CommunicationOption }
export type { CommunicationOptionProps }
