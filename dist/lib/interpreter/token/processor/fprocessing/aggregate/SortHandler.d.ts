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
export declare class SortHandler extends AbstractAggregateHandler {
    /**
     * Сравнимые простые типы.
     */
    static AVAILABLE_SIMPLE_TYPES: Array<string>;
    static AVAILABLE_SIMPLE_TYPES_$LI$(): Array<string>;
    /**
     * Сортировка по возрастанию.
     */
    static ORDER_ASC: string;
    /**
     * Сортировка по убыванию.
     */
    static ORDER_DESC: string;
    /**
     * Компараторы простых сравнимых типов.
     */
    static AVAILABLE_COMPARATORS: any;
    static AVAILABLE_COMPARATORS_$LI$(): any;
    constructor(interpreter: Interpreter);
    /**
     * Инициализирует матрицу доступных компараторов простых типов.
     *
     * @return {*} матрица доступных компараторов простых типов.
     * @private
     */
    static initAvailableComparators(): any;
    /**
     * Инициализирует массив доступных простых типов для сортировки.
     *
     * @return {string[]} массив доступных простых типов для сортировки.
     * @private
     */
    static initAvailableSimpleTypes(): Array<string>;
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
export declare namespace SortHandler {
    /**
     * Компаратор даты по возрастанию.
     * @class
     */
    class DatetimeAscComparator {
        /**
         * Serial version UID.
         */
        static serialVersionUID: number;
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        compare(o1: any, o2: any): number;
        constructor();
    }
    /**
     * Компаратор даты по убыванию.
     * @class
     */
    class DatetimeDescComparator {
        /**
         * Serial version UID.
         */
        static serialVersionUID: number;
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        compare(o1: any, o2: any): number;
        constructor();
    }
    /**
     * Компаратор на основе вычисляемого интерпретатором выражения.
     * @class
     */
    class ExpressionComparator {
        /**
         * Serial version UID.
         */
        static serialVersionUID: number;
        /**
         * Элемент внутреннего контекста, соответствующий текущему вызову агрегатной функции.
         */
        aggregateCallContext: any;
        /**
         * Выражение-компаратор.
         */
        expression: Token;
        /**
         * Внутренний контекст.
         */
        iContext: Array<any>;
        /**
         * Интерпретатор.
         */
        interpreter: Interpreter;
        /**
         * Имя контекстной переменной левого операнда сравнения.
         */
        leftName: string;
        /**
         * Имя контекстной переменной правого операнда сравнения.
         */
        rightName: string;
        constructor(interpreter: Interpreter, iContext: Array<any>, leftName: string, rightName: string, expression: Token);
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        compare(o1: any, o2: any): number;
    }
    /**
     * Компаратор числа по возрастанию.
     * @class
     */
    class NumberAscComparator {
        /**
         * Serial version UID.
         */
        static serialVersionUID: number;
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        compare(o1: any, o2: any): number;
        constructor();
    }
    /**
     * Компаратор числа по убыванию.
     * @class
     */
    class NumberDescComparator {
        /**
         * Serial version UID.
         */
        static serialVersionUID: number;
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        compare(o1: any, o2: any): number;
        constructor();
    }
    /**
     * Компаратор строки по возрастанию.
     * @class
     */
    class StringAscComparator {
        /**
         * Serial version UID.
         */
        static serialVersionUID: number;
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        compare(o1: any, o2: any): number;
        constructor();
    }
    /**
     * Компаратор строки по убыванию.
     * @class
     */
    class StringDescComparator {
        /**
         * Serial version UID.
         */
        static serialVersionUID: number;
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        compare(o1: any, o2: any): number;
        constructor();
    }
}
