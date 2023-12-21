import type { Populate, StrapiApiSchema } from '~/lib/strapi'

import type { ImageAPI } from '../image'

type ErrorConfigAPI = StrapiApiSchema<{
	noData: Populate<ImageAPI, false>
	notFound: Populate<ImageAPI, false>
	internalError: Populate<ImageAPI, false>
}>

export type { ErrorConfigAPI }
