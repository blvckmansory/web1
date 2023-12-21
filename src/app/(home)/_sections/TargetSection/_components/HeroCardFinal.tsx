import Link from 'next/link'

import { Button } from '~/client/ui/components/Button'
import { Text, Title } from '~/client/ui/components/Text'

import { HeroCard, type HeroCardProps } from '~/client/components/cards/HeroCard'

const HeroCardFinal = ({ imageUrl }: Pick<HeroCardProps, 'imageUrl'>) => (
	<HeroCard
		color="#EC1919"
		imageUrl={imageUrl}
		potatoImageUrl="/assets/potato-7.svg"
		potatoImageClassName="max-lg:top-0 max-lg:right-0 lg:left-0 lg:top-5">
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
			Стоимость проезда от <b>0.43 BYN</b>
		</Text>

		<Link
			href="/tariff"
			className="w-fit">
			<Button>Просмотреть все цены</Button>
		</Link>
	</HeroCard>
)

export { HeroCardFinal }
