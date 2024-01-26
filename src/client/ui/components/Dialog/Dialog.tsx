'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { memo, forwardRef, type CSSProperties, useId } from 'react'

import type { MergeWithHTMLProps } from '~/lib/types'

import { Portal } from '../../(utils)/Portal'
import { StopPropogation } from '../../(utils)/StopPropogation'
import { TRANSITION_VARIANTS, TRANSTION_TRANSLATES } from '../../(utils)/framer-motion'

import { useDialog } from '../../(hooks)'

import { dialogVariants, type DialogVariants } from './styles'

type DialogProps = MergeWithHTMLProps<
	'div',
	DialogVariants &
		Partial<{
			open: boolean
			preventClose: boolean

			overflow: CSSProperties['overflowY']
			onChange: (val: boolean) => unknown
		}>
>

const Dialog = memo(
	forwardRef<HTMLDivElement, DialogProps>(
		(
			{
				style,
				onChange,
				children,
				className,
				open = false,
				overflow = 'scroll',
				position = 'center',
				preventClose = false,
				...props
			},
			ref,
		) => {
			const id = useId()

			const { isOpen, clickOutside } = useDialog({
				onChange,
				value: open,
				preventClose,
			})

			const { root, panel } = dialogVariants({ position })

			return (
				<Portal>
					<AnimatePresence initial={false}>
						{isOpen ? (
							<div>
								<motion.div
									key={`dialog-blackout-${id}`}
									exit="exit"
									initial="exit"
									animate="enter"
									aria-hidden="true"
									variants={TRANSITION_VARIANTS.fade}
									className="fixed inset-0 z-10 bg-black/50"
								/>
								<motion.div
									key={`dialog-content-${id}`}
									exit="exit"
									initial="exit"
									animate="enter"
									className={root()}
									onClick={clickOutside}
									variants={
										position === 'center'
											? TRANSITION_VARIANTS.translateFade
											: TRANSTION_TRANSLATES[position]
									}>
									<StopPropogation
										{...props}
										ref={ref}
										style={{ ...style, overflowY: overflow }}
										className={panel({ className })}>
										{children}
									</StopPropogation>
								</motion.div>
							</div>
						) : null}
					</AnimatePresence>
				</Portal>
			)
		},
	),
)

export { Dialog }
export type { DialogProps }
