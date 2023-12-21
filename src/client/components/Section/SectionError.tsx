import { clsx } from '~/lib/clsx'

import { Section, type SectionProps } from './Section'

const SectionError = ({ className, ...props }: SectionProps) => (
	<Section
		{...props}
		as="section"
		className={clsx('min-h-[80vh] flex flex-col items-center justify-center', className)}
	/>
)

export { SectionError }
