'use client'

import { memo, forwardRef } from 'react'

import { clsx } from '~/lib/clsx'

import { CheckIcon } from '../../../(icons)'

import { RadioOption, type RadioOptionProps } from './Option'

type RadioColorProps = Omit<RadioOptionProps, 'children'> & {
	src?: string
	color: string
}

const RadioColor = memo(
	forwardRef<HTMLInputElement, RadioColorProps>(
		({ src, color, value, disabled, className }, ref) => (
			<RadioOption
				ref={ref}
				value={value}
				disabled={disabled}
				style={{
					backgroundColor: !src ? color : undefined,
					backgroundImage: src ? `url(${src})` : undefined,
				}}
				className={clsx(
					'aspect-square rounded-full w-9 flex-center object-cover bg-center',
					'outline-[1.5px] outline-offset-[3px] outline-divider outline',
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
		),
	),
)

export { RadioColor }
export type { RadioColorProps }
