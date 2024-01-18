import { tv, type VariantProps } from 'tailwind-variants'

const dialogVariants = tv({
	slots: {
		root: 'fixed z-20 inset-0 flex',
		panel: 'relative flex flex-col bg-white border-[3px] border-default shadow-brand px-6 md:px-10 pt-7 pb-10 overflow-x-hidden',
		closeButton: 'absolute top-6 right-10 p-2',
	},
	variants: {
		position: {
			top: {
				root: 'flex-col',
				panel: 'w-screen max-h-fit !rounded-b-xl',
			},
			right: {
				root: 'flex-row-reverse',
				panel: 'h-screen max-w-fit !rounded-l-xl',
			},
			bottom: {
				root: 'flex-col-reverse',
				panel: 'w-screen max-h-fit !rounded-t-xl',
			},
			left: {
				root: 'flex-row',
				panel: 'h-screen max-w-fit !rounded-r-xl',
			},

			center: {
				root: 'flex-center',
				panel: 'rounded-xl',
			},
		},
	},
	defaultVariants: {
		position: 'center',
	},
})

type DialogVariants = VariantProps<typeof dialogVariants>

export { dialogVariants }
export type { DialogVariants }
