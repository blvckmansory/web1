import { revalidateTag } from 'next/cache'

import {
	fetchStrapi,
	getStrapiMedia,
	type StrapiResponse,
	type FetchStrapiOptions,
} from '~/lib/strapi'

import type { Car } from '~/shared/entities/car'
import type { Media } from '~/shared/entities/image'

const convertCarResponse = <T extends { previewImage: Media }>(car: T) => ({
	...car,
	previewImage: {
		...car.previewImage,
		url: getStrapiMedia(car.previewImage.url),
	},
})

const REVALIDATE_TAG = '/cars'
const defaultQueries = {} as const

const revalidateCars = () => revalidateTag(REVALIDATE_TAG)

const baseFetchStrapiCar = async <IsArray extends boolean = true, T = Car>(
	path: string,
	urlParamsObject: any = {},
	options: FetchStrapiOptions = {},
): Promise<StrapiResponse<T, IsArray>> =>
	fetchStrapi<StrapiResponse<Car, IsArray>>(
		path,
		{
			...defaultQueries,
			...urlParamsObject,
		},
		{ ...options, next: { tags: [REVALIDATE_TAG], ...options.next } },
	).then(({ data, ...rest }) => {
		const mappedData = Array.isArray(data)
			? data.map(convertCarResponse)
			: convertCarResponse(data)

		return {
			...rest,
			data: mappedData as IsArray extends true ? T[] : T,
		}
	})

export { baseFetchStrapiCar, revalidateCars }
