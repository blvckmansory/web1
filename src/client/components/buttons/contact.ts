'use server'

import { redirect } from 'next/navigation'

const contactRedirect = (href: string) => {
	redirect(href)
}

export { contactRedirect }
