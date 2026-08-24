export const DEFAULT_DATE_SYMBOL = '$date$';

export function formatLocalDate(date: Date = new Date()): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
}

export function expandDateSymbol(
	text: string,
	symbol: string = DEFAULT_DATE_SYMBOL,
	date: Date = new Date(),
): string {
	if (!symbol || !text.includes(symbol)) {
		return text;
	}

	return text.split(symbol).join(formatLocalDate(date));
}
