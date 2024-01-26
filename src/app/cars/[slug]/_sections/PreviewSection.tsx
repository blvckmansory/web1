'use client'

import { useState, useCallback } from 'react'

import { clsx } from '~/lib/clsx'

import type { Car } from '~/shared/entities/car'

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
	className,
	sideImages,
	isWrapped = false,
}: PreviewSectionProps) => {
	const [sideImageId, setSideImageId] = useState<string>(String(sideImages[0]?.id) as string)

	const findImageByColor = useCallback(
		(_color: string) => sideImages.find((_sideImage) => _sideImage.color === _color),
		[sideImages],
	)

	const handleChangeColor = useCallback(
		(_id: string) => {
			const newSideImage = sideImages.find((_sideImage) => String(_sideImage.id) === _id)

			if (!newSideImage) {
				return null
			}

			setSideImageId(String(newSideImage.id))
		},
		[findImageByColor],
	)

	return (
		<Section
			style={style}
			className={clsx('flex flex-col gap-8', className)}>
			<Breadcrumb
				items={[
					{
						text: 'Тарифы',
						href: '/cars',
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

					{sideImages.map((_sideImage) => (
						<Image
							key={_sideImage.id}
							priority
							width={1800}
							height={800}
							quality={100}
							alt="car-side-image"
							className={clsx(
								'w-full h-auto',
								String(_sideImage.id) !== sideImageId ? 'hidden' : '',
							)}
							src={_sideImage.image.url}
							sizes="(max-width: 768px) 100vw, 80vw"
						/>
					))}
				</article>

				<div className="flex flex-col gap-6">
					<RadioGroup
						dir="x"
						label="Цвет"
						initialValue={sideImageId}
						onChange={handleChangeColor}
						className="w-full sm:w-80 flex-wrap">
						{sideImages.map((_sideImage) => (
							<RadioColor
								key={_sideImage.id}
								color={_sideImage.color}
								value={String(_sideImage.id)}
								src={_sideImage.colorImage?.url}
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
