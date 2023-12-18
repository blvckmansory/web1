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
		map?.data.setStyle((feature) => {
			return {
				strokeColor: '#000',
				strokeWeight: 10,
				strokeOpacity: 1,
			}
		})

		map?.data.loadGeoJson('/zones.json', { idPropertyName: 'MultiPolygon' }, (data) =>
			console.log(data),
		)
	}, [])

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
