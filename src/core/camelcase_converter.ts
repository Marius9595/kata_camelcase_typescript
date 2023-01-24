export function camelcase_converter(text: string) {
	if (text.length == 0) {
		return '';
	}

	const separator = ' ';
	text = text.replace('-', separator);
	text = text.replace('_', separator);
	const words = text.split(separator).map((word) => {
		const is_word_not_capitalized = word.toLowerCase() === word;
		const word_capitalized = word.charAt(0).toUpperCase() + word.slice(1);
		return is_word_not_capitalized ? word_capitalized : word;
	});
	return words.reduce((previousValue, currentValue) => `${previousValue}${currentValue}`, '');
}
