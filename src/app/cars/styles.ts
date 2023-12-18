import { tv } from 'tailwind-variants'

export default tv({
	slots: {
		container: 'flex flex-col gap-y-8 md:gap-y-12 [&>*]:z-0',
		title: 'text-3xl md:text-5xl',
	},
})()
