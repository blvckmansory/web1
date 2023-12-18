import { cn } from 'tailwind-variants'

type TwClass = string[] | string | null | undefined

const clsx = (...classes: TwClass[]) => cn(...classes)({ twMerge: true })

export { clsx }
