import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractTokenHandler } from '../AbstractTokenHandler';
import { AbstractConverter } from '../converters/AbstractConverter';
/**
 * Абстрактный класс обработчика токена унарной операции.
 * @extends AbstractTokenHandler
 * @class
 */
export declare abstract class AbstractUnaryOperationTokenHandler extends AbstractTokenHandler {
    /**
     * Полное название унарной операции.
     */
    operationName: string;
    constructor(interpreter: Interpreter, operation: string);
    /**
     * Проверяет доступность операции относительно типа аргумента и возвращает соответствующий конвертер аргумента.
     *
     * @param {InterpreterToken} token аргумент.
     *
     * @return {AbstractConverter} конвертер аргумента.
     */
    abstract getConverter(token: InterpreterToken): AbstractConverter<any, any>;
    /**
     * Возвращает операнд, приведенный по типу в соответствие с типом операции.
     *
     * @param {ru.sbrf.ufs.prodsel.elengine.token.Token[]} args     аргументы токена.
     * @param {*[]} iContext внутренний контекст интерпретатора.
     *
     * @return {InterpreterToken} операнд, приведенный по типу в соответствие с типом операции.
     *
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    getOperand(args: Token[], iContext: Array<any>): InterpreterToken;
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    validate(token: Token): void;
}
