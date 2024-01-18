import { Fragment } from 'react'

import { clsx } from '~/lib/clsx'
import type { MergeWithHTMLProps } from '~/lib/types'

import { ArrowIcon } from '../(icons)'

import { Link } from './Link'
import { Text } from './Text'

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
	const others = items.slice(0, items.length - 1)

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
					<ArrowIcon
						size={10}
						strokeWidth={2}
						dir="right"
					/>
				</Fragment>
			))}

			<Text color="muted">{last.text}</Text>
		</ul>
	)
}

export { Breadcrumb }
export type { BreadcrumbProps }
