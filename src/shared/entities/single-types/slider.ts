import type { StrapiApiSchema } from '~/lib/strapi'

import type { ImageAPI } from '../image'
import { Populate } from '~/lib/strapi'

type SliderConfigAPI = StrapiApiSchema<{
	first: Populate<ImageAPI, false>
	second: Populate<ImageAPI, false>
	third: Populate<ImageAPI, false>
}>

export type { SliderConfigAPI }
