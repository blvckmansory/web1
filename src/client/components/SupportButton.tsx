'use client'

import { useCallback, type MouseEventHandler } from 'react'

import { wait } from '~/shared/helpers/time'
import { SUPPORT_CONFIG } from '~/shared/config/support'

import { CrossIcon } from '~/client/ui/(icons)'
import { Text } from '~/client/ui/components/Text'
import { Spacer } from '~/client/ui/components/Spacer'
import { useToggle } from '~/client/ui/(hooks)/useToggle'
import { Button, type ButtonProps } from '~/client/ui/components/Button'

import {
	AdaptiveDialog,
	AdaptiveDialogBody,
	AdaptiveDialogHeader,
} from '~/client/components/AdaptiveDialog'
import { ContactButton } from '~/client/components/buttons/ContactButton'

const SupportButton = ({ onClick, ...props }: ButtonProps) => {
	const [isOpen, { set, open, close, toggle }] = useToggle()

	const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
		async (event) => {
			if (onClick) {
				onClick(event)
				await wait(100)
			}

			open()
		},
		[open, onClick],
	)

	return (
		<>
			<Button
				size="sm"
				onClick={handleClick}
				{...props}>
				ТЕХПОДДЕРЖКА
			</Button>
			<AdaptiveDialog
				open={isOpen}
				onChange={set}
				position="right"
				className="md:min-w-[450px]">
				<AdaptiveDialogHeader>
					<Text
						uppercase
						className="text-xl font-semibold">
						ТЕХПОДДЕРЖКА
					</Text>
					<Spacer full />
					<Button
						onClick={close}
						color="secondary"
						iconLeft={<CrossIcon />}
					/>
				</AdaptiveDialogHeader>
				<AdaptiveDialogBody
					as="ul"
					className="relative pt-10 md:pt-16 flex-initial flex flex-col gap-y-6 pr-1 z-50">
					{[
						SUPPORT_CONFIG.phone,
						SUPPORT_CONFIG.telegram,
						SUPPORT_CONFIG.viber,
						SUPPORT_CONFIG.whatsapp,
					].map((contact) => (
						<li key={contact.href}>
							<ContactButton {...contact} />
						</li>
					))}
				</AdaptiveDialogBody>
			</AdaptiveDialog>
		</>
	)
}
export { SupportButton }
