import { baseFetchStrapiHint, HintType, type Hint } from './_utils'

type FetchHintsArgs = {
	type: HintType
}

const fetchHints = async ({ type }: FetchHintsArgs) => {
	try {
		return await baseFetchStrapiHint<true, Hint>('/hints', {
			'filters[hintType]': type,
		})
	} catch (error) {
		return { data: null }
	}
}

export { fetchHints }
