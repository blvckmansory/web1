import type { CSSProperties } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

import { clsx } from '~/lib/clsx'
import type { As, MergeWithHTMLProps } from '~/lib/types'

type Props<T extends As> = VariantProps<typeof textVariants> &
	Partial<{
		as: T

		size: CSSProperties['fontSize']
		weight: CSSProperties['fontWeight']
	}>

type TextProps<T extends As = 'p'> = MergeWithHTMLProps<T, Props<T>>

const Text = <T extends As>({
	as,
	size,
	style,
	color,
	weight,
	children,
	lineClamp,
	className,
	brand = false,
	inline = false,
	disabled = false,
	uppercase = false,
	...props
}: TextProps<T>) => {
	const Comp = as || 'p'

	if (!children) {
		return null
	}

	return (
		// @ts-expect-error
		<Comp
			{...props}
			className={textVariants({
				color,
				brand,
				inline,
				disabled,
				lineClamp,
				uppercase,
				className,
			})}
			style={{ fontSize: size, fontWeight: weight, ...style }}>
			{children}
		</Comp>
	)
}

const Title = <T extends As = 'h1'>({ as = 'h1' as T, className, ...props }: TextProps<T>) => (
	// @ts-expect-error
	<Text<T>
		as={as}
		uppercase
		weight={700}
		className={clsx('text-4xl md:text-5xl', className)}
		{...props}
	/>
)

const Hint = <T extends As>(props: TextProps<T>) => (
	<Text
		color="ghost"
		{...props}
	/>
)

const Label = <T extends As = 'label'>({
	className,
	color = 'muted',
	disabled = true,
	uppercase = true,
	as = 'label' as T,
	...props
}: TextProps<T>) => (
	<Text
		{...props}
		color={color}
		disabled={disabled}
		uppercase={uppercase}
		className={clsx('text-sm mb-3', className)}
	/>
)

const textVariants = tv({
	base: 'leading-tight flex-none transition-all',
	variants: {
		color: {
			default: 'text-default',
			ghost: 'text-ghost',
			muted: 'text-muted',
		},
		lineClamp: {
			none: 'line-clamp-none',
			1: 'line-clamp-1',
			2: 'line-clamp-2',
			3: 'line-clamp-3',
			4: 'line-clamp-4',
			5: 'line-clamp-5',
		},

		brand: {
			true: 'text-brand',
		},
		inline: {
			true: 'inline-block',
		},
		uppercase: {
			true: 'uppercase',
		},
		disabled: {
			true: 'text-muted',
		},
	},
	defaultVariants: {
		lineClamp: 'none',

		brand: false,
		inline: false,
		disabled: false,
		uppercase: false,
	},
})

export { Hint, Text, Title, Label }
export type { TextProps }
