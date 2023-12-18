import { memo, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

import { clsx } from '~/lib/clsx'
import type { ReactChildren, MergeWithHTMLProps } from '~/lib/types'

type ButtonProps = MergeWithHTMLProps<
	'button',
	VariantProps<typeof buttonVariants> &
		Partial<{
			children: ReactChildren

			iconLeft: ReactChildren
			iconRight: ReactChildren
		}>
>

const Button = memo(
	forwardRef<HTMLButtonElement, ButtonProps>(
		(
			{
				icon,
				children,
				iconLeft,
				iconRight,
				className,
				size = 'md',
				color = 'primary',
				variant = 'solid',
				auto = false,
				full = false,
				readOnly = false,
				disabled = false,
				...props
			},
			ref,
		) => {
			const isIconButton = Boolean(!children && (iconLeft || iconRight))

			return (
				<button
					{...props}
					ref={ref}
					disabled={disabled}
					aria-readonly={readOnly}
					aria-disabled={disabled}
					className={clsx(
						buttonVariants({
							size,
							full,
							auto,
							color,
							variant,
							disabled,
							readOnly,
							className,
							icon: isIconButton,
						}),
					)}>
					{iconLeft}
					{children}
					{iconRight}
				</button>
			)
		},
	),
)

const buttonVariants = tv({
	base: [
		'h-11 py-2 px-4 inline-flex items-center justify-center gap-x-2 uppercase font-bold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
		'whitespace-nowrap',
	],

	variants: {
		variant: {
			solid: 'bg-opacity-100 border-content shadow-brand active:-translate-x-0.5 active:translate-y-0.5 active:shadow-none active:brightness-95',
			light: '!bg-transparent',
		},
		color: {
			primary: 'bg-primary',
			secondary: 'bg-secondary enabled:hover:bg-primary',
		},
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			md: 'text-md',
			lg: 'text-lg',
			xl: 'text-xl',
		},

		readOnly: {
			true: 'pointer-events-none',
		},
		disabled: {
			true: 'brightness-50 cursor-not-allowed',
		},

		full: { true: 'w-full', false: 'w-fit' },
		auto: { true: 'w-fit h-fit px-4 py-4' },
		icon: { true: 'aspect-square px-0 py-0' },
	},

	defaultVariants: {
		size: 'md',
		color: 'primary',
		variant: 'solid',

		full: false,
		icon: false,
		auto: false,
		readOnly: false,
		disabled: false,
	},
})

export { Button }
export type { ButtonProps }
