'use client'

import type { CSSProperties } from 'react'
import { usePathname } from 'next/navigation'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { clsx } from '~/lib/clsx'
import type { StyleProps, ReactChildren } from '~/lib/types'

type NavLinkProps = NextLinkProps &
	StyleProps & {
		activeStyle?: CSSProperties
		activeClassName?: string

		children?: ReactChildren
	}

const NavLink = ({
	href,
	style,
	children,
	className,
	activeStyle,
	activeClassName,
	...props
}: NavLinkProps) => {
	const pathname = usePathname()
	const active = pathname.includes(href.toString())

	return (
		<NextLink
			{...props}
			href={href}
			style={{ ...style }}
			className={clsx(
				'w-max min-h-max font-medium text-base text-link-default hover:text-link-active transition-all',
				className,
				active ? activeClassName : '',
			)}>
			{children}
		</NextLink>
	)
}

export { NavLink }
export type { NavLinkProps }
