import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractConverter } from '../converters/AbstractConverter';
import { AbstractBinaryOperationTokenHandler } from './AbstractBinaryOperationTokenHandler';
/**
 * Обработчик операции бинарный минус.
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
export declare class BinaryMinusHandler extends AbstractBinaryOperationTokenHandler {
    /**
     * Матрица применимости операции относительно типов аргументов.
     */
    static AVAILABILITY_MAP: any;
    static AVAILABILITY_MAP_$LI$(): any;
    constructor(interpreter: Interpreter);
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
     * @return {boolean} {@code false}, т.к. результатом операции вычитания не может быть логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    isReturnTypeLooksLikeBoolean(token: Token): boolean;
}
