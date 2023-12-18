import { clsx } from '~/lib/clsx'

import { Tag, Image, Title, Breadcrumb, RadioGroup, RadioColor } from '~/client/ui/components'

import { Section, type SectionProps } from '~/client/components/Section'

type PreviewSectionProps = SectionProps & {
	img: string
	name: string

	nova?: boolean
	pasting?: boolean
}

const PreviewSection = ({
	img,
	name,
	style,
	className,
	nova = false,
	pasting = false,
}: PreviewSectionProps) => (
	<Section
		style={style}
		className={clsx('flex flex-col gap-8', className)}>
		<Breadcrumb
			items={[
				{ href: '/cars', text: 'Тарифы' },
				{ href: '#', text: name },
			]}
		/>

		<div className="flex flex-col lg:flex-row gap-10 justify-between">
			<article className="flex-1 flex flex-col">
				<Title className="text-3xl md:text-4xl flex items-center">
					{name}
					{!pasting ? <Tag className="ml-4">Без оклейки</Tag> : null}
					{nova ? <Tag className="ml-1">NEW</Tag> : null}
				</Title>
				<Image
					alt=""
					src={img}
					width={857}
					height={368}
					className="h-auto"
				/>
			</article>

			<div className="flex flex-col gap-6 pr-20">
				<RadioGroup
					dir="x"
					label="Цвет"
					initialValue={colors[1]}>
					{colors.map((color) => (
						<RadioColor
							key={color}
							value={color}
						/>
					))}
				</RadioGroup>
			</div>
		</div>
	</Section>
)

const colors = ['#696969', '#6324B2', '#DEE3E5', '#57867B', '#012099', '#101010']

export { PreviewSection }
export type { PreviewSectionProps }
