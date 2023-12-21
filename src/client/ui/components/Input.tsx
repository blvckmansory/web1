'use client'

import { tv, type VariantProps } from 'tailwind-variants'
import { forwardRef, memo, type CSSProperties } from 'react'

import type { ArrowFunction, MergeWithHTMLProps, ReactChildren } from '~/lib/types'

type InputProps = MergeWithHTMLProps<
	'input',
	InputVariants & {
		style?: never
		className?: never

		iconLeft?: ReactChildren
		iconRight?: ReactChildren

		styles?: {
			[key in InputSlots]?: CSSProperties
		}
		classNames?: {
			[key in InputSlots]?: string
		}

		value?: string
		defaultValue?: string
		onChange?: ArrowFunction<[string | undefined]>
	}
>

const Input = memo(
	forwardRef<HTMLInputElement, InputProps>(
		(
			{
				styles,
				onChange,
				iconLeft,
				iconRight,
				classNames,
				full = false,
				size = 'md',
				...props
			},
			ref,
		) => {
			const { container, icon, input } = inputStyles({ size, full })
			return (
				<div className={container({ className: classNames?.container })}>
					{iconLeft ? (
						<span className={icon({ className: classNames?.icon })}>{iconLeft}</span>
					) : null}
					<input
						{...props}
						type="text"
						onChange={(e) => onChange?.(e.currentTarget.value)}
						className={input({ className: classNames?.input })}
					/>
					{iconRight ? (
						<span className={icon({ className: classNames?.icon })}>{iconRight}</span>
					) : null}
				</div>
			)
		},
	),
)

const inputStyles = tv({
	slots: {
		container: [
			'relative px-4',
			'flex items-center gap-2',
			'bg-card border-px border-muted rounded-md  transition-all',
			'focus-within:border-black',
		],
		icon: 'flex-none',
		input: 'appearance-none bg-transparent w-full h-full text-base font-medium text-black focus:outline-none focus:border-none focus:shadow-none',
	},
	variants: {
		size: {
			xs: { container: 'max-w-[200px] h-8' },
			sm: { container: 'max-w-[300px] h-10' },
			md: { container: 'max-w-[400px] h-12' },
			lg: { container: 'max-w-[500px] h-14' },
			xl: { container: 'max-w-[600px] h-16' },
		},

		full: {
			true: { container: 'max-w-full w-full' },
			false: { container: '' },
		},
	},
	defaultVariants: {
		size: 'md',
		full: false,
	},
})

type InputVariants = VariantProps<typeof inputStyles>
type InputSlots = keyof (typeof inputStyles)['slots']

export { Input }
export type { InputProps }
