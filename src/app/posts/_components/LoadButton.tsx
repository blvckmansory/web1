'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '~/client/ui/components/Button'

const LoadButton = ({ currentPage }: { currentPage: number }) => {
	const router = useRouter()

	const handleClick = useCallback(() => {
		router.push(`/posts?page=${currentPage + 1}`, { scroll: false })
	}, [router, currentPage])

	return (
		<Button
			full
			onClick={handleClick}>
			Показать еще
		</Button>
	)
}

export { LoadButton }
