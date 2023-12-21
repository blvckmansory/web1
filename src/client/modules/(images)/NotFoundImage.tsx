import { fetchErrorConfig } from '~/server/single-types/error'

import { Image } from '~/client/ui/components/Image'

const NotFoundImage = async () => {
	const { notFound } = await fetchErrorConfig()

	return (
		<Image
			alt="404"
			src={notFound || '/404.svg'}
			className="w-full h-auto sm:h-[500px] sm:w-auto"
		/>
	)
}

export { NotFoundImage }
