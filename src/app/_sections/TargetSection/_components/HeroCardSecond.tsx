import Link from 'next/link'

import { Button } from '~/client/ui/components/Button'
import { Text, Title } from '~/client/ui/components/Text'

import { HeroCard, type HeroCardProps } from '~/client/components/cards/HeroCard'

const HeroCardSecond = ({ imageUrl }: Pick<HeroCardProps, 'imageUrl'>) => (
	<HeroCard
		color="#0090FF"
		imageUrl={imageUrl}
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
