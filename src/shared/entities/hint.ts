enum HintType {
	HINT = 'HINT',
	INSTRUCTION = 'INSTRUCTION',
	FRIENDSHIP_RULE = 'FRIENDSHIP_RULE',
}

type Hint = {
	id: string | number

	hintType: HintType

	title: string
	content: string

	videoURL?: string | null | undefined
}

export { HintType }
export type { Hint }
