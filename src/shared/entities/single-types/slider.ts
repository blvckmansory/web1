import type { StrapiSchema } from '~/lib/strapi'

import type { Media } from '../image'

type SliderConfig = StrapiSchema<{
	first: Media
	second: Media
	third: Media
}>

export type { SliderConfig }
