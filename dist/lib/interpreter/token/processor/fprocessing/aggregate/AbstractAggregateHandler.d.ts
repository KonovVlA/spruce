import { Interpreter } from '../../../../Interpreter';
import { Token } from '../../../Token';
import { AbstractTokenHandler } from '../../AbstractTokenHandler';
/**
 * Абстрактный класс обработчика агрегатной функции.
 * @extends AbstractTokenHandler
 * @class
 */
export declare abstract class AbstractAggregateHandler extends AbstractTokenHandler {
    constructor(interpreter: Interpreter);
    /**
     * Проверяет токен внутреннего идентификатора и возвращает имя внутренней переменной.
     *
     * @param {Token} token           токен вызова агрегатной функции.
     * @param {Token} internalIdToken токен внутреннего идентификатора.
     *
     * @return {string} имя внутренней переменной из токена.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    getInternalVariableName(token: Token, internalIdToken: Token): string;
    /**
     * Проверяет токен массива внутренних идентификаторов и возвращает имена внутренних переменных.
     *
     * @param {Token} token  токен вызова агрегатной функции.
     * @param {number} number ожидаемое количество внутренних идентификаторов в массиве.
     *
     * @return {java.lang.String[]} массив имен внутренних переменных.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    getInternalVariableNames(token: Token, number: number): string[];
}
export declare namespace AbstractAggregateHandler {
    /**
     * Абстрактный класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * @class
     */
    abstract class AbstractAggregateHandleRunner {
        __parent: any;
        /**
         * Контекст текущего вызова выражения агрегации.
         */
        aggregateCallContext: any;
        /**
         * Аргументы вызова функции.
         */
        args: any[];
        /**
         * Флаг, указывающий, что 1-й аргумент - массив (в противном случае - строка).
         */
        arrayExecution: boolean;
        /**
         * Выражение агрегации.
         */
        expression: Token;
        /**
         * Внутренний контекст.
         */
        iContext: Array<any>;
        /**
         * Итерируемые данные.
         */
        iteratingData: any;
        /**
         * Название внутренней переменной выражения агрегации для доступа к элементу текущей итерации.
         */
        keyOfElement: string;
        /**
         * Название внутренней переменной выражения агрегации для доступа к индексу текущей итерации.
         */
        keyOfIndex: string;
        /**
         * Количество элементов итерируемых данных.
         */
        sz: number;
        constructor(__parent: any, args: any[], iContext: Array<any>);
        /**
         * Возвращает начальное значение результата агрегации.
         *
         * @return {*} начальное значение результата агрегации.
         */
        abstract getInitialValueOfResult(): any;
        /**
         * Возвращает элемент итерируемых данных по индексу.
         *
         * @param {number} index индекс элемента, который необходимо вернуть.
         *
         * @return {*} элемент итерируемых данных по индексу.
         */
        getIteratingDataElement(index: number): any;
        /**
         * Возвращает размер итерируемых данных.
         *
         * @return {number} размер итерируемых данных.
         */
        getIteratingDataSize(): number;
        /**
         * Выполняет вычисление значения функции.
         *
         * @return {*} значение функции.
         *
         * @throws ValidationException в случае обнаружения ошибки в данных токена.
         * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
         */
        abstract run(): any;
    }
}
