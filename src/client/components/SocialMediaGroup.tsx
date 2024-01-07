import Link from 'next/link'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { fetchSocialMedia } from '~/server/social-media'

import { Image } from '~/client/ui/components/Image'
import { Button } from '~/client/ui/components/Button'

const SocialMediaGroup = async ({ className, ...props }: StyleProps) => {
	const { data: media } = await fetchSocialMedia()

	return (
		<ul
			{...props}
			className={clsx('flex gap-3', className)}>
			{media.map((media, idx) => (
				<Link
					href={media.href}
					key={`${media.href} ${idx}`}>
					<Button
						color="secondary"
						iconLeft={
							<Image
								width={20}
								height={20}
								src={media.icon}
							/>
						}
						className="p-2.5"
					/>
				</Link>
			))}
		</ul>
	)
}

export { SocialMediaGroup }
