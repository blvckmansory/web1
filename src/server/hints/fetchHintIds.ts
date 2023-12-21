import { baseFetchStrapiHint, type Hint, type HintType } from './_utils'

type HintId = Pick<Hint, 'id'>

type FetchHintIdsArgs = {
	type: HintType
}

const fetchHintIds = async ({ type }: FetchHintIdsArgs) => {
	try {
		return await baseFetchStrapiHint<true, HintId>('/hints', {
			'fields[0]': 'id',
			'filters[hintType]': type,
		})
	} catch (error) {
		return { data: [] }
	}
}

export { fetchHintIds }
