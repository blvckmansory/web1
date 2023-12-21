import Markdown from 'markdown-to-jsx'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

type MarkdownContentProps = StyleProps & {
	children: string
}

const MarkdownContent = ({ style, className, children }: MarkdownContentProps) => (
	<Markdown
		style={style}
		className={clsx('prose max-w-none text-justify', className)}>
		{children}
	</Markdown>
)

export { MarkdownContent }
export type { MarkdownContentProps }
