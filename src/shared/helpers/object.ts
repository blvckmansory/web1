const compareObject = (obj1: Object, obj2: any): boolean => {
	const entries = Object.entries(obj1)

	const filteredEntries = entries.filter(([_, value]) => !!value)
	const res = filteredEntries.every(([key, value]) => obj2[key] === value)

	return res
}

export { compareObject }
