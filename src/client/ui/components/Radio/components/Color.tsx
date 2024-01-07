'use client'

import { memo, forwardRef } from 'react'

import { clsx } from '~/lib/clsx'

import { CheckIcon } from '../../../(icons)'

import { RadioOption, type RadioOptionProps } from './Option'

type RadioColorProps = Omit<RadioOptionProps, 'children'>

const RadioColor = memo(
	forwardRef<HTMLInputElement, RadioColorProps>(({ value, disabled, className }, ref) => (
		<RadioOption
			ref={ref}
			value={value}
			disabled={disabled}
			style={{ backgroundColor: value }}
			className={clsx(
				'aspect-square rounded-full w-9 flex-center',
				// 'outline-2 outline-offset-1 outline-black outline',
				className,
			)}>
			{({ checked }) => (
				<span
					ref={ref}
					className={clsx(
						'rounded-full p-[3px] bg-white transition-all',
						checked ? 'bg-white' : 'bg-transparent',
						className,
					)}>
					<CheckIcon
						size="0.5em"
						checked={checked}
					/>
				</span>
			)}
		</RadioOption>
	)),
)

export { RadioColor }
export type { RadioColorProps }
