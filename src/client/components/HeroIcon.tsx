import { memo } from 'react'

import { Button } from '~/client/ui/components/Button'
import { Icon, type IconProps } from '~/client/ui/components/Icon'

type HeroIconProps = IconProps & {
	color?: string
}

const HeroIcon = memo<HeroIconProps>(({ color = '#A8FFA8', ...props }) => (
	<Button
		readOnly
		iconLeft={
			<Icon
				className="text-default"
				{...props}
			/>
		}
		style={{ backgroundColor: color }}
	/>
))

export { HeroIcon }
export type { HeroIconProps }
