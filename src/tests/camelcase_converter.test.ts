import {camelcase_converter} from "../core/camelcase_converter";

/*
EXAMPLES
    - "" -> ""
    - Foo -> Foo
    - word -> Word
    - this cat -> ThisCat
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
});
