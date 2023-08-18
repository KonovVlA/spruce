import { Interpreter } from '../../../../Interpreter';
import { Token } from '../../../Token';
import { AbstractThreeArgAggregateHandler } from './AbstractThreeArgAggregateHandler';
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractThreeArgAggregateHandler
 */
export declare class FilterHandler extends AbstractThreeArgAggregateHandler {
    constructor(interpreter: Interpreter);
    /**
     * Возвращает экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     *
     * @param {java.lang.Object[]} args     аргументы вызова функции.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner} экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     */
    getThreeArgAggregateHandleRunner(args: any[], iContext: Array<any>): AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner;
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. функции данной группы не могут вернуть логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    isReturnTypeLooksLikeBoolean(token: Token): boolean;
}
export declare namespace FilterHandler {
    /**
     * Класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * @extends AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner
     * @class
     */
    class FilterHandleRunner extends AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner {
        __parent: any;
        constructor(__parent: any, args: any[], iContext: Array<any>);
        /**
         * Возвращает начальное значение результата агрегации.
         *
         * @return {*} начальное значение результата агрегации.
         */
        getInitialValueOfResult(): any;
        /**
         * Вычисляет значение функции на текущей итерации.
         *
         * @param {*} result         текущее значение результата агрегации.
         * @param {*} currentElement текущий элемент цикла.
         * @param {number} i              текущее значение переменной цикла в {@link #run()}.
         *
         * @return {*} значение функции на текущей итерации.
         *
         * @throws ValidationException в случае обнаружения ошибки в данных токена.
         * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
         */
        runIteration(result: any, currentElement: any, i: number): any;
        /**
         * Проверяет, что цикл в {@link #run()} должен быть продолжен.
         *
         * @param {number} i      текущее значение переменной цикла в {@link #run()}.
         * @param {*} result текущее значение результата агрегации.
         *
         * @return {boolean} {@code true} в случае необходимости продолжения цикла в {@link #run()}, {@code false} иначе.
         */
        shouldContinueLoop(i: number, result: any): boolean;
    }
}
