import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Text } from '~/client/ui/components/Text'
import { Image } from '~/client/ui/components/Image'

type ContactButtonProps = StyleProps & {
	img: string
	name: string
	href: string
	value: string
}

const ContactButton = ({ img, href, name, value, style, className }: ContactButtonProps) => (
	<a
		href={href}
		target="_blank"
		onClick={() => {
			if (typeof window === 'undefined') {
				return
			}

			window.open(href)
		}}
		style={style}
		className={clsx(
			'relative z-50 w-full px-5 py-3 card flex items-center gap-x-5',
			'!rounded-md shadow-none text-left',
			'hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brand hover:border-black hover:bg-transparent',
			'focus:translate-x-0.5 focus:-translate-y-0.5 focus:shadow-brand focus:border-black focus:bg-transparent',
			'transition-all pointer-events-auto',
			className,
		)}>
		<Image
			alt={name}
			src={img}
			width={100}
			height={100}
			loading="lazy"
			style={{ width: 40, height: 40 }}
		/>
		<div className="flex flex-col gap-y-1">
			<Text
				size={13}
				weight={400}
				color="ghost">
				{name}
			</Text>
			<Text
				uppercase
				size={20}
				weight={500}
				color="default">
				{value}
			</Text>
		</div>
	</a>
)

export { ContactButton }
export type { ContactButtonProps }
