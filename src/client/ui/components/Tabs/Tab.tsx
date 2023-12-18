'use client'

import { tv } from 'tailwind-variants'
import { motion } from 'framer-motion'
import { memo, forwardRef, type MouseEventHandler } from 'react'

import type { ArrowFunction, MergeWithHTMLProps } from '~/lib/types'

import { slideTransition } from '../../(utils)/framer-motion'

import type { Item } from './types'
import { useTabsContext } from './context'

type TabProps = MergeWithHTMLProps<
	'button',
	Item & {
		onClick?: ArrowFunction<[Item]>
	}
>

const Tab = memo(
	forwardRef<HTMLButtonElement, TabProps>(({ id, name, onClick, className, ...props }, ref) => {
		const { id: layoutId, selectedItem, setSelectedItem } = useTabsContext()

		const active = id === selectedItem?.id

		const handleClick: MouseEventHandler = (_event) => {
			setSelectedItem?.({ id, name })
			onClick?.({ id, name })
		}

		const { container, thumb, trigger } = tabStyles()

		return (
			<div className={container()}>
				{active ? (
					<motion.span
						layout
						layoutId={layoutId}
						id={`tabs-thumb-${layoutId}`}
						className={thumb()}
						layoutDependency={false}
						transition={slideTransition}
					/>
				) : null}

				<button
					{...props}
					ref={ref}
					onClick={handleClick}
					className={trigger({ className })}>
					{name}
				</button>
			</div>
		)
	}),
)

const tabStyles = tv({
	slots: {
		container: 'relative z-0 group w-full',
		thumb: 'absolute inset-x-0 -top-px bottom-px z-0 bg-primary border-content shadow-brand',
		trigger: [
			'relative z-10 min-w-max py-3 px-6 inline-flex items-center justify-center font-medium',
			'text-base focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
		],
	},
})

export { Tab }
export type { TabProps }
