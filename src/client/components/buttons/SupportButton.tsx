import Link from 'next/link'

import { Button, type ButtonProps } from '~/client/ui/components/Button'

const SupportButton = (props: ButtonProps) => (
	<Link href="/contacts">
		<Button
			size="sm"
			{...props}>
			Поддержка
		</Button>
	</Link>
)

export { SupportButton }
