import { fetchWelcomeConfig } from '~/server/single-types/welcome'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/client/ui/components/Image'

const BusinessWelcomeImage = async ({ style, className }: StyleProps) => {
	const { business } = await fetchWelcomeConfig()
	return (
		<Image
			alt="welcome-home"
			style={style}
			src={business || '/assets/business-welcome.svg'}
			className={clsx(
				'w-full h-auto lg:w-auto lg:h-[85%] lg:absolute lg:right-5 lg:top-[10%]',
				className,
			)}
		/>
	)
}

export { BusinessWelcomeImage }
