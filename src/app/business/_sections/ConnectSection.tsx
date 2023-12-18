import Link from 'next/link'

import type { StyleProps } from '~/lib/types'
import { CONNECT_BUTTON_CONFIG } from '~/shared/config/connect-link'

import { Title } from '~/client/ui/components/Text'
import { Button } from '~/client/ui/components/Button'

import { SectionCity } from '~/client/components/Section/SectionCity'

const ConnectSection = (props: StyleProps) => (
	<SectionCity
		id="connect"
		{...props}>
		<Title className="text-center text-3xl">
			Подключение <br /> <b className="uppercase text-brand text-5xl">Онлайн</b>
		</Title>

		<ul className="w-full md:w-fit flex flex-col md:flex-row gap-4">
			{CONNECT_BUTTON_CONFIG.map((link) => (
				<li key={link.href}>
					<Link href={link.href}>
						<Button
							color="secondary"
							className="w-full md:w-36">
							{link.text}
						</Button>
					</Link>
				</li>
			))}
		</ul>
	</SectionCity>
)

export { ConnectSection }
