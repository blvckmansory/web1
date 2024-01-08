import { memo } from 'react'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { RateAgeOverSwitch } from './RateAgeOverSwitch'
import { RateExpOverCheckbox } from './RateExpOverCheckbox'
import { RateResidentCheckbox } from './RateResidentCheckbox'

type RateFiltersProps = StyleProps & {
	ageOver?: boolean
	expOver?: boolean
}

const RateFilters = memo(({ style, ageOver, expOver, className }: RateFiltersProps) => (
	<article
		style={style}
		className={clsx('flex flex-wrap items-center gap-x-10 gap-y-6', className)}>
		<RateResidentCheckbox />
		{expOver ? <RateExpOverCheckbox /> : null}
		{ageOver ? <RateAgeOverSwitch /> : null}
	</article>
))

export { RateFilters }
export type { RateFiltersProps }
