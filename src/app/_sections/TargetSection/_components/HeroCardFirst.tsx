import Link from 'next/link'

import { Title } from '~/client/ui/components/Text'
import { Button } from '~/client/ui/components/Button'
import { AbsoluteImage } from '~/client/ui/components/Image'

import { HeroCard, type HeroCardProps } from '~/client/components/cards/HeroCard'

const HeroCardFirst = ({ imageUrl }: Pick<HeroCardProps, 'imageUrl'>) => (
	<HeroCard
		color="#22FF01"
		imageUrl={imageUrl}
		potatoImageUrl="/assets/potato-5.svg"
		potatoImageClassName="max-lg:top-1/3 max-lg:right-0 lg:-top-6 lg:left-5 lg:-rotate-90">
		<AbsoluteImage
			width={232}
			height={182}
			src="/bg/green-ellipse.svg"
			top={0}
			right={0}
		/>
		<AbsoluteImage
			width={232}
			height={182}
			src="/bg/green-ellipse.svg"
			left={0}
			bottom={0}
			className="rotate-180"
		/>
		<Title
			weight={800}
			className="leading-[9rem] !text-[9rem] text-brand lg:!leading-0">
			30+
		</Title>
		<Title
			uppercase
			className="!text-4xl !mt-0">
			моделей авто
		</Title>

		<Link
			href="/cars"
			className="w-fit">
			<Button>Просмотреть все машины</Button>
		</Link>
	</HeroCard>
)

export { HeroCardFirst }
