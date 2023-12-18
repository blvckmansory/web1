'use client'

import { tv } from 'tailwind-variants'
import { AnimatePresence, motion } from 'framer-motion'
import { memo, useId, useRef, type CSSProperties } from 'react'

import type { ReactChildren, ArrowFunction, MergeWithHTMLProps } from '~/lib/types'

import { useToggle } from '../(hooks)/useToggle'
import { useClickOutside } from '../(hooks)/useClickOutside'

import { TRANSITION_VARIANTS } from '../(utils)/framer-motion'

type PopoverTriggerRender = ArrowFunction<
	[{ open: boolean; set: ArrowFunction<[boolean]> }],
	ReactChildren
>

type PopoverProps = MergeWithHTMLProps<
	'div',
	{ trigger: ReactChildren | PopoverTriggerRender } & Partial<{
		open: boolean
		onChange: ArrowFunction<[boolean]>

		styles: {
			[key in PopoverStyleSlots]?: CSSProperties
		}
		classNames: {
			[key in PopoverStyleSlots]?: string
		}

		style: never
		className: never
	}>
>

const Popover = memo<PopoverProps>(
	({
		styles,
		trigger,
		onClick,
		onChange,
		children,
		classNames,
		open: externalOpen,
		...props
	}) => {
		const id = useId()
		const ref = useRef<HTMLDivElement>(null)

		const [open, { set, close, toggle }] = useToggle({ value: externalOpen, onChange })

		useClickOutside([ref], close)

		const { container, button, content } = popoverStyles({})

		return (
			<div
				ref={ref}
				style={styles?.container}
				className={container({ className: classNames?.container })}>
				<div
					onClick={toggle}
					style={styles?.button}
					className={button({ className: classNames?.button })}>
					{typeof trigger === 'function' ? trigger({ open, set }) : trigger}
				</div>

				<AnimatePresence initial={false}>
					{open ? (
						<motion.div
							key={`popover-content-${id}`}
							ref={ref}
							exit="exit"
							initial="exit"
							animate="enter"
							onClick={onClick}
							style={styles?.content}
							className={content({ className: classNames?.content })}
							variants={TRANSITION_VARIANTS.scaleFadeIn}>
							{children}
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>
		)
	},
)

type PopoverStyleSlots = 'container' | 'button' | 'content'

const popoverStyles = tv({
	slots: {
		container: 'relative  w-auto h-auto',
		button: 'w-auto h-auto',
		content:
			'absolute z-50 inset-x-0 top-[calc(100%+8px)] bg-white border-px border-muted rounded-md shadow-2xl shadow-black/10 overflow-clip',
	},
})

export { Popover }
