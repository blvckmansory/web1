import { clsx } from '~/lib/clsx'

import { Image, AbsoluteImage } from '~/client/ui/components/Image'

import { BluredEllipse } from '~/client/components/BluredEllipse'
import { Section, type SectionProps } from '~/client/components/Section/Section'

const SectionCity = ({ className, children, ...props }: SectionProps) => (
	<Section
		{...props}
		className={clsx('items-center gap-y-6 text-center', className)}>
		<BluredEllipse
			size={1200}
			className="opacity-5 md:opacity-40 -left-2/3 top-0"
		/>
		<BluredEllipse
			size={1200}
			className="opacity-5 md:opacity-40 -right-2/3 top-0"
		/>

		<AbsoluteImage
			src="/assets/city-left.svg"
			className="-left-1/2 md:left-0 top-5"
		/>
		<AbsoluteImage
			src="/assets/city-right.svg"
			className="-right-1/2 md:right-0 top-5"
		/>
		<AbsoluteImage
			src="/assets/potato-3.svg"
			className="invisible md:visible h-24 top-0 left-[10%]"
		/>

		{children}

		<Image
			alt="potato"
			className="mt-10 h-48 md:h-64 w-auto"
			src="/assets/potato-2.svg"
		/>
	</Section>
)

export { SectionCity }
export type { SectionProps }
