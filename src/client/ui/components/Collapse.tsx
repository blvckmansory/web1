'use client'

import { memo, forwardRef, type CSSProperties } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'
import { motion, useWillChange, AnimatePresence } from 'framer-motion'

import type { ArrowFunction, MergeWithHTMLProps } from '~/lib/types'

import { useToggle } from '../(hooks)'
import { MinusIcon, PlusIcon } from '../(icons)'

import { TRANSITION_VARIANTS } from '../(utils)/framer-motion'

type CollapseProps = MergeWithHTMLProps<
	'article',
	CollapseVariants & {
		title: string

		open?: boolean
		initialOpen?: boolean
		onChange?: ArrowFunction<[boolean]>

		styles?: {
			[key in CollapseStyleSlots]?: CSSProperties
		}
		classNames?: {
			[key in CollapseStyleSlots]?: string
		}
	}
>

const Collapse = memo(
	forwardRef<HTMLElement, CollapseProps>(
		(
			{
				open,
				title,
				styles,
				onChange,
				children,
				className,
				classNames,
				initialOpen,
				disabled = false,
				...props
			},
			ref,
		) => {
			const willChange = useWillChange()

			const [isOpen, { toggle }] = useToggle({
				onChange,
				disabled,
				value: open,
				initialValue: open,
			})

			const { content, trigger, container, openButton } = collapseVariants({
				disabled,
				open: isOpen,
			})

			const iconProps = {
				size: 18,
			} as const

			return (
				<article
					ref={ref}
					className={container({ className: classNames?.container })}
					{...props}>
					<div
						onClick={toggle}
						className={trigger({ className: classNames?.trigger })}>
						<h6>{title}</h6>
						<span className={openButton({ className: classNames?.openButton })}>
							{isOpen ? <MinusIcon {...iconProps} /> : <PlusIcon {...iconProps} />}
						</span>
					</div>

					<AnimatePresence initial={false}>
						{isOpen ? (
							<motion.section
								key="collapse-content"
								exit="exit"
								initial="exit"
								animate="enter"
								variants={TRANSITION_VARIANTS.collapse}
								style={{ overflowY: 'hidden', willChange }}>
								<div className={content({ className: classNames?.content })}>
									{children}
								</div>
							</motion.section>
						) : null}
					</AnimatePresence>
				</article>
			)
		},
	),
)

const collapseVariants = tv({
	slots: {
		container: 'h-fit border-px rounded-xl bg-white transition-all',

		trigger:
			'w-full p-5 flex flex-row items-center justify-between text-left text-lg md:text-xl font-medium select-none transition-all',

		openButton: 'bg-transparent rounded-full p-1 transition-all',

		content: 'p-5 pt-1 text-sm md:text-md font-normal transition-all',
	},
	variants: {
		open: {
			true: {
				container: 'border-black shadow-brand',
				openButton: '',
			},
			false: {
				container: 'border-muted shadow-none',
				openButton: 'bg-transparent',
			},
		},

		disabled: {
			true: {
				trigger: 'opacity-50 cursor-not-allowed',
			},
			false: {
				trigger: 'cursor-pointer',
			},
		},
	},
	defaultVariants: {
		size: 'md',

		open: false,
		disabled: false,
	},
})

type CollapseStyleSlots = 'container' | 'trigger' | 'content' | 'openButton'
type CollapseVariants = VariantProps<typeof collapseVariants>

export { Collapse }
export type { CollapseProps }
