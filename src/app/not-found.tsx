import Link from 'next/link'

import type { Page } from '~/lib/types'

import { Button } from '~/client/ui/components/Button'

import { SectionError } from '~/client/components/Section/SectionError'
import { NotFoundImage } from '~/client/components/NotFoundImage'

const NotFound: Page = () => (
	<SectionError>
		<NotFoundImage />
		<Link href="/">
			<Button color="primary">Вернуться на главную</Button>
		</Link>
	</SectionError>
)

export default NotFound
