import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractConverter } from '../converters/AbstractConverter';
import { AbstractBinaryOperationTokenHandler } from './AbstractBinaryOperationTokenHandler';
/**
 * Класс обработки токена бинарной логической операции.
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
export declare abstract class AbstractBinaryLogicOperationHandler extends AbstractBinaryOperationTokenHandler {
    /**
     * Матрица применимости операции относительно типов аргументов.
     */
    static AVAILABILITY_MAP: any;
    static AVAILABILITY_MAP_$LI$(): any;
    constructor(interpreter: Interpreter, operation: string);
    /**
     * Инициализирует матрицу применимости операции относительно типов аргументов.
     *
     * @return {*} матрица применимости операции относительно типов аргументов.
     * @private
     */
    static getAvailabilityMap(): any;
    /**
     * Проверяет, что операция доступна исходя из типа левого аргумента.
     *
     * @param {InterpreterToken} leftToken левый аргумент.
     *
     * @return {boolean} {@code true} в случае доступности операции для левого аргумента.
     */
    isAvailableForLeftToken(leftToken: InterpreterToken): boolean;
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
     * @return {boolean} {@code true}, т.к. результатом логической операции может быть только логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    isReturnTypeLooksLikeBoolean(token: Token): boolean;
}
