import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Text, Button } from '~/client/ui/components'

type CookiesBannerProps = StyleProps & {
	show?: boolean
	confirm?: (event: React.FormEvent<HTMLFormElement>) => unknown
}

const CookiesBanner = ({ style, confirm, className, show = false }: CookiesBannerProps) => {
	if (!show) {
		return null
	}

	return (
		<form
			style={style}
			className={clsx(
				'h-fit',
				'mx-auto py-5 px-5 w-full',
				'flex items-center gap-4',
				'bg-white border-container shadow-brand !border-2',
				'max-md:flex-col max-md:gap-y-3',
				className,
			)}
			onSubmit={(event) => {
				event.preventDefault()
				confirm?.(event)
			}}>
			<Button
				icon
				readOnly
				iconLeft={'🍪'}
				color="secondary"
				className="self-start text-2xl"
			/>

			<div className="self-start flex flex-col gap-y-1.5 max-md:mb-2">
				<Text className="max-w-3xl text-base leading-snug cursor-default">
					Продолжая использовать сайт, Вы соглашаетесь и использованием файлов куков и
					подтверждаете, что ознакомились с условиями:
				</Text>

				<a
					target="_blank"
					href="/legal/cookies.pdf"
					className="w-max min-h-max font-medium text-base text-link-default hover:text-link-active transition-all">
					Больше информации
				</a>
			</div>

			<Button
				auto
				size="sm"
				type="submit"
				className="ml-auto self-start py-2.5 max-md:w-full md:self-center px-4">
				Понимаю
			</Button>
		</form>
	)
}

export { CookiesBanner }
export type { CookiesBannerProps }
