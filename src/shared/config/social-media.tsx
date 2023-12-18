import Image, { type ImageProps } from 'next/image'

const defaultImageProps = {
	width: 20,
	height: 20,
} satisfies Partial<ImageProps>

/** @add href */
const SOCIAL_MEDIA_CONFIG = [
	{
		icon: (
			<Image
				{...defaultImageProps}
				alt="in"
				src="/media/instagram.svg"
			/>
		),
		href: '/',
	},
	{
		icon: (
			<Image
				{...defaultImageProps}
				alt="tt"
				src="/media/tiktok.svg"
			/>
		),
		href: '/',
	},
	{
		icon: (
			<Image
				{...defaultImageProps}
				alt="yt"
				src="/media/yt.svg"
			/>
		),
		href: '/',
	},
	{
		icon: (
			<Image
				{...defaultImageProps}
				alt="vk"
				src="/media/vk.svg"
			/>
		),
		href: '/',
	},
] as const

export { SOCIAL_MEDIA_CONFIG }
