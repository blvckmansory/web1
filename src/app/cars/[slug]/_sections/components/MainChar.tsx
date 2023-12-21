import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { HeroIcon } from '~/client/components/HeroIcon'
import { Hint, Text, type IconNames } from '~/client/ui/components'

type MainCharProps = StyleProps & {
	title: string
	icon: IconNames

	hint?: string
}

const MainChar = ({ hint, icon, title, className, ...props }: MainCharProps) => (
	<li
		{...props}
		className={clsx('flex flex-col', className)}>
		<HeroIcon name={icon} />
		<Text className="mt-4 font-medium text-lg">{title}</Text>
		<Hint className="mt-1 font-normal text-sm">{hint}</Hint>
	</li>
)

export { MainChar }
export type { MainCharProps }
