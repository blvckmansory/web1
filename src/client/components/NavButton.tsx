'use client'

import { APP_NAV_CONFIG } from '~/shared/config/nav'

import { Icon } from '~/client/ui/components/Icon'
import { Spacer } from '~/client/ui/components/Spacer'
import { Button } from '~/client/ui/components/Button'
import { NavLink } from '~/client/ui/components/NavLink'
import { AbsoluteImage } from '~/client/ui/components/Image'
import { useToggle } from '~/client/ui/(hooks)/useToggle'

import { PhoneButton } from '~/client/components/buttons/PhoneButton'
import { BurgerButton } from '~/client/components/buttons/BurgerButton'
import { SupportButton } from '~/client/components/buttons/SupportButton'
import {
	AdaptiveDialog,
	AdaptiveDialogBody,
	AdaptiveDialogHeader,
	AdaptiveDialogFooter,
} from '~/client/components/AdaptiveDialog'

import { SocialMediaGroup } from '~/client/components/SocialMediaGroup'

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
					<PhoneButton
						withText
						withButton
					/>
					<Spacer
						full
						x={20}
					/>
					<SupportButton />
					<Spacer x={20} />
					<Button
						onClick={close}
						color="secondary"
						iconLeft={<Icon name="x" />}
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
							{...link}
							onClick={close}
							className="w-full py-3 text-2xl"
							key={`${link.href.toString()} ${idx}`}
						/>
					))}
				</AdaptiveDialogBody>
				<AdaptiveDialogFooter>
					<SocialMediaGroup />
				</AdaptiveDialogFooter>
			</AdaptiveDialog>
		</>
	)
}

export { NavButton }
