'use client'

import { memo, forwardRef, type CSSProperties } from 'react'

import { clsx } from '~/lib/clsx'
import type { ReactChildren, ArrowFunction } from '~/lib/types'

import { ArrowIcon } from '../../(icons)'
import { useToggle, useControlledValue } from '../../(hooks)'

import { Popover } from '../Popover'
import { Input, type InputProps } from '../Input'

import type { Item } from './types'
import { SelectContext } from './context'

type SelectProps = Omit<
	InputProps,
	'value' | 'onChange' | 'defaultValue' | 'styles' | 'className' | 'style' | 'className'
> & {
	item?: Item
	initialItem?: Item

	onChange?: ArrowFunction<[Item | undefined]>

	style?: CSSProperties
	className?: string

	children: ReactChildren
}

const Select = memo(
	forwardRef<HTMLInputElement, SelectProps>(
		({ item, style, onChange, readOnly, initialItem, className, children, ...props }, ref) => {
			const [open, { set, close }] = useToggle()
			const [selectedItem, setSelectedItem] = useControlledValue<Item | undefined>({
				readOnly,
				onChange,
				value: item,
				initialValue: initialItem,
			})

			return (
				<SelectContext.Provider value={{ selectedItem, setSelectedItem }}>
					<Popover
						open={open}
						onChange={set}
						onClick={close}
						trigger={
							<Input
								ref={ref}
								full
								readOnly
								value={selectedItem?.name}
								styles={{ container: style }}
								iconRight={<ArrowIcon dir={open ? 'up' : 'down'} />}
								classNames={{
									input: 'cursor-pointer',
									container: clsx(
										'cursor-pointer',
										open ? 'border-black' : '',
										className,
									),
								}}
							/>
						}>
						{children}
					</Popover>
				</SelectContext.Provider>
			)
		},
	),
)

export { Select }
export type { SelectProps }
