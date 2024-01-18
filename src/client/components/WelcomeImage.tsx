import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/client/ui/components/Image'

type WelcomeImageProps = StyleProps & {
	src: string
}

const WelcomeImage = ({ src, style, className }: WelcomeImageProps) => (
	<Image
		priority
		alt="welcome-image"
		src={src}
		quality={100}
		style={style}
		sizes="(min-width: 769px) 100vw, 80vw"
		className={clsx(
			'w-full h-[70vw] lg:w-auto lg:h-[85%] lg:absolute lg:right-5 lg:top-[10%]',
			className,
		)}
	/>
)

export { WelcomeImage }
export type { WelcomeImageProps }
