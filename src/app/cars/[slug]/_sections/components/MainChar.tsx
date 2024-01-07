import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Image } from '~/client/ui/components/Image'
import { Button } from '~/client/ui/components/Button'
import { Hint, Text } from '~/client/ui/components/Text'

type MainCharProps = StyleProps & {
	title: string
	icon: string

	hint?: string
}

const MainChar = ({ hint, icon, title, className, ...props }: MainCharProps) => (
	<li
		{...props}
		className={clsx('flex flex-col', className)}>
		<Button
			readOnly
			iconLeft={
				<Image
					alt=""
					src={icon}
					width={20}
					height={20}
				/>
			}
			className="p-2"
			style={{ backgroundColor: '#A8FFA8' }}
		/>
		<Text className="mt-4 font-medium text-lg">{title}</Text>
		<Hint className="mt-1 font-normal text-sm">{hint}</Hint>
	</li>
)

export { MainChar }
export type { MainCharProps }
