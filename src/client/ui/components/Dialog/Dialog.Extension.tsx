import { clsx } from '~/lib/clsx'
import type { As, ReactPropsOf } from '~/lib/types'

import { Hint } from '../Text'

type WithAs<T> = T & {
	as?: As
}

const DialogHeader = ({ children, className, ...props }: ReactPropsOf<'div'>) => (
	<div
		{...props}
		className={clsx('relative flex flex-row items-center w-full max-w-full', className)}>
		{children}
	</div>
)

const DialogDescription = Hint

const DialogBody = ({ as, className, style, ...props }: WithAs<ReactPropsOf<'div'>>) => {
	const Comp = as || 'div'
	return (
		<Comp
			{...props}
			className={clsx(
				'flex-1 w-full overflow-y-scroll my-5 text-base text-gray-1',
				className,
			)}
		/>
	)
}

const DialogFooter = ({ className, ...props }: ReactPropsOf<'div'>) => (
	<div
		{...props}
		className={clsx('mt-4', className)}
	/>
)

export { DialogHeader, DialogDescription, DialogBody, DialogFooter }
