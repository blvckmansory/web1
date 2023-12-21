import { Fragment } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps, ReactChildren } from '~/lib/types'

type Breakpoint = 'sm' | 'md' | 'lg'

type ResponsiveProps = StyleProps & {
	breakpoint?: Breakpoint

	mobile: ReactChildren
	desktop: ReactChildren
}

const Responsive = ({
	mobile,
	desktop,
	className,
	breakpoint = 'md',
	...props
}: ResponsiveProps) => (
	<Fragment>
		<div
			{...props}
			className={clsx(`max-lg:hidden`, className)}>
			{desktop}
		</div>
		<div
			{...props}
			className={clsx('lg:hidden', className)}>
			{mobile}
		</div>
	</Fragment>
)

Responsive.displayName = 'Responsive'

export { Responsive }
export type { Breakpoint, ResponsiveProps }
