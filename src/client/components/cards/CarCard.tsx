import Link from 'next/link'
import Image from 'next/image'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import type { PreviewCar } from '~/server/car'

import { Text } from '~/client/ui/components/Text'

type CarCardProps = StyleProps & PreviewCar

const CarCard = ({ id, img, title, style, min_tariff, className }: CarCardProps) => (
	<Link href={`/cars/${id}`}>
		<article
			style={style}
			className={clsx(
				'relative flex flex-col w-full card transition-all',
				'pt-4 pb-3 px-3 lg:px-6 lg:pt-6 lg:pb-4',
				'gap-y-4 lg:gap-y-4',
				className,
			)}>
			<div className="relative aspect-[3/1]">
				<Image
					fill
					src={img}
					sizes="100vw"
					alt="news-card-image"
					className="object-cover"
				/>
			</div>

			<div className="flex flex-col md:gap-0">
				<Text
					as="h2"
					weight={500}
					className="text-lg col-span-2 line-clamp-1">
					{title}
				</Text>

				<Text
					weight={500}
					className={clsx(
						'text-sm sm:text-base md:text-lg text-link-active line-clamp-1',
					)}>
					от {min_tariff} BYN / 1 мин.
				</Text>
			</div>
		</article>
	</Link>
)

export { CarCard }
export type { CarCardProps }
