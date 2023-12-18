'use client'

import { motion } from 'framer-motion'
import { memo, forwardRef, useId } from 'react'

import type { MergeWithHTMLProps } from '~/lib/types'

import { useCheckbox } from '../../(hooks)/useCheckbox'
import { slideTransition } from '../../(utils)/framer-motion'

import { Text } from '../Text'

import type { ToggleBaseProps } from './types'
import { switchVariants, type SwitchVariants } from './styles'

type SwitchProps = MergeWithHTMLProps<
	'input',
	ToggleBaseProps &
		SwitchVariants &
		Partial<{
			labelLeft: string
			labelRight: string
		}>
>

const Switch = memo(
	forwardRef<HTMLInputElement, SwitchProps>(
		(
			{
				name,
				value,
				onChange,
				className,
				labelLeft,
				labelRight,
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
				readOnly,
				onChange,
				disabled,
				initialValue,
			})

			const { thumb, circle, container } = switchVariants({
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
						className="sr-only hidden"
						name={name}
						checked={checked}
						disabled={disabled}
						readOnly={readOnly}
						onChange={changeHandler}
					/>
					<Text
						as="label"
						form={id}>
						{labelLeft}
					</Text>

					<div className={thumb({ className })}>
						<motion.div
							layout
							aria-hidden="true"
							className={circle()}
							key={`switch-thumb-${id}`}
							transition={slideTransition}
						/>
					</div>

					<Text
						as="label"
						form={id}>
						{labelRight}
					</Text>
				</div>
			)
		},
	),
)

export { Switch }
export type { SwitchProps }
