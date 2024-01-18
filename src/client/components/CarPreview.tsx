import Link from 'next/link'
import Image from 'next/image'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import type { CarPreview as CarPreviewType } from '~/shared/entities/car'

import { Text } from '~/client/ui/components/Text'
import { computePriceWithDiscount } from '~/shared/helpers/currency'

type CarPreviewProps = StyleProps & CarPreviewType

const CarPreview = ({
	id,
	name,
	style,
	className,
	previewImage,
	minMinuteRate,
}: CarPreviewProps) => (
	<Link href={`/cars/${id}`}>
		<article
			style={style}
			className={clsx(
				'relative flex flex-col w-full card transition-all',
				'gap-y-2 pt-2',
				className,
			)}>
			<div className="relative w-full aspect-[3/1]">
				<Image
					fill
					src={previewImage.url}
					alt="car-card-image"
					sizes="(min-width: 808px) 33vw, 100vw"
					className="object-cover"
				/>
			</div>

			<div className="pb-3 px-3 lg:px-6 lg:pb-4 flex flex-col">
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
