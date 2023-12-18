'use client'

import { clsx } from '~/lib/clsx'

import { Link, type LinkProps } from '~/client/ui/components'

const FaqNavLink = (props: LinkProps) => (
	<Link
		{...props}
		className={(active) =>
			clsx(
				'border-default border-px rounded-full px-5 py-2 hover:text-link-default hover:bg-primary',
				active ? 'bg-primary' : '',
			)
		}
	/>
)

export { FaqNavLink }
