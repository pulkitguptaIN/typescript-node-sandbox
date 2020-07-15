import { StringUtil } from '../../src/util/string-util';
describe('StringUtil Test', () => {

    const stringUtil: StringUtil = new StringUtil();

    test('testSayHello', () => {
        expect(stringUtil.sayHello('Pulkit')).toEqual('Hello Pulkit');
    });

});