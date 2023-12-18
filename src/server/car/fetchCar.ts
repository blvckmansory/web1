import data from './_data'

import type { Car } from './types'

const fetchCar = async (id: string): Promise<Car | undefined> => data.find((item) => item.id === id)

export { fetchCar }
