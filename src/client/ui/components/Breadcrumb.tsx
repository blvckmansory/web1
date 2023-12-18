import { Fragment } from 'react'

import { clsx } from '~/lib/clsx'
import type { MergeWithHTMLProps } from '~/lib/types'

import { Link } from './Link'
import { Text } from './Text'
import { Icon } from './Icon'

type BreadcrumbItem = {
	href: string
	text: string
}

type BreadcrumbProps = MergeWithHTMLProps<
	'ul',
	Partial<{
		items: BreadcrumbItem[]
	}>
>

const Breadcrumb = ({ items, className, ...props }: BreadcrumbProps) => {
	if (!items) {
		return null
	}

	const last = items.at(-1) as BreadcrumbItem
	const others = items.splice(items.length - 2, 1)

	return (
		<ul
			{...props}
			className={clsx(
				'w-full flex items-center gap-2 text-base pb-8 border-b-px border-b-divider',
				className,
			)}>
			{others?.map((item) => (
				<Fragment key={item.href}>
					<Link href={item.href}>{item.text}</Link>
					<Icon
						size={16}
						name="chevron-right"
					/>
				</Fragment>
			))}
			<Text color="muted">{last.text}</Text>
		</ul>
	)
}

export { Breadcrumb }
export type { BreadcrumbProps }
