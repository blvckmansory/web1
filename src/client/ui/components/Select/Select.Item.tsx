'use client'

import { tv } from 'tailwind-variants'
import { memo, forwardRef } from 'react'

import type { ReactChildren, MergeWithHTMLProps } from '~/lib/types'

import type { Item } from './types'
import { useSelectContext } from './context'

type SelectItemProps = MergeWithHTMLProps<
	'button',
	Item & {
		children?: never

		iconLeft?: ReactChildren
		iconRight?: ReactChildren
	}
>

const SelectItem = memo(
	forwardRef<HTMLButtonElement, SelectItemProps>(
		({ id, name, onClick, iconLeft, iconRight, className, ...props }, ref) => {
			const { selectedItem, setSelectedItem } = useSelectContext()

			const active = id === selectedItem?.id

			const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
				setSelectedItem?.({ id, name })
				onClick?.(event)
			}

			return (
				<button
					ref={ref}
					{...props}
					onClick={handleClick}
					className={selectItemStyles({ active, className })}>
					{name}
				</button>
			)
		},
	),
)

const selectItemStyles = tv({
	base: 'rounded-none h-12 w-full border-none flex items-center px-4 text-base font-medium text-black',
	variants: {
		active: {
			true: 'bg-gray-400',
			false: 'bg-transparent',
		},
	},
	defaultVariants: {
		active: false,
	},
})

export { SelectItem }
export type { SelectItemProps }
