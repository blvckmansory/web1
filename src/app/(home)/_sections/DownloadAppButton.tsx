'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { getAppStoreUrl } from '~/shared/helpers/detect-app-store'

import { Button } from '~/client/ui/components/Button'

const DownloadAppButton = () => {
	const [appHref, setAppHref] = useState<string>('')

	useEffect(() => {
		setAppHref(getAppStoreUrl())
	}, [])

	return (
		<Link
			scroll
			target="_blank"
			href={appHref}>
			<Button className="w-full md:w-fit">Скачать приложение</Button>
		</Link>
	)
}

export { DownloadAppButton }
