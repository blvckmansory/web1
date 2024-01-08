import Link from 'next/link'
import Image from 'next/image'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import type { CarPreview } from '~/shared/entities/car'

import { Text } from '~/client/ui/components/Text'
import { computePriceWithDiscount } from '~/shared/helpers/currency'

type CarPreviewProps = StyleProps & CarPreview

const CarPreview = ({
	id,
	previewImage,
	name,
	style,
	minMinuteRate,
	className,
}: CarPreviewProps) => (
	<Link href={`/cars/${id}`}>
		<article
			style={style}
			className={clsx(
				'relative flex flex-col w-full card transition-all',
				'pt-4 pb-3 px-3 lg:px-6 lg:pt-6 lg:pb-4',
				'gap-y-4 lg:gap-y-4',
				className,
			)}>
			<div className="relative w-full aspect-[3/1]">
				<Image
					fill
					src={previewImage.url}
					sizes="(min-width: 808px) 33vw, 100vw"
					alt="car-card-image"
					className="object-cover"
					style={{
						objectFit: 'cover', // cover, contain, none
					}}
				/>
			</div>

			<div className="flex flex-col md:gap-0">
				<Text
					as="h2"
					weight={500}
					className="text-lg col-span-2 line-clamp-1">
					{name}
				</Text>

				<Text
					weight={500}
					color="primary"
					className={clsx('text-sm sm:text-base md:text-lg line-clamp-1')}>
					от {computePriceWithDiscount(minMinuteRate)} / 1 мин.
				</Text>
			</div>
		</article>
	</Link>
)

export { CarPreview }
export type { CarPreviewProps }
