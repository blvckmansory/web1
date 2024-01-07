import type { StrapiSchema } from '~/lib/strapi'

import type { Media } from './image'

type SocialMedia = StrapiSchema<{
	name: string
	href: string
	icon: Media
}>

export type { SocialMedia }
