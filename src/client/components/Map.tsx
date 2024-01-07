'use client'

import { useEffect, useRef, useState } from 'react'

import { Status, Wrapper } from '@googlemaps/react-wrapper'

import { clsx } from '~/lib/clsx'
import { StyleProps } from '~/lib/types'

import type { ZonesType } from '~/server/zones'

import { Skeleton } from '~/client/ui/components/Skeleton'

type MapProps = StyleProps &
	Partial<{
		zones: ZonesType
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

const MapComponent = ({ zoom, style, zones, center, className }: MapProps) => {
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

		zones?.map(
			(paths) =>
				new window.google.maps.Polygon({
					map,
					paths,
					strokeWeight: 2,
					fillOpacity: 0.25,
					fillColor: 'rgb(98, 143, 328)',
					strokeColor: 'rgb(98, 143, 328)',
				}),
		)

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

export default MapWrapper
