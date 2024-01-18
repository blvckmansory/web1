import { clsx } from '~/lib/clsx'
import type { ReactChildren, StyleProps } from '~/lib/types'

import { APP_NAV_CONFIG, CONTACT_NAV_CONFIG, type NavConfig } from '~/shared/config/nav'

import { fetchDocs } from '~/server/doc'

import { Text, Spacer, Divider, NavLink, Collapse, Responsive } from '~/client/ui/components'

import { Logo } from '~/client/components/Logo'
import { Section } from '~/client/components/Section/Section'
import { CardOptions } from '~/client/components/CardOptions'
import { PhoneText } from '~/client/components/buttons/PhoneButton'
import { SocialMediaGroup } from '~/client/components/SocialMediaGroup'

const AppFooter = async ({ className, ...props }: StyleProps) => {
	const { data: docs } = await fetchDocs()

	return (
		<div className="w-full p-[3px] bg-black">
			<Section
				{...props}
				as="footer"
				className={clsx('gap-4 lg:grid lg:grid-cols-12 lg:gap-8 ', className)}>
				<Logo className="lg:col-span-2 w-max h-fit max-lg:mb-4" />

				<FooterNavGrid
					title="Прочее"
					options={docs}
					className="lg:col-span-4"
				/>

				<FooterNavGrid
					{...APP_NAV_CONFIG}
					className="lg:col-span-3"
				/>

				<FooterNavGrid
					{...CONTACT_NAV_CONFIG}
					className="lg:col-span-3">
					<Spacer
						full
						y={32}
					/>
					<PhoneText />
					<Spacer y={16} />
					<SocialMediaGroup />
				</FooterNavGrid>

				<article className="lg:col-span-12">
					<Divider className="my-5 lg:mt-10" />
					<CardOptions />
				</article>
			</Section>
		</div>
	)
}

type FooterNavProps = StyleProps &
	NavConfig & {
		children?: ReactChildren
	}

const FooterNavGrid = ({ title, options, children, className, ...props }: FooterNavProps) => (
	<article
		{...props}
		className={clsx('flex flex-col', className)}>
		<Responsive
			mobile={
				<Collapse
					title={title}
					iconProps={{ size: 14 }}
					classNames={{
						container: 'border-0 rounded-none shadow-none',
						trigger:
							'px-0 pt-0 pb-2 border-b-px border-b-divider font-normal text-base',
						content: 'px-0 py-2 border-b-px border-b-divider',
						openButton: 'text-xs',
					}}>
					<FooterNav
						title={title}
						options={options}
					/>
				</Collapse>
			}
			desktop={
				<>
					<Text
						as="h2"
						disabled
						uppercase
						size={14}
						className="select-none">
						{title}
					</Text>
					<Spacer y={20} />
					<FooterNav
						title={title}
						options={options}
					/>
				</>
			}
		/>
		{children}
	</article>
)

const FooterNav = ({ title, options }: FooterNavProps) => (
	<nav>
		<ul className="flex flex-col">
			{options.map((link, idx) => (
				<NavLink
					key={`${title} ${link.href.toString()} ${idx}`}
					href={link.href}
					className="py-1.5 font-normal text-sm">
					{link.name}
				</NavLink>
			))}
		</ul>
	</nav>
)

export { AppFooter }
