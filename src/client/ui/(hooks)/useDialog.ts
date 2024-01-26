'use client'

import { useCallback } from 'react'
import { useToggle, type UseToggleProps } from './useToggle'

type UseDialogProps = UseToggleProps & {
	preventClose?: boolean
}

const useDialog = ({ preventClose, ...toggleProps }: UseDialogProps) => {
	const [isOpen, { set, close, open }] = useToggle(toggleProps)

	const handleClickOutside = useCallback(
		() => isOpen && !preventClose && close(),
		[isOpen, preventClose, close],
	)

	return { set, close, open, isOpen, clickOutside: handleClickOutside }
}

type UseDialogReturn = ReturnType<typeof useDialog>

export { useDialog }
export type { UseDialogProps, UseDialogReturn }
