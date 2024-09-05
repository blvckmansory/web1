import { ZONES_API_URL } from '~/env'

import type { ZonesAPI } from '~/shared/entities/zones'

const fetchZones = async () => {
	try {
		const json = (await fetch(ZONES_API_URL, {
			next: { revalidate: 60 * 60 * 24 },
		}).then((res) => res.json())) as ZonesAPI

		return json.rentEndZones.map(({ points }) => {
			return points.map(([lng, lat]) => ({ lat, lng }))
		})
	} catch (_error) {
		return []
	}
}

type ZonesType = Awaited<ReturnType<typeof fetchZones>>

export { fetchZones }
export type { ZonesType }
