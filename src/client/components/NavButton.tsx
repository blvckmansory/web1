'use client'

import { APP_NAV_CONFIG } from '~/shared/config/nav'

import { CrossIcon } from '~/client/ui/(icons)'
import { Spacer } from '~/client/ui/components/Spacer'
import { Button } from '~/client/ui/components/Button'
import { NavLink } from '~/client/ui/components/NavLink'
import { useToggle } from '~/client/ui/(hooks)/useToggle'
import { AbsoluteImage } from '~/client/ui/components/Image'

import { BurgerButton } from '~/client/components/buttons/BurgerButton'
import { SupportButton } from '~/client/components/buttons/SupportButton'
import {
	AdaptiveDialog,
	AdaptiveDialogBody,
	AdaptiveDialogHeader,
} from '~/client/components/AdaptiveDialog'

import { BluredEllipse } from './BluredEllipse'

const NavButton = () => {
	const [open, { set, close, toggle }] = useToggle()
	return (
		<>
			<BurgerButton onClick={toggle} />
			<AdaptiveDialog
				open={open}
				onChange={set}
				position="right"
				className="lg:min-w-[600px]">
				<AdaptiveDialogHeader>
					<SupportButton onClick={close} />
					<Spacer full />
					<Button
						onClick={close}
						color="secondary"
						iconLeft={<CrossIcon />}
					/>
				</AdaptiveDialogHeader>
				<AdaptiveDialogBody
					as="ul"
					className="flex flex-col justify-center [&>*]:z-10">
					<BluredEllipse
						size={400}
						className="opacity-0 md:opacity-40 -right-1/2 top-1/4"
					/>
					<AbsoluteImage
						alt=""
						src="/assets/potato-5.svg"
						className="top-[20%] right-0 h-40"
					/>

					{APP_NAV_CONFIG.options.map((link, idx) => (
						<NavLink
							href={link.href}
							onClick={close}
							className="w-full py-3 text-2xl"
							key={`${link.href.toString()} ${idx}`}>
							{link.name}
						</NavLink>
					))}
				</AdaptiveDialogBody>
			</AdaptiveDialog>
		</>
	)
}

export { NavButton }
