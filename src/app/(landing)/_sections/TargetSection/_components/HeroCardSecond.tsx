import Link from 'next/link'

import { Text, Title, Button } from '~/client/ui/components'

import { HeroCard } from '~/client/components/cards/HeroCard'

const HeroCardSecond = () => (
	<HeroCard
		color="#0090FF"
		imageUrl="/assets/card-2.svg"
		potatoImageUrl="/assets/potato-6.svg"
		potatoImageClassName="max-lg:top-1/3 max-lg:right-0 max-lg:-rotate-180 lg:left-0 lg:top-5">
		<Title
			uppercase
			className="!text-4xl mt-5">
			Путешествуйте <br /> по всей
		</Title>

		<Title
			weight={800}
			className="text-5xl lg:text-6xl text-brand !mt-0">
			беларуси!
		</Title>

		<Text lineClamp={2}>Но оставляйте авто в зонах, разрешенных для завершения проезда</Text>

		<Link
			href="/zones"
			className="w-fit">
			<Button>Просмотреть карту</Button>
		</Link>
	</HeroCard>
)

export { HeroCardSecond }
