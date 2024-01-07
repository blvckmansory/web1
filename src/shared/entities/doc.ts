import type { StrapiSchema } from '~/lib/strapi'

import type { Media } from './image'

type Doc = StrapiSchema<{
	name: string
	file: Media
}>

export type { Doc }
