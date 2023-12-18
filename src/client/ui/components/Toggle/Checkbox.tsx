'use client'

import { memo, forwardRef, useId } from 'react'

import type { MergeWithHTMLProps } from '~/lib/types'

import { CheckIcon } from '../../(icons)'
import { useCheckbox } from '../../(hooks)/useCheckbox'

import { Text } from '../Text'

import type { ToggleBaseProps } from './types'
import { checkboxVariants, type CheckboxVariant } from './styles'

type CheckboxProps = MergeWithHTMLProps<
	'input',
	ToggleBaseProps & CheckboxVariant & { label?: string; indeterminate?: boolean }
>

const Checkbox = memo(
	forwardRef<HTMLInputElement, CheckboxProps>(
		(
			{
				name,
				label,
				value,
				onChange,
				className,
				id: externalId,
				containerClassName,
				disabled = false,
				readOnly = false,
				initialValue = false,
				...props
			},
			ref,
		) => {
			const localId = useId()
			const id = externalId || localId

			const {
				checked,
				onClick,
				clickable,
				onChange: changeHandler,
			} = useCheckbox({
				value,
				onChange,
				readOnly,
				disabled,
				initialValue,
			})

			const { icon, container } = checkboxVariants({
				checked,
				disabled,
				clickable,
			})

			return (
				<div
					onClick={onClick}
					className={container({ className: containerClassName })}>
					<input
						{...props}
						ref={ref}
						id={id}
						type="checkbox"
						name={name}
						checked={checked}
						disabled={disabled}
						readOnly={readOnly}
						onChange={changeHandler}
						className="sr-only hidden"
					/>

					<div className={icon({ className })}>
						<CheckIcon checked={checked} />
					</div>

					<Text
						as="label"
						form={id}>
						{label}
					</Text>
				</div>
			)
		},
	),
)

export { Checkbox }
export type { CheckboxProps }
