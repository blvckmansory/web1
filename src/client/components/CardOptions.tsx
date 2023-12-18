import Image from 'next/image'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

const CardOptions = ({ className, ...props }: StyleProps) => (
	<ul
		{...props}
		className={clsx('flex flex-wrap items-center gap-5', className)}
	>
		{new Array(12).fill(0).map((_, idx) => (
			<li key={idx}>
				<Image
					alt="pay"
					width={0}
					height={0}
					className="w-auto h-6"
					src={`/payment/pay-${idx + 1}.svg`}
				/>
			</li>
		))}
	</ul>
)

export { CardOptions }
