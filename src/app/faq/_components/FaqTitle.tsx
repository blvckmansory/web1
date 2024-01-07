'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

import { clsx } from '~/lib/clsx'

import { FAQ_NAV_CONFIG } from '~/shared/config/nav'

import { Title, type TextProps } from '~/client/ui/components/Text'

const FaqTitle = ({ className, ...props }: TextProps) => {
	const pathname = usePathname()
	const title = useMemo(
		() => FAQ_NAV_CONFIG.options.find((link) => pathname.includes(link.href))?.name,
		[pathname],
	)

	return (
		<Title
			{...props}
			size={24}
			brand
			className={clsx('w-full', className)}>
			{title}
		</Title>
	)
}

export { FaqTitle }
