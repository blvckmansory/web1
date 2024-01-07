import type { StrapiSchema } from '~/lib/strapi'

import type { Media } from '../image'

type HomePageConfig = StrapiSchema<{
	cover: Media
	description: string
}>

export type { HomePageConfig }
