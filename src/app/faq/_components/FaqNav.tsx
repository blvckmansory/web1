import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { FAQ_NAV_CONFIG } from '~/shared/config/nav'

import { Title } from '~/client/ui/components/Text'

import { FaqNavLink } from './FaqNavLink'

const FaqNav = ({ className, ...props }: StyleProps) => (
	<nav
		{...props}
		className={clsx('space-y-5', className)}>
		<Title size={30}>{FAQ_NAV_CONFIG.title}</Title>
		<ul className="overflow-x-scroll py-5 flex flex-wrap items-center gap-x-1.5 gap-y-6">
			{FAQ_NAV_CONFIG.options.map((link) => (
				<li
					key={link.href}
					className="w-max">
					<FaqNavLink href={link.href}>{link.name}</FaqNavLink>
				</li>
			))}
		</ul>
	</nav>
)

export { FaqNav }
