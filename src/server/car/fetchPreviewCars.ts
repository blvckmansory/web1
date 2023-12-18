import { random as randomFn } from '~/lib/helpers'

import data from './_data'

import type { Car } from './types'

type PreviewCar = Pick<Car, 'id' | 'min_tariff' | 'img' | 'pasting' | 'title' | 'type'>

type RandomProps = {
	count?: number
	random?: boolean
}

const fetchPreviewCars = async ({ random, count }: RandomProps = {}): Promise<PreviewCar[]> => {
	let cars: PreviewCar[] = data

	if (random && count) {
		cars = new Array(count).fill(0).map(() => randomFn(data))
	} else if (count) {
		cars = data.slice(0, count)
	}

	return cars
}

export { fetchPreviewCars }
export type { PreviewCar }
