import { Interpreter, IToken as Token, parser } from 'spruce';

import { interpret } from './helper';

describe('Тесты на невалидные входные данные:', () => {

    it('пустой токен (java:testInterpretWithNullT)', () => {
        const invalidToken = new Token(null, null, null);
        expect(() => {interpret(invalidToken)}).toThrowError('Не указан тип токена.');
    });

    it('токен с пустой строкой в типе (java:testInterpretWithEmptyT)', () => {
        const invalidToken = new Token("", null, null);
        expect(() => {interpret(invalidToken)}).toThrowError('Не указан тип токена.');
    });

    it('токен с неверным типом (java:testInterpretWithIncorrectT)', () => {
        const WRONG_TYPE = "WRONG_TYPE";
        const invalidToken = new Token(WRONG_TYPE, null, null);
        expect(() => {interpret(invalidToken)}).toThrowError(`Неправильное значение типа токена '${WRONG_TYPE}'.`);
    });

});
