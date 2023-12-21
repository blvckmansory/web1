'use client'

import { clsx } from '~/lib/clsx'

import { Link, type LinkProps } from '~/client/ui/components/Link'

const FaqNavLink = (props: LinkProps) => (
	<Link
		{...props}
		className={(active) =>
			clsx(
				'px-5 py-2',
				'hover:text-link-default hover:bg-primary',
				'border-default border-px rounded-full',
				'whitespace-nowrap',
				active ? 'bg-primary' : '',
			)
		}
	/>
)

export { FaqNavLink }
