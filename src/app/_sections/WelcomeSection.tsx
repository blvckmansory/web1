import { clsx } from '~/lib/clsx'

import { Spacer } from '~/client/ui/components/Spacer'
import { Text, Title } from '~/client/ui/components/Text'

import { WelcomeImage } from '~/client/components/WelcomeImage'
import { BluredEllipse } from '~/client/components/BluredEllipse'
import { SocialMediaGroup } from '~/client/components/SocialMediaGroup'
import { Section, type SectionProps } from '~/client/components/Section'

import { DownloadAppButton } from './DownloadAppButton'
import { MarkdownContent } from '~/client/components/MarkdownContent'

type WelcomeSectionProps = SectionProps & {
	cover?: string
	description: string
}

const WelcomeSection = ({ style, className, cover, description }: WelcomeSectionProps) => (
	<Section
		id="welcome"
		style={style}
		className={clsx('py-8 md:!py-14 md:min-h-[70vh] gap-7', className)}>
		<BluredEllipse
			size={800}
			className="opacity-40 -left-1/4 -bottom-full"
		/>

		<Title
			as="h1"
			className="md:text-6xl">
			Краткосрочная <br /> аренда автомобилей <br /> в <b className="text-brand">Минске!</b>
		</Title>
		<MarkdownContent>{description}</MarkdownContent>

		<DownloadAppButton />

		<Spacer className="md:flex-1" />

		<SocialMediaGroup className="self-center md:self-start" />

		<WelcomeImage src={cover || '/assets/landing-welcome.svg'} />
	</Section>
)

export { WelcomeSection }
