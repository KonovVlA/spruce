import { Interpreter } from '../../../../Interpreter';
import { InterpreterToken } from '../../../InterpreterToken';
import { Token } from '../../../Token';
import { AbstractAggregateHandler } from './AbstractAggregateHandler';
/**
 * Абстрактный класс обработчика агрегатной функции трех аргументов (массив/строка, 2 внутренние переменные,
 * выражение).
 * @extends AbstractAggregateHandler
 * @class
 */
export declare abstract class AbstractThreeArgAggregateHandler extends AbstractAggregateHandler {
    constructor(interpreter: Interpreter);
    /**
     * Возвращает экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     *
     * @param {java.lang.Object[]} args     аргументы вызова функции.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner} экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     */
    abstract getThreeArgAggregateHandleRunner(args: any[], iContext: Array<any>): AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner;
    /**
     * Вычисляет значения аргументов вызова агрегатной функции (массив/строка - вычисляется, имена переменных -
     * выделяются из входного массива, выражение - остается без изменений).
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
export declare namespace AbstractThreeArgAggregateHandler {
    /**
     * Абстрактный класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * @extends AbstractAggregateHandler.AbstractAggregateHandleRunner
     * @class
     */
    abstract class AbstractThreeArgAggregateHandleRunner extends AbstractAggregateHandler.AbstractAggregateHandleRunner {
        __parent: any;
        constructor(__parent: any, args: any[], iContext: Array<any>);
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
        abstract runIteration(result: any, currentElement: any, i: number): any;
        /**
         * Проверяет, что цикл в {@link #run()} должен быть продолжен.
         *
         * @param {number} i      текущее значение переменной цикла в {@link #run()}.
         * @param {*} result текущее значение результата агрегации.
         *
         * @return {boolean} {@code true} в случае необходимости продолжения цикла в {@link #run()}, {@code false} иначе.
         */
        abstract shouldContinueLoop(i: number, result: any): boolean;
        /**
         * Выполняет вычисление значения функции.
         *
         * @return {*} значение функции.
         *
         * @throws ValidationException в случае обнаружения ошибки в данных токена.
         * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
         */
        run(): any;
    }
}
