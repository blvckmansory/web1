import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { fetchHints, HintType } from '~/server/hints'

import { Collapse } from '~/client/ui/components/Collapse'

import { NoData } from '~/client/components/NoData'
import { YTVideo } from '~/client/components/YTVideo'
import { MarkdownContent } from '~/client/components/MarkdownContent'

type HintContainerProps = {
	type: HintType
}

const HintContainer = async ({ type, style, className }: StyleProps & HintContainerProps) => {
	const { data } = await fetchHints({ type })

	if (!data || !data.length) {
		return <NoData />
	}

	return (
		<section
			style={style}
			className={clsx('flex flex-col gap-y-4', className)}>
			{data?.map((item, key) => (
				<Collapse
					key={key}
					title={item.title}>
					{item.videoURL ? (
						<YTVideo
							videoURL={item.videoURL}
							className="mb-4"
						/>
					) : null}

					<MarkdownContent className="text-justify">{item.content}</MarkdownContent>
				</Collapse>
			))}
		</section>
	)
}

export { HintContainer }
export type { HintContainerProps }
