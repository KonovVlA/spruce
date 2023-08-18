import { Big } from 'big.js';
import { Interpreter } from '../../../../Interpreter';
import { InterpreterToken } from '../../../InterpreterToken';
import { Token } from '../../../Token';
import { AbstractStringHandler } from './AbstractStringHandler';
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractStringHandler
 */
export declare class SubstrHandler extends AbstractStringHandler {
    constructor(interpreter: Interpreter);
    /**
     * Возвращает значение числового аргумента.
     *
     * @param {Token} token    токен.
     * @param {number} index    индекс числового аргумента.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {Big} значение числового аргумента.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @private
     */
    getNumberArgumentValue(token: Token, index: number, iContext: Array<any>): Big;
    /**
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат обработки токена.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    handle(token: Token, iContext: Array<any>): InterpreterToken;
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    validate(token: Token): void;
}
