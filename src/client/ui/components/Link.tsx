'use client'

import type { CSSProperties } from 'react'
import { usePathname } from 'next/navigation'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { clsx } from '~/lib/clsx'
import type { ArrowFunction, ReactChildren } from '~/lib/types'

type LinkProps = NextLinkProps &
	Partial<{
		style: ArrowFunction<[boolean], CSSProperties | undefined> | CSSProperties
		className: ArrowFunction<[boolean], string | undefined> | string

		children: ReactChildren
	}>

const Link = ({ href, style, children, className, ...props }: LinkProps) => {
	const pathname = usePathname()
	const active = pathname.includes(href.toString())

	const _style = typeof style === 'function' ? style?.(active) : style
	const _className = typeof className === 'function' ? className?.(active) : className

	return (
		<NextLink
			{...props}
			prefetch
			href={href}
			style={{ ...style, ..._style }}
			className={clsx(
				'w-max min-h-max font-medium text-base text-link-default hover:text-link-active transition-all',
				_className,
			)}>
			{children}
		</NextLink>
	)
}

export { Link }
export type { LinkProps }
