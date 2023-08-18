import { Interpreter } from '../../../../Interpreter';
import { InterpreterToken } from '../../../InterpreterToken';
import { Token } from '../../../Token';
import { AbstractTokenHandler } from '../../AbstractTokenHandler';
import { AbstractConverter } from '../../converters/AbstractConverter';
/**
 * Абстрактный класс обработчика токена встроенной функции приведения типа.
 * @extends AbstractTokenHandler
 * @class
 */
export declare abstract class AbstractTypeCastHandler extends AbstractTokenHandler {
    /**
     * Тип значения, соответствующий встроенной функции приведения типа.
     */
    type: string;
    constructor(interpreter: Interpreter, type: string);
    /**
     * Проверяет доступность операции относительно типа аргумента и возвращает соответствующий конвертер аргумента.
     *
     * @param {string} type тип аргумента.
     *
     * @return {AbstractConverter} конвертер аргумента, если он доступен, {@code false} если конвертер недоступен.
     */
    abstract getConverter(type: string): AbstractConverter<any, any>;
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
