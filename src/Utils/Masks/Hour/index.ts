/**
 * ## FormatHour
 * ### Convert Date to string
 * @formatPatternIncoming "yyyy-MM-ddTHH:mm:ssZ"
 * @example "2021-01-01T15:00:00Z"
 * @returns "15:00"
 */
export function FormatHour(date: Date): string {
	try {
		return new Intl.DateTimeFormat('pt-BR', {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			timeZone: 'America/Sao_Paulo',
		}).format(new Date(date));
	} catch {
		return '';
	}
}
