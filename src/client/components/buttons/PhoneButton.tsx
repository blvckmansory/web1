import { clsx } from '~/lib/clsx'
import type { MergeWithHTMLProps } from '~/lib/types'

import { Icon } from '~/client/ui/components/Icon'
import { Button } from '~/client/ui/components/Button'
import { Text, type TextProps } from '~/client/ui/components/Text'

const phoneNumber = '+375 44 777 60 60'

type PhoneButtonProps = MergeWithHTMLProps<
	'div',
	{
		withText?: boolean
		withButton?: boolean
	}
>

const PhoneButton = ({
	className,
	withText = false,
	withButton = false,
	...props
}: PhoneButtonProps) => (
	<div
		{...props}
		className={clsx('min-w-0 flex flex-row items-center gap-x-2', className)}>
		{withButton ? (
			<a href={`tel:${phoneNumber}`}>
				<Button
					color="secondary"
					className="group"
					iconLeft={
						<Icon
							size={24}
							name="phone"
							className="fill-primary group-hover:fill-secondary transition-all"
						/>
					}
				/>
			</a>
		) : null}

		{withText ? <PhoneText className="truncate hidden md:block" /> : null}
	</div>
)

const PhoneText = (props: TextProps) => (
	<a href={`tel:${phoneNumber.split(' ').join('')}`}>
		<Text
			{...props}
			weight={600}>
			{phoneNumber}
		</Text>
	</a>
)

export { PhoneText, PhoneButton }
export type { PhoneButtonProps }
