import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractTokenHandler } from '../AbstractTokenHandler';
import { AbstractConverter } from '../converters/AbstractConverter';
/**
 * Абстрактный класс обработчика токена бинарной операции.
 * @extends AbstractTokenHandler
 * @class
 */
export declare abstract class AbstractBinaryOperationTokenHandler extends AbstractTokenHandler {
    /**
     * Полное название бинарной операции.
     */
    operationName: string;
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
    abstract getConverter(leftToken: InterpreterToken, rightToken: InterpreterToken): AbstractConverter<any, any>;
    /**
     * Возвращает правый операнд, приведенный по типу в соответствие с первым операндом и типом операции.
     *
     * @param {ru.sbrf.ufs.prodsel.elengine.token.Token[]} args     аргументы токена.
     * @param {*[]} iContext внутренний контекст интерпретатора.
     *
     * @return {ru.sbrf.ufs.prodsel.elengine.token.InterpreterToken[]} правый операнд, приведенный по типу в соответствие с первым операндом и типом операции.
     *
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    getOperands(args: Token[], iContext: Array<any>): InterpreterToken[];
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    validate(token: Token): void;
}
