'use client'

import { clsx } from '~/lib/clsx'

import { useResponsive } from '~/client/features/responsive'

import { Dialog, type DialogProps } from '~/client/ui/components/Dialog'

const AdaptiveDialog = ({ position, className, ...props }: DialogProps) => {
	const { isTouch } = useResponsive()

	return (
		<Dialog
			{...props}
			position={isTouch ? 'bottom' : position}
			className={clsx('h-screen max-h-screen', className)}
		/>
	)
}

export { AdaptiveDialog }
export {
	DialogBody as AdaptiveDialogBody,
	DialogHeader as AdaptiveDialogHeader,
	DialogFooter as AdaptiveDialogFooter,
	DialogDescription as AdaptiveDialogDescription,
} from '~/client/ui/components/Dialog'
