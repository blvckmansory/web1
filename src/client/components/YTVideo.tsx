'use client'

import { memo } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

type YTVideoProps = {
	videoURL?: string
}

const YTVideo = memo(({ style, className, videoURL }: StyleProps & YTVideoProps) => {
	const videoId = videoURL?.split('/').at(-1)

	if (!videoId) {
		return null
	}

	return (
		<div
			className={clsx('relative rounded-xl', className)}
			style={{
				...style,
				position: 'relative',
				paddingBottom: '56.25%' /* 16:9 */,
				paddingTop: 25,
				height: 0,
				overflow: 'clip',
			}}>
			<iframe
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
				}}
				src={`https://www.youtube.com/embed/${videoId}`}
			/>
		</div>
	)
})

export { YTVideo }
