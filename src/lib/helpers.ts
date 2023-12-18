const random = <T = unknown>(arr: T[]): T => arr[Math.round(Math.random() * (arr.length - 1))] as T

const formatDate = (dateString: string) => {
	const date = new Date(dateString)
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
	return date.toLocaleDateString('ru-RU', options)
}

export { random, formatDate }
