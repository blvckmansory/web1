import type { HintType } from '~/shared/entities/hint'

import { baseFetchStrapiHint } from './_utils'

type FetchHintsArgs = {
	type: HintType
}

const fetchHints = async ({ type }: FetchHintsArgs) => {
	try {
		return await baseFetchStrapiHint('/hints', {
			type,
		})
	} catch (error) {
		return { data: null }
	}
}

export { fetchHints }
