import { baseFetchStrapiHint, type Hint } from './_utils'

const fetchHintById = async (id: string | number) => {
	try {
		return await baseFetchStrapiHint<false, Hint>(`/hints/${id}`)
	} catch (error) {
		return { data: null }
	}
}

export { fetchHintById }
