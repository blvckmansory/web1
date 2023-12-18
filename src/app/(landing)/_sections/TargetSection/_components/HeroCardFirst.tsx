import Link from 'next/link'

import { Title, Button } from '~/client/ui/components'

import { HeroCard } from '~/client/components/cards/HeroCard'

const HeroCardFirst = () => (
	<HeroCard
		color="#22FF01"
		imageUrl="/assets/card-1.svg"
		potatoImageUrl="/assets/potato-5.svg"
		potatoImageClassName="max-lg:top-1/3 max-lg:right-0 lg:-top-6 lg:left-5 lg:-rotate-90">
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
			href="/tariff"
			className="w-fit">
			<Button>Просмотреть все машины</Button>
		</Link>
	</HeroCard>
)

export { HeroCardFirst }
