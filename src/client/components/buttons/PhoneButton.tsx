import { clsx } from '~/lib/clsx'
import type { MergeWithHTMLProps } from '~/lib/types'

import { SUPPORT_CONFIG } from '~/shared/config/support'

import { Icon } from '~/client/ui/components/Icon'
import { Button } from '~/client/ui/components/Button'
import { Text, type TextProps } from '~/client/ui/components/Text'

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
			<a href={SUPPORT_CONFIG.phone.href}>
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
	<a href={SUPPORT_CONFIG.phone.href}>
		<Text
			{...props}
			weight={600}>
			{SUPPORT_CONFIG.phone.value}
		</Text>
	</a>
)

export { PhoneText, PhoneButton }
export type { PhoneButtonProps }
