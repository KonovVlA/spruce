import { isEqual } from 'lodash';

import { IToken as Token, fromTypedToJS, fromJsToTyped } from 'spruce';

// FIXME: почему-то не находит файлы через короткие ссылку типо: 'spruce/lib/interpreter/token/TValues'
import { OValues } from '../../target/web/lib/interpreter/token/OValues';
import { TValues } from '../../target/web/lib/interpreter/token/TValues';

import { interpret } from '../helper';

import * as leftArray from 'resources/oprocessing/BinaryPlusHandlerTest/testInterpretWithLeftArrayRightArray/leftArray.json'
import * as rightArray from 'resources/oprocessing/BinaryPlusHandlerTest/testInterpretWithLeftArrayRightArray/rightArray.json'
import * as expectedResultTyped from 'resources/oprocessing/BinaryPlusHandlerTest/testInterpretWithLeftArrayRightArray/result.json'

describe('Бинарный плюс:', () => {

    function interpretBinaryPlus(leftArg, rightArg){
        return interpret(new Token(TValues.OPERATION, OValues.B_PLUS, [leftArg, rightArg]))
    }

    it('2 массива (java:testInterpretWithLeftArrayRightArray)', () => {
        // вычисление результата операции
        const result  = interpretBinaryPlus(leftArray,rightArray);

        // сравнение для типизированных JSON версий
        const resultTyped = fromJsToTyped(result);
        expect(isEqual(expectedResultTyped, resultTyped)).toBeTruthy();

        // сравнение для JS объектов
        const expectedResult = fromTypedToJS(expectedResultTyped as any);
        expect(isEqual(expectedResult, result)).toBeTruthy();

    });

});
