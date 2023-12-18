/**
 * loaded from .env
 * */

export const NODE_ENV = process.env.NODE_ENV as string
export const STRAPI_URL = (process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL) as string
export const STRAPI_API_KEY = (process.env.STRAPI_API_KEY ||
	process.env.NEXT_PUBLIC_STRAPI_API_KEY) as string
