import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Spacer } from '~/client/ui/components/Spacer'

import { Logo } from '~/client/components/Logo'
import { NavButton } from '~/client/components/NavButton'
import { Section } from '~/client/components/Section/Section'
import { PhoneButton } from '~/client/components/buttons/PhoneButton'
import { SupportButton } from '~/client/components/buttons/SupportButton'

import { AppNav } from './AppNav'

const AppHeader = ({ className, ...props }: StyleProps) => (
	<Section
		{...props}
		as="header"
		className={clsx('flex flex-row items-center !py-4')}>
		<Logo />
		<Spacer full />
		<AppNav className="hidden lg:block" />
		<Spacer full />
		<Spacer full />

		<PhoneButton
			withText
			withButton
		/>
		<Spacer x={10} />
		<SupportButton className="ml-6 hidden lg:block" />
		<Spacer x={10} />
		<NavButton />
	</Section>
)

export { AppHeader }
