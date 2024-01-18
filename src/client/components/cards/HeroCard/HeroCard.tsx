import { clsx } from '~/lib/clsx'
import type { StyleProps, ReactChildren } from '~/lib/types'

import { Image } from '~/client/ui/components/Image'

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
			priority
			width={650}
			height={480}
			src={imageUrl}
			quality={100}
			sizes="(min-width: 350px) 100vw, (min-width: 700px) 50vw, 80vw"
			className={styles.image}
		/>

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
