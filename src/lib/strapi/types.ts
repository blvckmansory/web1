type StrapiApiSchema<P = {}> = {
	id: number
	attributes: P
}

type Populate<S, IsArray extends Boolean = false> = {
	data: IsArray extends true ? S[] : S
	meta: IsArray extends true
		? {
				pagination: {
					start: number
					limit: number
					end: number
					total: number
				}
		  }
		: undefined
}

export type { Populate, StrapiApiSchema }
