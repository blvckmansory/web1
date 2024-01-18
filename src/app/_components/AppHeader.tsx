import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { Spacer } from '~/client/ui/components/Spacer'

import { Logo } from '~/client/components/Logo'
import { Section } from '~/client/components/Section'
import { NavButton } from '~/client/components/NavButton'

import { SupportButton } from '~/client/components/buttons/SupportButton'

import { AppNav } from './AppNav'

const AppHeader = ({ className, ...props }: StyleProps) => (
	<div className="sticky top-0 rounded-b-[1.375rem] z-10 w-full border-black border-3 bg-black">
		<Section
			{...props}
			as="header"
			className={clsx('flex flex-row items-center !py-4')}>
			<Logo />
			<Spacer full />
			<AppNav className="hidden lg:block" />
			<Spacer full />
			<Spacer full />
			<Spacer full />

			<Spacer x={10} />
			<SupportButton />
			<Spacer x={10} />
			<NavButton />
		</Section>
	</div>
)

export { AppHeader }
