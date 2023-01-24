import { camelcase_converter } from '../core/camelcase_converter';

/*
EXAMPLES
    - "" -> ""
    - Foo -> Foo
    - word -> Word
    - This Cat -> ThisCat
    - word-other_word -> WordOtherWord
    -this cat is from-other_world -> ThisCatIsFromOtherWorld
 */
describe('CamelCase converter should', () => {
	it('do nothing with empty entries', () => {
		expect(camelcase_converter('')).toBe('');
	});

	it('do nothing with text in camelcase format', () => {
		expect(camelcase_converter('Foo')).toBe('Foo');
	});

	it('capitalize lowercase words', () => {
		expect(camelcase_converter('word')).toBe('Word');
	});

	it('remove spaces between words', () => {
		expect(camelcase_converter('This Cat ')).toBe('ThisCat');
	});
});
