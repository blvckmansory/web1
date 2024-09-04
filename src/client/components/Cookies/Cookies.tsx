'use client'

import { useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { useCookie } from '~/client/hooks/useCookie'
import { useResponsive } from '~/client/features/responsive'
import { TRANSTION_TRANSLATES } from '~/client/ui/(utils)/framer-motion'

import { CookiesBanner } from './Cookies.Banner'

type CookiesProps = StyleProps & {
	hide?: boolean
}

const Cookies = ({ style, className, hide = false }: CookiesProps) => {
	const [agreed, setAgreed] = useCookie<boolean>(COOKIES_AGREED_KEY)
	const { isDesktop } = useResponsive(767)

	const confirm = useCallback(() => {
		setAgreed(true, {
			sameSite: 'lax',
			maxAge: ONE_YEAR_IN_MS,
		})
	}, [setAgreed])

	const show = !hide && !agreed

	return (
		<AnimatePresence initial={show}>
			{show ? (
				<motion.div
					key="cookies"
					exit="exit"
					initial="exit"
					animate="enter"
					variants={TRANSTION_TRANSLATES.bottom}
					style={{
						...style,
						paddingBottom: isDesktop ? 20 : 0,
					}}
					className={clsx(
						'z-50 fixed inset-x-0 bottom-0 mx-auto md:max-w-3xl lg:max-w-5xl h-fit',
						className,
					)}>
					<CookiesBanner
						show
						confirm={confirm}
					/>
					<div className="absolute bg-black h-6 inset-x-0 -z-10 bottom-0 md:hidden" />
				</motion.div>
			) : null}
		</AnimatePresence>
	)
}

const SCREEN_OFFSET = 0
const COOKIES_AGREED_KEY = 'cookies_agreed'
const ONE_YEAR_IN_MS = 365 * 24 * 60 * 1000 * 1000

export { Cookies }
export type { CookiesProps }
