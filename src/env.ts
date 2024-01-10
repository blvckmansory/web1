/**
 * loaded from .env
 * */

export const DOMAIN = (process.env.DOMAIN as string) || 'hello.by'
export const DOMAIN_URL = (process.env.DOMAIN_URL as string) || 'https://hello.by'
export const NODE_ENV = process.env.NODE_ENV as string
export const STRAPI_URL = (process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL) as string
export const STRAPI_API_KEY = (process.env.STRAPI_API_KEY ||
	process.env.NEXT_PUBLIC_STRAPI_API_KEY) as string

export const GOOGLE_VERIFICATION = process.env.GOOGLE_VERIFICATION
export const YANDEX_VERIFICATION = process.env.YANDEX_VERIFICATION
