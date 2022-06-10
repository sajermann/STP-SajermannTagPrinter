/**
 * ## formatDateAndHour
 * ### Convert Date to string
 * @formatPatternIncoming "yyyy-MM-ddTHH:mm:ssZ"
 * @example "2021-01-01T00:00:00Z"
 * @returns "01/01/2021 00:00:00"
 */
export function formatDateAndHour(date: Date): string {
	try {
		if (date.toISOString().indexOf('0001-01-01') === 0) {
			return '';
		}
		const result = new Intl.DateTimeFormat('pt-BR', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false,
			timeZone: 'America/Sao_Paulo',
		}).format(new Date(date));
		return result;
	} catch {
		return '';
	}
}

export default { formatDateAndHour };
