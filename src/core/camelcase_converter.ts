export function camelcase_converter(text: string) {
	if (text.length == 0) {
		return '';
	}
	const words = text.split(' ').map((word) => {
		return word.toLowerCase() === word ? word.charAt(0).toUpperCase() + word.slice(1) : word;
	});
	return words.reduce((previousValue, currentValue) => `${previousValue}${currentValue}`, '');
}
