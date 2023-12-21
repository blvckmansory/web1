import { fetchErrorConfig } from '~/server/single-types/error'

import { Image } from '~/client/ui/components/Image'

const InternalErrorImage = async () => {
	const { internalError } = await fetchErrorConfig()
	return (
		<Image
			alt="500"
			src={internalError || '/500.svg'}
			className="w-full h-auto sm:h-[500px] sm:w-auto"
		/>
	)
}

export { InternalErrorImage }
