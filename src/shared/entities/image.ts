import type { StrapiApiSchema, StrapiSchema } from '~/lib/strapi'

type Media = StrapiSchema<{
	url: string
}>

type ImageAPI = StrapiApiSchema<{
	id: number | string
	url: string
	name: string
}>

export type { Media, ImageAPI }
