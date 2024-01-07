import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { HEADER_NAV_CONFIG } from '~/shared/config/nav'

import { NavLink } from '~/client/ui/components/NavLink'

const AppNav = ({ className, ...props }: StyleProps) => (
	<nav
		role="navigation"
		className={clsx('w-fit', className)}>
		<ul
			{...props}
			className="w-fit px-5 flex flex-row">
			{HEADER_NAV_CONFIG.options.map((link) => (
				<NavLink
					{...link}
					key={link.href}
					href={link.name}
					className="px-5"
				/>
			))}
		</ul>
	</nav>
)

export { AppNav }
