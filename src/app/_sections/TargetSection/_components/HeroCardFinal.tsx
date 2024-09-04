import Link from 'next/link'

import { Button } from '~/client/ui/components/Button'
import { Text, Title } from '~/client/ui/components/Text'
import { AbsoluteImage } from '~/client/ui/components/Image'

import { HeroCard, type HeroCardProps } from '~/client/components/cards/HeroCard'

type HeroCardFinalProps = Pick<HeroCardProps, 'imageUrl'> & {
	minPrice?: number
}

const HeroCardFinal = ({ imageUrl, minPrice = 0.43 }: HeroCardFinalProps) => (
	<HeroCard
		color="#EC1919"
		imageUrl={imageUrl}
		potatoImageUrl="/assets/potato-7.svg"
		potatoImageClassName="max-lg:top-0 max-lg:right-0 lg:left-0 lg:top-5">
		<AbsoluteImage
			width={232}
			height={182}
			src="/bg/red-ellipse.svg"
			top={0}
			right={0}
		/>
		<AbsoluteImage
			width={232}
			height={182}
			src="/bg/red-ellipse.svg"
			left={0}
			bottom={0}
			className="rotate-180"
		/>
		<Title
			weight={800}
			className="leading-[9rem] !text-[9rem] text-brand lg:!leading-0">
			26
		</Title>
		<Title
			uppercase
			className="!text-4xl !mt-0">
			тарифов
		</Title>

		<Text>
			Стоимость проезда от <b>{minPrice} BYN</b>
		</Text>

		<Link
			href="/cars"
			className="w-fit">
			<Button>Просмотреть все цены</Button>
		</Link>
	</HeroCard>
)

export { HeroCardFinal }
