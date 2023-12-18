import { Icon } from '~/client/ui/components/Icon'
import { Button, type ButtonProps } from '~/client/ui/components/Button'

const BurgerButton = (props: ButtonProps) => (
	<Button
		color="secondary"
		{...props}
		iconLeft={
			<Icon
				size={24}
				name="menu"
			/>
		}
	/>
)

export { BurgerButton }
