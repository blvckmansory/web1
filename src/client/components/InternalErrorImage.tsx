import { Image } from '~/client/ui/components/Image'

const InternalErrorImage = () => (
	<Image
		alt="500"
		src="/500.svg"
		className="w-full h-[100vw] sm:h-[500px] sm:w-auto"
	/>
)

export { InternalErrorImage }
