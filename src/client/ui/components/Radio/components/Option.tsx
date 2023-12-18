'use client'

import { memo, forwardRef } from 'react'

import { clsx } from '~/lib/clsx'
import type { ReactChildren, ArrowFunction, MergeWithHTMLProps } from '~/lib/types'

import { VisuallyHidden } from '../../VisuallyHidden'

import { useRadioContext, type RadioConfig } from '../context'

type RadioOptionChildren = ArrowFunction<
	[RadioConfig & { checked: boolean; disabled: boolean }],
	ReactChildren
>

type RadioOptionProps = MergeWithHTMLProps<
	'div',
	{
		value: string
		disabled?: boolean
		children: RadioOptionChildren
	}
>

const RadioOption = memo(
	forwardRef<HTMLInputElement, RadioOptionProps>(
		({ value, children, className, disabled = false, ...props }, ref) => {
			const ctx = useRadioContext()

			const checked = ctx.selectedValue === value

			return (
				<label>
					<VisuallyHidden>
						<input
							ref={ref}
							id={value}
							name={ctx.id}
							type="radio"
							value={value}
							checked={checked}
							disabled={disabled}
							onChange={() => ctx.setSelectedValue?.(value)}
						/>
					</VisuallyHidden>
					<div
						{...props}
						className={clsx('cursor-pointer', className)}
						onClick={() => ctx.setSelectedValue?.(value)}>
						{children({ checked, disabled, ...ctx })}
					</div>
				</label>
			)
		},
	),
)

export { RadioOption }
export type { RadioOptionProps }
