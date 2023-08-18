import { Big } from 'big.js';
import { Interpreter } from '../../../../Interpreter';
import { Token } from '../../../Token';
import { AbstractConverter } from '../../converters/AbstractConverter';
import { AbstractAggregateHandler } from './AbstractAggregateHandler';
/**
 * Абстрактный класс обработчика функции поиска индекса элемента.
 * @extends AbstractAggregateHandler
 * @class
 */
export declare abstract class AbstractIndexOfHandler extends AbstractAggregateHandler {
    constructor(interpreter: Interpreter);
    /**
     * Вычисляет значения аргументов вызова агрегатной функции (массив - вычисляется, имена переменных - выделяются из
     * входного массива, выражение - остается без изменений).
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {java.lang.Object[]} результат вычисления значений аргументов вызова агрегатной функции.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    getArguments(token: Token, iContext: Array<any>): any[];
    /**
     * Возвращает название функции.
     *
     * @return {string} название функции.
     */
    abstract getFunctionName(): string;
    /**
     * Возвращает значение числового аргумента.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {Big} значение строкового аргумента.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @private
     */
    getNumberArgumentValue(token: Token, iContext: Array<any>): Big;
    /**
     * Проверяет доступность операции приведения к числу относительно типа аргумента и возвращает соответствующий
     * конвертер аргумента.
     *
     * @param {string} type тип аргумента.
     *
     * @return {AbstractConverter} конвертер аргумента, если он доступен, {@code false} если конвертер недоступен.
     * @private
     */
    getNumberConverter(type: string): AbstractConverter<any, any>;
    /**
     * Возвращает значение строкового аргумента.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     * @param {number} index    индекс строкового аргумента.
     *
     * @return {string} значение строкового аргумента.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @private
     */
    getStringArgumentValue(token: Token, iContext: Array<any>, index: number): string;
    /**
     * Проверяет доступность операции приведения к строке относительно типа аргумента и возвращает соответствующий
     * конвертер аргумента.
     *
     * @param {string} type тип аргумента.
     *
     * @return {AbstractConverter} конвертер аргумента, если он доступен, {@code false} если конвертер недоступен.
     * @private
     */
    getStringConverter(type: string): AbstractConverter<any, any>;
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. функции данной группы могут вернуть только число.
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
export declare namespace AbstractIndexOfHandler {
    /**
     * Абстрактный класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * <p>
     * В связи со спецификой работы функций indexOf и lastIndexOf в качестве первого аргумента обрабатывает только
     * массив.
     * @extends AbstractAggregateHandler.AbstractAggregateHandleRunner
     * @class
     */
    abstract class AbstractIndexOfHandleRunner extends AbstractAggregateHandler.AbstractAggregateHandleRunner {
        __parent: any;
        constructor(__parent: any, args: any[], iContext: Array<any>);
        /**
         * Возвращает начальное значение переменной цикла в {@link #run()}.
         *
         * @return {number} начальное значение переменной цикла в {@link #run()}.
         */
        abstract getInitialValueOfLoopVariable(): number;
        /**
         * Возвращает следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {number} следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         */
        abstract getNextValueOfLoopVariable(i: number): number;
        /**
         * Вычисляет значение функции на текущей итерации.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {number} значение функции на текущей итерации.
         *
         * @throws ValidationException в случае обнаружения ошибки в данных токена.
         * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
         */
        runIteration(i: number): number;
        /**
         * Проверяет, что цикл в {@link #run()} должен быть продолжен.
         *
         * @param {number} i      текущее значение переменной цикла в {@link #run()}.
         * @param {number} result текущее значение результата агрегации.
         *
         * @return {boolean} {@code true} в случае необходимости продолжения цикла в {@link #run()}, {@code false} иначе.
         */
        abstract shouldContinueLoop(i: number, result: number): boolean;
        /**
         * Возвращает начальное значение результата агрегации.
         *
         * @return {number} начальное значение результата агрегации.
         */
        getInitialValueOfResult(): number;
        /**
         * Выполняет вычисление значения функции.
         *
         * @return {number} значение функции.
         *
         * @throws ValidationException в случае обнаружения ошибки в данных токена.
         * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
         */
        run(): number;
    }
}
