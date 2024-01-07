import type { StrapiSchema } from '~/lib/strapi'

import type { Media } from '../image'

type BusinessPageConfig = StrapiSchema<{
	cover: Media
	contract: Media
}>

export type { BusinessPageConfig }
