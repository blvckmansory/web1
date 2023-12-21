import type { Populate, StrapiApiSchema } from '~/lib/strapi'

import type { ImageAPI } from '../image'

type WelcomeConfigAPI = StrapiApiSchema<{
	home: Populate<ImageAPI, false>
	business: Populate<ImageAPI, false>
}>

export type { WelcomeConfigAPI }
