import { tv, type VariantProps } from 'tailwind-variants'

const toggleVariants = tv({
	slots: {
		container:
			'relative w-max h-fit flex flex-row items-center gap-x-3 text-md font-normal cursor-pointer transition-all',
	},
	variants: {
		disabled: {
			true: { container: 'opacity-50' },
		},
		clickable: {
			true: { container: 'cursor-pointer' },
			false: { container: 'cursor-not-allowed' },
		},
	},
	defaultVariants: {
		disabled: false,
		clickable: false,
	},
})

const switchVariants = tv({
	extend: toggleVariants,
	slots: {
		thumb: 'flex-none w-14 h-8 p-[3px] flex border-content !rounded-full shadow-brand transition-colors',
		circle: 'h-full aspect-square border-content rounded-full transition-colors',
	},
	variants: {
		checked: {
			true: {
				thumb: 'justify-end bg-primary',
				circle: 'bg-white',
			},
			false: {
				thumb: 'justify-start bg-white',
				circle: 'bg-black',
			},
		},
	},
	defaultVariants: {
		checked: false,
	},
})

const checkboxVariants = tv({
	extend: toggleVariants,
	slots: {
		icon: 'flex-none w-7 aspect-square flex-center border-content !rounded-sm shadow-brand text-black transition-all',
	},
	variants: {
		checked: {
			true: {
				icon: 'bg-primary',
			},
			false: {
				icon: 'bg-transparent',
			},
		},
	},
	defaultVariants: {
		checked: false,
	},
})

type SwitchVariants = VariantProps<typeof switchVariants>
type CheckboxVariant = VariantProps<typeof checkboxVariants>

export { switchVariants, checkboxVariants }
export type { SwitchVariants, CheckboxVariant }
