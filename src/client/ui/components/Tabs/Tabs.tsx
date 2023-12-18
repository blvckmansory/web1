'use client'

import { LayoutGroup } from 'framer-motion'
import { memo, forwardRef, useId } from 'react'

import { clsx } from '~/lib/clsx'
import type { ArrowFunction, MergeWithHTMLProps } from '~/lib/types'

import { useControlledValue } from '../../(hooks)/useControlledValue'

import type { Item } from './types'
import { TabsContext } from './context'

type TabsProps = MergeWithHTMLProps<
	'ul',
	Partial<{
		item: Item
		initialItem: Item

		onChange: ArrowFunction<[Item]>
	}>
>

const Tabs = memo(
	forwardRef<HTMLUListElement, TabsProps>(
		({ item, children, onChange, className, initialItem, ...props }, ref) => {
			const layoutId = useId()
			const [selectedItem, setSelectedItem] = useControlledValue<Item>({
				onChange,
				value: item,
				initialValue: initialItem,
			})

			return (
				<LayoutGroup id={layoutId}>
					<TabsContext.Provider
						value={{
							selectedItem,
							setSelectedItem,
							id: layoutId,
						}}>
						<ul
							ref={ref}
							{...props}
							className={clsx('w-max flex card !rounded-md', className)}>
							{children}
						</ul>
					</TabsContext.Provider>
				</LayoutGroup>
			)
		},
	),
)

export { Tabs }
export type { TabsProps }
