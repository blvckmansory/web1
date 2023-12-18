import React, { memo, useCallback, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

type IconNames = keyof typeof dynamicIconImports

type IconProps = LucideProps & {
	children?: never
	name: IconNames
}

const Icon = memo(({ size, name, style, className, ...props }: IconProps) => {
	const loader = useCallback(
		() => (
			<div
				className={className}
				style={{
					width: size,
					height: size,
					borderRadius: typeof size === 'number' ? size / 4 : 12,
					...style,
				}}
			/>
		),
		[size],
	)

	const dynamicName = useMemo(() => dynamicIconImports[name], [name])

	const LucideIcon = useMemo(
		() =>
			dynamic(dynamicName, {
				loading: loader,
			}),
		[loader, dynamicName],
	)

	return (
		<LucideIcon
			{...props}
			size={size}
			style={style}
			className={className}
		/>
	)
})

export { Icon }
export type { IconProps, IconNames }
