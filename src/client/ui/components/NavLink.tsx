'use client'

import type { CSSProperties } from 'react'
import { usePathname } from 'next/navigation'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { clsx } from '~/lib/clsx'
import type { StyleProps, ReactChildren } from '~/lib/types'

type NativeLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> &
	NextLinkProps

type NavLinkProps = NativeLinkProps &
	StyleProps & {
		activeStyle?: CSSProperties
		activeClassName?: string

		text?: string
		name?: string
		children?: ReactChildren
	}

const NavLink = ({
	href,
	style,
	text,
	name,
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
			target=""
			style={{ ...style }}
			className={clsx(
				'w-max min-h-max font-medium text-base text-link-default hover:text-link-active transition-all',
				className,
				active ? activeClassName : '',
			)}>
			{children || text || name}
		</NextLink>
	)
}

export { NavLink }
export type { NavLinkProps }
