'use client'

import { useMemo } from 'react'

import type { Page } from '~/lib/types'

import { Collapse } from '~/client/ui/components'

const Help: Page = () => {
	const items = useMemo(
		() =>
			new Array(4).fill(0).map((_, idx) => ({
				title: `Collapse Title ${idx}`,
				children: `Collapse Information ${idx}`,
			})),
		[],
	)

	return (
		<>
			{items.map((item, key) => (
				<Collapse
					key={key}
					{...item}
				/>
			))}
		</>
	)
}

export default Help
