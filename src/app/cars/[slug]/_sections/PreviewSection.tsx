'use client'

import { useMemo, useState, useCallback } from 'react'

import { clsx } from '~/lib/clsx'

import type { Car, CarColorImage } from '~/shared/entities/car'

import { useCarColor } from '~/client/features/car/useCarColor'
import { QUERY_TYPE, QUERY_WRAPPED } from '~/client/features/car/useCarFilter'

import { Tag } from '~/client/ui/components/Tag'
import { Title } from '~/client/ui/components/Text'
import { Image } from '~/client/ui/components/Image'
import { Breadcrumb } from '~/client/ui/components/Breadcrumb'
import { RadioGroup, RadioColor } from '~/client/ui/components/Radio'

import { Section, type SectionProps } from '~/client/components/Section'

type PreviewSectionProps = SectionProps &
	Pick<Car, 'name' | 'sideImages' | 'isWrapped' | 'isHot' | 'isNew' | 'carType'>

const PreviewSection = ({
	name,
	style,
	carType,
	className,
	sideImages,
	isWrapped = false,
}: PreviewSectionProps) => {
	const colors = useMemo(() => sideImages.map((sideImage) => sideImage.color), [sideImages])

	const [color, setColor] = useCarColor(colors[0] as string)

	const findImageByColor = useCallback(
		(_color: string) => sideImages.find((_sideImage) => _sideImage.color === _color),
		[sideImages],
	)

	const [sideImage, setSideImage] = useState<CarColorImage>(
		() => findImageByColor(color) as CarColorImage,
	)

	const handleChangeColor = useCallback(
		(_color: string) => {
			const newSideImage = findImageByColor(_color)

			if (!newSideImage) {
				return null
			}

			setColor(newSideImage.color)
			setSideImage(newSideImage)
		},
		[findImageByColor],
	)

	const backUrl = useMemo(() => {
		const searchParams = new URLSearchParams()
		searchParams.set(QUERY_TYPE, String(carType.id))
		searchParams.set(QUERY_WRAPPED, String(isWrapped))
		return '/cars?' + searchParams.toString()
	}, [carType.id, isWrapped])

	return (
		<Section
			style={style}
			className={clsx('flex flex-col gap-8', className)}>
			<Breadcrumb
				items={[
					{
						text: 'Тарифы',
						href: backUrl,
					},
					{
						href: '#',
						text: name,
					},
				]}
			/>

			<div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-between">
				<article className="flex-1 flex flex-col gap-10 lg:gap-5">
					<div className="font-bold flex flex-wrap items-center gap-x-4 gap-y-2">
						<Title className="text-3xl md:text-4xl">{name}</Title>
						{!isWrapped ? <Tag>Без оклейки</Tag> : null}
					</div>

					<Image
						alt="car-side-image"
						priority
						width={1800}
						height={800}
						quality={100}
						className="w-full h-auto"
						sizes="(max-width: 768px) 100vw, 100vw"
						src={sideImage.image.url}
					/>
				</article>

				<div className="flex flex-col gap-6">
					<RadioGroup
						dir="x"
						label="Цвет"
						initialValue={color}
						onChange={handleChangeColor}
						className="w-full sm:min-w-[300px]">
						{colors.map((color) => (
							<RadioColor
								key={color}
								color={color}
							/>
						))}
					</RadioGroup>
				</div>
			</div>
		</Section>
	)
}

export { PreviewSection }
export type { PreviewSectionProps }
