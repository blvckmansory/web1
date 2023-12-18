import Link from 'next/link'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { SOCIAL_MEDIA_CONFIG } from '~/shared/config/social-media'

import { Button } from '~/client/ui/components/Button'

const SocialMediaGroup = ({ className, ...props }: StyleProps) => (
	<ul
		{...props}
		className={clsx('flex gap-3', className)}>
		{SOCIAL_MEDIA_CONFIG.map((media, idx) => (
			<Link
				href={media.href}
				key={`${media.href} ${idx}`}>
				<Button
					color="secondary"
					iconLeft={media.icon}
				/>
			</Link>
		))}
	</ul>
)

export { SocialMediaGroup }
