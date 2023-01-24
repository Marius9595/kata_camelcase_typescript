export function camelcase_converter(text: string) {
	if (text.length == 0) {
		return '';
	}
	if (text.toLowerCase() === text) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
	return text;
}
