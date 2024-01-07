'use client'

import { useCallback } from 'react'

import { getAppStoreUrl } from '~/shared/helpers/detect-app-store'

import { Button } from '~/client/ui/components/Button'

const DownloadAppButton = () => {
	const handleClick = useCallback(() => {
		const appHref = getAppStoreUrl()
		window.open(appHref, '_blank')
	}, [])

	return (
		<Button
			className="w-full md:w-fit"
			onClick={handleClick}>
			Скачать приложение
		</Button>
	)
}

export { DownloadAppButton }
