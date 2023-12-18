import Link from 'next/link'

import { Text, Title, Button } from '~/client/ui/components'

import { HeroCard } from '~/client/components/cards/HeroCard'

const HeroCardFinal = () => (
	<HeroCard
		color="#EC1919"
		imageUrl="/assets/card-3.svg"
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
