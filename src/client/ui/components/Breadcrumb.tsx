'use client'

import { Fragment } from 'react'
import { useRouter } from 'next/navigation'

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
	const router = useRouter()

	const last = items?.pop() as BreadcrumbItem
	const first = items?.shift() as BreadcrumbItem

	return (
		<ul
			{...props}
			className={clsx(
				'w-full flex items-center gap-2 text-base pb-8 border-b-px border-b-divider',
				className,
			)}>
			{first ? (
				<Text
					onClick={() => router.back()}
					className="cursor-pointer font-medium text-base text-link-default hover:text-link-active transition-all">
					{first.text}
				</Text>
			) : null}

			<ArrowIcon
				size={10}
				dir="right"
				strokeWidth={2}
			/>

			{items?.map((item) => (
				<Fragment key={item.href}>
					<Link href={item.href}>{item.text}</Link>
					<ArrowIcon
						size={10}
						dir="right"
						strokeWidth={2}
					/>
				</Fragment>
			))}

			<Text color="muted">{last.text}</Text>
		</ul>
	)
}

export { Breadcrumb }
export type { BreadcrumbProps }
