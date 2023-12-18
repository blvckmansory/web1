import { tv } from 'tailwind-variants'

export default tv({
	slots: {
		page: '!pb-20 items-center gap-7 md:gap-10 [&>*]:w-full [&>*]:max-w-3xl',
		list: 'flex flex-col gap-y-4',
	},
})()
