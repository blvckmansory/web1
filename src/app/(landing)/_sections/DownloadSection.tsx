import type { StyleProps } from '~/lib/types'
import { DOWNLOAD_BUTTON_CONFIG } from '~/shared/config/download-link'

import { Text, Title, NavLink } from '~/client/ui/components'

import { SectionCity } from '~/client/components/Section/SectionCity'

import { DownloadLink } from './DownloadLink'

const DownloadSection = (props: StyleProps) => (
	<SectionCity
		id="download"
		{...props}>
		<Title className="text-3xl">
			Давайте <br /> <b className="uppercase text-brand text-5xl">Дружить!</b>
		</Title>

		<Text color="ghost">
			Скачивайте приложение и соблюдайте наши простые{' '}
			<NavLink
				href="/"
				className="uppercase underline underline-offset-4">
				Правила
			</NavLink>
		</Text>

		<ul className="w-full flex flex-col gap-4 md:w-fit md:flex-row">
			{DOWNLOAD_BUTTON_CONFIG.map((link) => (
				<li
					key={link.href}
					className="w-full md:w-fit">
					<DownloadLink {...link} />
				</li>
			))}
		</ul>
	</SectionCity>
)

export { DownloadSection }
