import { clsx } from '~/lib/clsx'
import type { StyleProps, ReactChildren } from '~/lib/types'

import { Image } from '~/client/ui/components/Image'

import { BluredEllipse } from '~/client/components/BluredEllipse'

import styles from './styles.module.css'

type HeroCardProps = StyleProps & {
	color?: string
	potatoImageUrl?: string
	potatoImageClassName?: string

	imageUrl: string
	children: ReactChildren
}

const HeroCard = ({
	color,
	style,
	className,
	children,
	imageUrl,
	potatoImageUrl,
	potatoImageClassName,
}: HeroCardProps) => (
	<article
		style={style}
		className={clsx(styles.container, className)}>
		<div className={styles.inner}>{children}</div>

		<Image
			alt="heroImage"
			src={imageUrl}
			width={650}
			height={480}
			priority
			className={styles.image}
		/>

		{/* <BluredEllipse
			size={150}
			color={color}
			className={clsx(styles.ellipse, styles.left)}
		/>
		<BluredEllipse
			size={150}
			color={color}
			className={clsx(styles.ellipse, styles.right)}
		/> */}
		{potatoImageUrl ? (
			<Image
				alt="heroPotato"
				src={potatoImageUrl}
				className={clsx(styles.potato, potatoImageClassName)}
			/>
		) : null}
	</article>
)

export { HeroCard }
export type { HeroCardProps }
