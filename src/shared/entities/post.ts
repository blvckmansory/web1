import type { StrapiSchema } from '~/lib/strapi'

import type { Media } from './image'

type Post = StrapiSchema<{
	title: string
	content: string
	description: string

	cover: Media

	createdAt: string
	updatedAt: string
	publishedAt: string
}>

type PostId = Pick<Post, 'id'>

type PostPreview = Pick<Post, 'id' | 'title' | 'description' | 'cover' | 'publishedAt'>

type PostMetadata = Pick<Post, 'id' | 'title' | 'description' | 'cover' | 'publishedAt'>

export type { Post, PostId, PostPreview, PostMetadata }
