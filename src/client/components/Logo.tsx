import Link from 'next/link'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/client/ui/components/Image'

const Logo = ({ className, ...props }: StyleProps) => (
	<Link
		{...props}
		href="/"
		className={clsx('flex-none w-max h-fit select-none', className)}>
		<Image
			alt="logo"
			width={1000}
			height={1000}
			loading="eager"
			src="/assets/logo.png"
			className="aspect-[2/1] w-20"
		/>
	</Link>
)

export { Logo }
