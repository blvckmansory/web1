'use client'

import { memo, forwardRef, useId } from 'react'

import { clsx } from '~/lib/clsx'
import type { ArrowFunction, MergeWithHTMLProps } from '~/lib/types'

import { useControlledValue } from '../../../(hooks)'

import { Label } from '../../Text'

import { RadioContext } from '../context'

type RadioGroupProps = MergeWithHTMLProps<
	'fieldset',
	Partial<{
		required: boolean

		label: string

		value: string
		initialValue: string

		onChange: ArrowFunction<[string]>
	}>
>

const RadioGroup = memo(
	forwardRef<HTMLFieldSetElement, RadioGroupProps>(
		({ id, label, value, children, onChange, className, initialValue, ...props }, ref) => {
			const internalId = useId()
			const [selectedValue, setSelectedValue] = useControlledValue({
				value,
				onChange,
				initialValue,
			})

			return (
				<RadioContext.Provider
					value={{
						selectedValue,
						setSelectedValue,
						id: id || internalId,
					}}>
					<fieldset
						id={id}
						ref={ref}
						className="space-y-1"
						defaultValue={initialValue}
						{...props}>
						<Label
							as="span"
							className="ml-1">
							{label}
						</Label>

						<div className={clsx('flex items-center gap-4', className)}>{children}</div>
					</fieldset>
				</RadioContext.Provider>
			)
		},
	),
)

export { RadioGroup }
export type { RadioGroupProps }
