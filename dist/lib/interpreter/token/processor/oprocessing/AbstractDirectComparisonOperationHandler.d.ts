import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractConverter } from '../converters/AbstractConverter';
import { AbstractBinaryOperationTokenHandler } from './AbstractBinaryOperationTokenHandler';
/**
 * Класс обработчика операции сравнения на равно/неравно.
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
export declare abstract class AbstractDirectComparisonOperationHandler extends AbstractBinaryOperationTokenHandler {
    /**
     * Матрица применимости операции относительно типов аргументов.
     */
    static AVAILABILITY_MAP: any;
    static AVAILABILITY_MAP_$LI$(): any;
    constructor(interpreter: Interpreter, operation: string);
    /**
     * Проверяет, что два значения во внутреннем представлении интерпретатора равны. Оба значения должны быть приведены
     * к одному типу, передаваемому в качестве аргумента.
     *
     * @param {*} leftValue  левый аргумент операции сравнения.
     * @param {*} rightValue правый аргумент операции сравнения.
     * @param {string} type       тип операндов.
     *
     * @return {boolean} {@code true} в случае равенства, {@code false} иначе.
     */
    static areEqual(leftValue: any, rightValue: any, type: string): boolean;
    /**
     * Возвращает операнды, подготовленные к выполнению сравнения на равенство/неравенство.
     *
     * @param {*} leftValue  левый операнд.
     * @param {*} rightValue правый операнд.
     *
     * @return {java.lang.Object[]} массив из левого и правого операндов и типа операндов, если входные значения сравнимы, {@code null}
     * иначе.
     */
    static getComparisonOperands(leftValue: any, rightValue: any): any[];
    /**
     * Инициализирует матрицу применимости операции относительно типов аргументов.
     *
     * @return {*} матрица применимости операции относительно типов аргументов.
     * @private
     */
    static getAvailabilityMap(): any;
    /**
     * Проверяет доступность операции относительно типов аргументов и возвращает соответствующий конвертер правого
     * аргумента.
     *
     * @param {InterpreterToken} leftToken  левый аргумент.
     * @param {InterpreterToken} rightToken правый аргумент.
     *
     * @return {AbstractConverter} конвертер правого аргумента.
     */
    getConverter(leftToken: InterpreterToken, rightToken: InterpreterToken): AbstractConverter<any, any>;
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true}, т.к. результатом сравнения на равно/неравно может быть только логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    isReturnTypeLooksLikeBoolean(token: Token): boolean;
}
