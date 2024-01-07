type Coords = [number, number]

type ZoneAPI = {
	displayName: string
	hasBonus: boolean
	priority: number
	bonusValue: number
	bonusUnits: string
	points: Coords[]
	zoneMarkerUrl: string
	speedMode: string
}

type ZonesAPI = {
	rentEndZones: Array<ZoneAPI>
}

export type { ZonesAPI, ZoneAPI, Coords }
