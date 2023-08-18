import { Interpreter } from '../../../../Interpreter';
import { InterpreterToken } from '../../../InterpreterToken';
import { Token } from '../../../Token';
import { AbstractMinMaxSumAvgHandler } from './AbstractMinMaxSumAvgHandler';
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractMinMaxSumAvgHandler
 */
export declare class SumHandler extends AbstractMinMaxSumAvgHandler {
    constructor(interpreter: Interpreter);
    /**
     * Возвращает доступные простые типы, доступные для использования в агрегатной функции.
     *
     * @return {string[]} доступные простые типы, доступные для использования в агрегатной функции.
     */
    getAvailableTypes(): Array<string>;
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
}
