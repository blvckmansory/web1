import Link from 'next/link'

import { Text, Title, Button, Spacer, Image, AbsoluteImage } from '~/client/ui/components'

import { BluredEllipse } from '~/client/components/BluredEllipse'
import { SocialMediaGroup } from '~/client/components/SocialMediaGroup'
import { Section, type SectionProps } from '~/client/components/Section/Section'

const WelcomeSection = (props: SectionProps) => (
	<Section
		id="welcome"
		className="py-8 md:!py-14 md:min-h-[70vh] gap-7"
		{...props}>
		<BluredEllipse
			size={800}
			className="opacity-40 -left-1/4 -bottom-full"
		/>
		<AbsoluteImage
			src="/assets/potato-4.svg"
			className="invisible md:visible h-1/4 bottom-0 left-1/4"
		/>

		<Title className="lg:text-6xl">
			Hello Каршеринг <br /> для <b className="text-brand">Бизнеса!</b>
		</Title>

		<Text className="leading-6">
			<b>С нас:</b> <br /> Топливо, страховка, техосмотр и техобслуживание, мойка
		</Text>

		<Text className="leading-6">
			<b>С вас:</b> <br /> Заключение договора
		</Text>

		<Link
			href="/tariff"
			className="w-max">
			<Button className="w-full md:w-fit">Смотреть тарифы</Button>
		</Link>

		<Spacer full />

		<SocialMediaGroup className="self-center md:self-start" />

		<Image
			alt=""
			src="/assets/business-welcome.svg"
			className="w-[100vw] h-auto lg:w-auto lg:h-full lg:absolute lg:right-5 lg:top-0"
		/>
	</Section>
)

export { WelcomeSection }
