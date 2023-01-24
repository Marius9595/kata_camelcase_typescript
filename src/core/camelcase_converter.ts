export function camelcase_converter(text: string) {
	if (text.length == 0) {
		return '';
	}

	const separator = ' ';
	text = text.replace('-', separator);
	text = text.replace('_', separator);
	const words = text.split(separator).map((word) => word.charAt(0).toUpperCase() + word.slice(1));
	return words.join('');
}
