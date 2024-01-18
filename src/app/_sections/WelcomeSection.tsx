import { clsx } from '~/lib/clsx'

import { fetchHomePageConfig } from '~/server/single-types/home-page'

import { Title } from '~/client/ui/components/Text'
import { Spacer } from '~/client/ui/components/Spacer'

import { WelcomeImage } from '~/client/components/WelcomeImage'
import { BluredEllipse } from '~/client/components/BluredEllipse'
import { MarkdownContent } from '~/client/components/MarkdownContent'
import { SocialMediaGroup } from '~/client/components/SocialMediaGroup'
import { Section, type SectionProps } from '~/client/components/Section'

import { DownloadAppButton } from './DownloadAppButton'

const WelcomeSection = async ({ style, className }: SectionProps) => {
	const { data } = await fetchHomePageConfig()

	return (
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
				Краткосрочная <br /> аренда автомобилей <br /> в{' '}
				<b className="text-brand">Минске!</b>
			</Title>

			{data?.description ? (
				<MarkdownContent className="text-lg">{data.description}</MarkdownContent>
			) : null}

			<DownloadAppButton />

			<Spacer className="md:flex-1" />

			<SocialMediaGroup className="self-center md:self-start" />

			<WelcomeImage src={data?.cover.url || '/assets/landing-welcome.svg'} />
		</Section>
	)
}

export { WelcomeSection }
