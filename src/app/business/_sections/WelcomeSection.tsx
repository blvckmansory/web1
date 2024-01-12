import Link from 'next/link'

import { clsx } from '~/lib/clsx'

import { Button } from '~/client/ui/components/Button'
import { Spacer } from '~/client/ui/components/Spacer'
import { Text, Title } from '~/client/ui/components/Text'
import { AbsoluteImage } from '~/client/ui/components/Image'

import { WelcomeImage } from '~/client/components/WelcomeImage'
import { BluredEllipse } from '~/client/components/BluredEllipse'
import { SocialMediaGroup } from '~/client/components/SocialMediaGroup'
import { Section, type SectionProps } from '~/client/components/Section/Section'

type WelcomeSectionProps = SectionProps & {
	cover?: string
}

const WelcomeSection = ({ cover, style, className }: WelcomeSectionProps) => (
	<Section
		id="welcome"
		style={style}
		className={clsx('py-8 md:!py-14 md:min-h-[70vh] gap-7', className)}>
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
			href="/cars"
			className="w-max">
			<Button className="w-full md:w-fit">Смотреть тарифы</Button>
		</Link>

		<Spacer full />

		<SocialMediaGroup className="self-center md:self-start" />

		<WelcomeImage src={cover || '/assets/business-welcome.svg'} />
	</Section>
)

export { WelcomeSection }
