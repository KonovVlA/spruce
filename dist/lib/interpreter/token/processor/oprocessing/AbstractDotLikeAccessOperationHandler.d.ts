import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractConverter } from '../converters/AbstractConverter';
import { AbstractBinaryOperationTokenHandler } from './AbstractBinaryOperationTokenHandler';
/**
 * Класс обработчика операций доступа к полю объекта по идентификатору ('.' или '?').
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
export declare abstract class AbstractDotLikeAccessOperationHandler extends AbstractBinaryOperationTokenHandler {
    constructor(interpreter: Interpreter, operation: string);
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
     * @return {boolean} {@code true}, т.к. результатом взятия поля объекта может быть значение произвольного типа.
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
