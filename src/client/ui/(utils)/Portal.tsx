'use client'

import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'

type PortalProps = {
	visible?: boolean
	children: React.ReactNode
}

const Portal = ({ children, visible = true }: PortalProps) => {
	const [mounted, setMounted] = useState<boolean>(false)

	useEffect(() => {
		setMounted(true)
		return () => setMounted(false)
	}, [setMounted])

	if (!mounted || !visible) {
		return null
	}

	return createPortal(children, document.body)
}

export { Portal }
export type { PortalProps }
