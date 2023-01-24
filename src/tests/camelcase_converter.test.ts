import { to_camel_case } from '../core/to_camel_case';

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
		expect(to_camel_case('')).toBe('');
	});

	it('do nothing with text in camelcase format', () => {
		expect(to_camel_case('Foo')).toBe('Foo');
	});

	it('capitalize lowercase words', () => {
		expect(to_camel_case('word')).toBe('Word');
	});

	it('remove spaces between words', () => {
		expect(to_camel_case('This Cat')).toBe('ThisCat');
	});

	it('remove hyphens and underscores', () => {
		expect(to_camel_case('word-other_word')).toBe('WordOtherWord');
	});

	it('convert text into camelcase format', () => {
		expect(to_camel_case('this cat is from-other_world')).toBe('ThisCatIsFromOtherWorld');
	});
});
