import NextImage, { type ImageProps as NextImageProps } from 'next/image'

import { getStrapiMedia } from '~/lib/strapi'
import type { HTMLImageProps } from '~/lib/types'

type StrapiImageProps<T = HTMLImageProps> = Omit<T, 'src'> & {
	src: string
}

const StrapiImage = ({ src, ...props }: StrapiImageProps<NextImageProps>) => (
	<NextImage
		{...props}
		src={getStrapiMedia(src)}
	/>
)

const StrapiImageHtml = ({ src, ...props }: StrapiImageProps<HTMLImageProps>) => (
	<img
		{...props}
		src={getStrapiMedia(src)}
	/>
)

export { StrapiImage, StrapiImageHtml }
export type { StrapiImageProps }
