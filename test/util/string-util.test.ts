import { StringUtil } from '../../src/util/string-util';

describe('StringUtil Test', () => {

    const stringUtil: StringUtil = new StringUtil();

    test('testEvalPlaceholders', () => {
        const placeholderKeyValueMap: Map<string, string> = new Map<string, string>();
        placeholderKeyValueMap.set('firstName', 'Pulkit');
        placeholderKeyValueMap.set('lastName', 'Gupta');
        placeholderKeyValueMap.set('currentCity', 'Gurgaon');
        placeholderKeyValueMap.set('currentAge', '30');
        const inputStr = 'My name is ${firstName}, ${lastName}, I live in ${currentCity} and I am ${currentAge} years old';
        // regular flow, all keys present in map thus resolving all placeholders
        expect(stringUtil.evalPlaceholders(inputStr, placeholderKeyValueMap)).toMatch('My name is Pulkit, Gupta, I live in Gurgaon and I am 30 years old');

        placeholderKeyValueMap.set('lastName', '');
        placeholderKeyValueMap.delete('currentAge');
        // partial flow, few keys are missing in map thus resolving only placeholders whose key is found
        expect(stringUtil.evalPlaceholders(inputStr, placeholderKeyValueMap)).toMatch('My name is Pulkit, , I live in Gurgaon and I am ${currentAge} years old');

        //invaid flow, input is invalid thus returning input as-is without resolving anything
        expect(stringUtil.evalPlaceholders(inputStr, new Map<string, string>())).toMatch(inputStr);
        expect(stringUtil.evalPlaceholders('', placeholderKeyValueMap)).toMatch('');
        expect(stringUtil.evalPlaceholders('This is test string', placeholderKeyValueMap)).toMatch('This is test string');
    });

});