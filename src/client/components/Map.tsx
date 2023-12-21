'use client'

import { useEffect, useRef, useState } from 'react'

import { Status, Wrapper } from '@googlemaps/react-wrapper'

import { clsx } from '~/lib/clsx'
import { StyleProps } from '~/lib/types'

import { Skeleton } from '~/client/ui/components/Skeleton'

type MapProps = StyleProps &
	Partial<{
		zoom: number
		center: google.maps.LatLngLiteral
	}>

const render = (status: Status, props: MapProps) => {
	switch (status) {
		case Status.LOADING:
			return (
				<Skeleton
					style={props.style}
					className={props.className}
				/>
			)
		case Status.FAILURE:
			return (
				<Skeleton
					style={props.style}
					className={props.className}
				/>
			)
		case Status.SUCCESS:
			return <MapComponent {...props} />
	}
}

const DEV_API_KEY = 'AIzaSyAPrBuZghbgbcX33vGCN5wmZyH4zZdwpzg'
const PRODUCTION_API_KEY = 'AIzaSyCvynUtmywoW2A6QtcZ-0Usy18KSjiAgnI'

const MapWrapper = (props: MapProps) => (
	<Wrapper
		apiKey={DEV_API_KEY}
		render={(status) => render(status, props)}
	/>
)

const MAP_OPTIONS: google.maps.MapOptions = {
	center: {
		lat: 53.9,
		lng: 27.5667,
	},
	zoom: 12,
	scaleControl: true,
	streetViewControl: true,
}

const MapComponent = ({ zoom, style, center, className }: MapProps) => {
	const ref = useRef<HTMLDivElement>(null)
	const [load, setLoad] = useState<boolean>(false)
	const [map, setMap] = useState<google.maps.Map>()

	useEffect(() => {
		if (!ref.current) {
			return
		}

		if (map) {
			return
		}

		setMap(new window.google.maps.Map(ref.current, MAP_OPTIONS))
	}, [map, ref])

	useEffect(() => {
		if (!map || load) {
			return
		}

		fetchZonesGeoJson().then((data: google.maps.LatLng[][]) => {
			data.map(
				(paths) =>
					new window.google.maps.Polygon({
						map,
						paths,
						fillColor: 'rgb(98, 143, 328)',
					}),
			)
		})

		setLoad(true)
	}, [map, load, setLoad])

	return (
		<div
			ref={ref}
			id="map"
			style={style}
			className={clsx('w-full rounded-xl bg-white', className)}
		/>
	)
}

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

const fetchZonesGeoJson = async () => {
	const json = (await fetch('https://hellominsk1.cartrek.online/api/zones').then((res) =>
		res.json(),
	)) as ZonesAPI

	return json.rentEndZones.map(({ points }) => {
		return points.map(([lng, lat]) => new window.google.maps.LatLng(lat, lng))
	})
}

export default MapWrapper
