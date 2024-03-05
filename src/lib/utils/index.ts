export function truncateString(str: string, maxLength: number) {
	if (str.length > maxLength) {
		return str.substring(0, maxLength - 3) + '...';
	} else {
		return str;
	}
}

export function formatDate(date: string): string {
	return new Date(date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
}
