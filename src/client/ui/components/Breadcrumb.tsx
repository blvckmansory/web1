import { clsx } from '~/lib/clsx'
import type { MergeWithHTMLProps } from '~/lib/types'

import { Text } from './Text'
import { Link } from './Link'
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
	const last = items?.at(-1) as BreadcrumbItem
	const first = items?.at(0) as BreadcrumbItem

	return (
		<ul
			{...props}
			className={clsx(
				'w-full flex items-center gap-1 text-base pb-8 border-b-px border-b-divider',
				className,
			)}>
			{first ? (
				<Link
					href={first.href}
					className="cursor-pointer font-medium text-base text-link-default hover:text-link-active transition-all">
					{first.text}
				</Link>
			) : null}

			<Icon
				size="1.25em"
				strokeWidth={2}
				name="chevron-right"
			/>

			<Text color="muted">{last?.text || 'Вы тут'}</Text>
		</ul>
	)
}

export { Breadcrumb }
export type { BreadcrumbProps }
