import { STRAPI_URL } from '~/env'

const getStrapiURL = (path = '') => `${STRAPI_URL}${path}`
const getStrapiMedia = (url: string) => `${getStrapiURL()}${url}`

export { getStrapiURL, getStrapiMedia }
