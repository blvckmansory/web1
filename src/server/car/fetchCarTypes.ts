import { categories } from './_data'

import type { CarType } from './types'

const fetchCarTypes = async (): Promise<CarType[]> => categories

export { fetchCarTypes }
