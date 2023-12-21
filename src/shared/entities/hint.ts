import type { StrapiApiSchema } from '~/lib/strapi'

enum HintType {
	HINT = 'HINT',
	INSTRUCTION = 'INSTRUCTION',
	FRIENDSHIP_RULE = 'FRIENDSHIP_RULE',
}

type HintAPI = StrapiApiSchema<{
	hintType: HintType

	title: string
	content: string

	videoURL?: string
}>

export { HintType }
export type { HintAPI }
