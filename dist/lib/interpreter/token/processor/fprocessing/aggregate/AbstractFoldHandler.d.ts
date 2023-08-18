import { Interpreter } from '../../../../Interpreter';
import { InterpreterToken } from '../../../InterpreterToken';
import { Token } from '../../../Token';
import { AbstractAggregateHandler } from './AbstractAggregateHandler';
/**
 * Абстрактный класс обработчика функций foldLeft и foldRight.
 * @extends AbstractAggregateHandler
 * @class
 */
export declare abstract class AbstractFoldHandler extends AbstractAggregateHandler {
    constructor(interpreter: Interpreter);
    /**
     * Возвращает экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     *
     * @param {java.lang.Object[]} args     аргументы вызова функции.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {AbstractFoldHandler.AbstractFoldHandleRunner} экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     */
    abstract getFoldHandleRunner(args: any[], iContext: Array<any>): AbstractFoldHandler.AbstractFoldHandleRunner;
    /**
     * Вычисляет значения аргументов вызова агрегатной функции (массив/строка - вычисляется, имена переменных -
     * выделяются из входного массива, выражение - остается без изменений, начальное значение (если есть) -
     * вычисляется).
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
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true} т.к. функции данной группы могут вернуть данные произвольного типа.
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
export declare namespace AbstractFoldHandler {
    /**
     * Абстрактный класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * @extends AbstractAggregateHandler.AbstractAggregateHandleRunner
     * @class
     */
    abstract class AbstractFoldHandleRunner extends AbstractAggregateHandler.AbstractAggregateHandleRunner {
        __parent: any;
        /**
         * Название внутренней переменной выражения агрегации для доступа к результату агрегации.
         */
        keyOfResult: string;
        /**
         * Флаг, указывающий на наличие в аргументах вызова функции начального значения для агрегации.
         */
        withInitial: boolean;
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
         * Проверяет, что цикл в {@link #run()} должен быть продолжен.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {boolean} {@code true} в случае необходимости продолжения цикла в {@link #run()}, {@code false} иначе.
         */
        abstract shouldContinueLoop(i: number): boolean;
        /**
         * Вычисляет значение функции на текущей итерации.
         *
         * @param {*} currentResult текущее значение функции.
         * @param {number} i             текущее значение переменной цикла в {@link #run()}.
         *
         * @return {*} значение функции на текущей итерации.
         *
         * @throws ValidationException в случае обнаружения ошибки в данных токена.
         * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
         * @private
         */
        runIteration(currentResult: any, i: number): any;
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
