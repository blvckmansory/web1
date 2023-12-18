import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Text } from '~/client/ui/components'

type DownloadLinkProps = StyleProps &
	LinkProps & {
		alt: string
		img: string

		name: string
		label: string
	}

const DownloadLink = ({ alt, img, name, href, label, className, ...props }: DownloadLinkProps) => (
	<Link
		{...props}
		href={href}
		target="_blank"
		className={clsx(
			'flex-center hover:opacity-90 transition-all bg-black rounded-md',
			className,
		)}>
		<div
			className={clsx(
				'min-w-max py-2 px-4',
				'grid grid-rows-[auto_auto] grid-cols-[auto_1fr] gap-x-2',
				'bg-black text-white rounded-md text-left',
				'focus:scale-[0.98] transition-all',
				className,
			)}>
			<Image
				src={img}
				alt={alt}
				width={24}
				height={24}
				className="h-6 w-6 row-span-2 place-self-center"
			/>
			<Text
				uppercase
				size={8}>
				{label}
			</Text>
			<Text size={18}>{name}</Text>
		</div>
	</Link>
)

export { DownloadLink }
export type { DownloadLinkProps }
