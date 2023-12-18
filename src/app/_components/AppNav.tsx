import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { HEADER_NAV_CONFIG } from '~/shared/config/nav'

import { NavLink } from '~/client/ui/components'

const AppNav = async ({ className, ...props }: StyleProps) => {
	// const { data } = await fetchStrapi('/menus/1', { nested: true, populate: '*' })
	// console.log(data)

	return (
		<nav className={clsx('w-fit', className)}>
			<ul
				{...props}
				className="w-fit px-5 flex flex-row">
				{HEADER_NAV_CONFIG.options.map((link) => (
					<NavLink
						key={link.href}
						{...link}
						className="px-5"
					/>
				))}
			</ul>
		</nav>
	)
}

export { AppNav }
