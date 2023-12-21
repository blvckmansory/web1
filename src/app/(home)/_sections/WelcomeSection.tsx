import { Spacer } from '~/client/ui/components/Spacer'
import { Text, Title } from '~/client/ui/components/Text'

import { BluredEllipse } from '~/client/components/BluredEllipse'
import { SocialMediaGroup } from '~/client/components/SocialMediaGroup'
import { Section, type SectionProps } from '~/client/components/Section'

import { HomeWelcomeImage } from '~/client/modules/(images)/HomeWelcomeImage'

import { DownloadAppButton } from './DownloadAppButton'

const WelcomeSection = (props: SectionProps) => (
	<Section
		id="welcome"
		className="py-8 md:!py-14 md:min-h-[70vh] gap-7"
		{...props}>
		<BluredEllipse
			size={800}
			className="opacity-40 -left-1/4 -bottom-full"
		/>

		<Title
			as="h1"
			className="md:text-6xl">
			Краткосрочная <br /> аренда автомобилей <br /> в <b className="text-brand">Минске!</b>
		</Title>
		<Text
			weight={400}
			color="ghost">
			Берите авто на сутки от <b className="text-default">42 BYN</b> или от{' '}
			<b className="text-default">0,43 BYN</b> в минуту.
		</Text>

		<DownloadAppButton />

		<Spacer className="md:flex-1" />

		<SocialMediaGroup className="self-center md:self-start" />

		<HomeWelcomeImage />
	</Section>
)

export { WelcomeSection }
