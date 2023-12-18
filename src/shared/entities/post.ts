import type { Populate, StrapiApiSchema } from '~/lib/strapi'

import type { Locale } from './locale'
import type { ImageAPI } from './image'

type PostAPI = StrapiApiSchema<{
	title: string
	content: string
	description: string

	locale: Locale
	cover: Populate<ImageAPI, false>

	createdAt: string
	updatedAt: string
	publishedAt: string
}>

export type { PostAPI }
