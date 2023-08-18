import { Interpreter } from '../../../../Interpreter';
import { InterpreterToken } from '../../../InterpreterToken';
import { Token } from '../../../Token';
import { AbstractAggregateHandler } from './AbstractAggregateHandler';
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractAggregateHandler
 */
export declare class ForHandler extends AbstractAggregateHandler {
    constructor(interpreter: Interpreter);
    /**
     * Вычисляет значения аргументов вызова агрегатной функции.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {java.lang.Object[]} результат вычисления значений аргументов вызова агрегатной функции.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @private
     */
    getArguments(token: Token, iContext: Array<any>): any[];
    /**
     * Вычисляет значение переменной счетчика (начальной или конечной).
     *
     * @param {Token} token        токен.
     * @param {*[]} iContext     внутренний контекст.
     * @param {Token} counterToken токен значения счетчика.
     * @param {boolean} start        флаг того, что вычисляется токен начального значения счетчика.
     *
     * @return {InterpreterToken} значение переменной счетчика (начальной или конечной).
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @private
     */
    getCounterValue(token: Token, iContext: Array<any>, counterToken: Token, start: boolean): InterpreterToken;
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
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. данная функция может вернуть только массив.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    isReturnTypeLooksLikeBoolean(token: Token): boolean;
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    validate(token: Token): void;
}
