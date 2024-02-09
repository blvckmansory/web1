import { clsx } from '~/lib/clsx'
import type { As, ReactChildren, MergeWithHTMLProps } from '~/lib/types'

type SectionProps = MergeWithHTMLProps<
	'section',
	{
		as?: As

		children?: ReactChildren
		bluredChildren?: ReactChildren
	}
>

const Section = ({ as, children, className, bluredChildren, ...props }: SectionProps) => {
	const Comp = as || 'section'
	return (
		<Comp
			{...props}
			className={clsx(
				'relative z-0 py-8 md:py-10 lg:py-12 px-4 md:px-10 lg:px-12 w-full flex flex-col bg-white rounded-xl overflow-hidden [&>*]:z-10',
				className,
			)}>
			{children}
		</Comp>
	)
}

export { Section }
export type { SectionProps }
