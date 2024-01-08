const compareObject = (obj1: Object, obj2: any): boolean => {
	const entries = Object.entries(obj1)

	const filteredEntries = entries.filter(([_, value]) => !!value)
	const res = filteredEntries.every(([key, value]) => obj2[key] === value)

	return res
}

type nullable<T> = T | null

const compareBoolean = (t1: nullable<boolean>, t2: nullable<boolean>) => {
	if (t1 === null) {
		return true
	}

	return t1 === t2
}

export { compareObject, compareBoolean }
