import { clsx } from '~/lib/clsx'
import type { MergeWithHTMLProps } from '~/lib/types'

type ListItemProps = MergeWithHTMLProps<'li'>

const ListItem = ({ className, children, ...props }: ListItemProps) => (
	<li
		{...props}
		className={clsx(
			'text-lg font-medium leading-6 text-default flex max-w-fit gap-3',
			className,
		)}>
		<span className="flex-none mt-1.5 w-3 h-3 rounded-full shadow-brand-small border-default border-[1.5px] bg-primary" />
		{children}
	</li>
)

export { ListItem }
export type { ListItemProps }
