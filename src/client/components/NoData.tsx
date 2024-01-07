import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Button } from '~/client/ui/components/Button'
import { Image, type ImageProps } from '~/client/ui/components/Image'

type NoDataProps = {
	imgSize?: ImageProps['width']
}

const NoData = ({ style, className, imgSize = 350 }: StyleProps & NoDataProps) => (
	<article
		style={style}
		className={clsx('w-full h-auto flex flex-col items-center', className)}>
		<Image
			alt="no-data"
			src="/no-data.svg"
			height={imgSize}
			style={{ width: 'auto', height: 300, ...style }}
		/>
		<Button
			readOnly
			color="secondary">
			Скоро добавим...
		</Button>
	</article>
)

export { NoData }
export type { NoDataProps }
