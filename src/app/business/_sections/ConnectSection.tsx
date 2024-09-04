import Link from 'next/link'

import type { StyleProps } from '~/lib/types'

import { Title } from '~/client/ui/components/Text'
import { Button } from '~/client/ui/components/Button'

import { SectionCity } from '~/client/components/Section/SectionCity'

type ConnectSectionProps = StyleProps & {
	contractSrc?: string
}

const ConnectSection = ({ style, className, contractSrc }: ConnectSectionProps) => (
	<SectionCity
		id="connect"
		style={style}
		className={className}>
		<Title className="text-center text-3xl">
			Подключение <br /> <b className="uppercase text-brand text-5xl">Онлайн</b>
		</Title>

		<ul className="w-full md:w-fit flex flex-col md:max-w-lg md:justify-center md:flex-row md:flex-wrap gap-4">
			<ConnectSectionButton
				href="/cars"
				text="Тарифы"
			/>
			<ConnectSectionButton
				href={contractSrc}
				text="Образец договора"
			/>
			<ConnectSectionButton
				href="/legal/business-rules.pdf"
				text="Правила пользования сервисом"
			/>
			<ConnectSectionButton
				href="/contacts"
				text="Контакты"
			/>
		</ul>
	</SectionCity>
)

type ConnectSectionButtonProps = {
	href?: string
	text: string
}

const ConnectSectionButton = ({ href, text }: ConnectSectionButtonProps) => (
	<li>
		{href ? (
			<Link
				target="_blank"
				href={href}>
				<Button
					color="secondary"
					className="w-full md:w-fit md:min-w-36 line-clamp-1">
					{text}
				</Button>
			</Link>
		) : (
			<Button
				color="secondary"
				className="w-full md:w-fit md:min-w-36">
				{text}
			</Button>
		)}
	</li>
)

export { ConnectSection }
