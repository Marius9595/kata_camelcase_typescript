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
});
