import type { StrapiApiSchema } from '~/lib/strapi'

type ImageAPI = StrapiApiSchema<{
	url: string
	name: string
}>

export type { ImageAPI }
