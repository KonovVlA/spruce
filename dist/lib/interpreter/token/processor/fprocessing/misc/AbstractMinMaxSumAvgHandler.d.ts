import { Interpreter } from '../../../../Interpreter';
import { Token } from '../../../Token';
import { AbstractTokenHandler } from '../../AbstractTokenHandler';
/**
 * Абстрактный класс обработчика токена встроенной агрегатной функции.
 * @extends AbstractTokenHandler
 * @class
 */
export declare abstract class AbstractMinMaxSumAvgHandler extends AbstractTokenHandler {
    /**
     * Доступные простые типы, доступные для использования в агрегатной функции avg.
     */
    static AVAILABLE_TYPES_AVG: Array<string>;
    static AVAILABLE_TYPES_AVG_$LI$(): Array<string>;
    /**
     * Доступные простые типы, доступные для использования в агрегатных функциях min и max.
     */
    static AVAILABLE_TYPES_MIN_MAX: Array<string>;
    static AVAILABLE_TYPES_MIN_MAX_$LI$(): Array<string>;
    /**
     * Доступные простые типы, доступные для использования в агрегатной функции sum.
     */
    static AVAILABLE_TYPES_SUM: Array<string>;
    static AVAILABLE_TYPES_SUM_$LI$(): Array<string>;
    constructor(interpreter: Interpreter);
    /**
     * Инициализирует доступные простые типы, доступные для использования в агрегатной функции avg.
     *
     * @return {string[]} доступные простые типы, доступные для использования в агрегатной функции avg.
     * @private
     */
    static initAvailableTypesAvg(): Array<string>;
    /**
     * Инициализирует доступные простые типы, доступные для использования в агрегатных функциях min и max.
     *
     * @return {string[]} доступные простые типы, доступные для использования в агрегатных функциях min и max.
     * @private
     */
    static initAvailableTypesMinMax(): Array<string>;
    /**
     * Инициализирует доступные простые типы, доступные для использования в агрегатной функции sum.
     *
     * @return {string[]} доступные простые типы, доступные для использования в агрегатной функции sum.
     * @private
     */
    static initAvailableTypesSum(): Array<string>;
    /**
     * Возвращает доступные простые типы, доступные для использования в агрегатной функции.
     *
     * @return {string[]} доступные простые типы, доступные для использования в агрегатной функции.
     */
    abstract getAvailableTypes(): Array<string>;
    /**
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {*[]} результат обработки токена.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    getArgs(token: Token, iContext: Array<any>): Array<any>;
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. возвращающие значение данной группы функций может быть только числом.
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
