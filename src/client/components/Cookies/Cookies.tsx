'use client'

import { useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { useCookie } from '~/client/hooks/useCookie'
import { TRANSTION_TRANSLATES } from '~/client/ui/(utils)/framer-motion'

import { CookiesBanner } from './Cookies.Banner'

type CookiesProps = StyleProps & {
	hide?: boolean
}

const Cookies = ({ style, className, hide = false }: CookiesProps) => {
	const [agreed, setAgreed] = useCookie<boolean>(COOKIES_AGREED_KEY)

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
						left: SCREEN_OFFSET,
						right: SCREEN_OFFSET,
						paddingBottom: SCREEN_OFFSET,
					}}
					className={clsx(
						'z-50 fixed bottom-0 md:bottom-5 mx-auto max-w-5xl h-fit',
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
