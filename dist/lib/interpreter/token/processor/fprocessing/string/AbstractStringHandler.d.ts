import { Interpreter } from '../../../../Interpreter';
import { Token } from '../../../Token';
import { AbstractTokenHandler } from '../../AbstractTokenHandler';
import { AbstractConverter } from '../../converters/AbstractConverter';
/**
 * Абстрактный класс обработчика токена встроенной функции обработки строки.
 * @extends AbstractTokenHandler
 * @class
 */
export declare abstract class AbstractStringHandler extends AbstractTokenHandler {
    constructor(interpreter: Interpreter);
    /**
     * Возвращает значение строкового аргумента.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {string} значение строкового аргумента.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    getStringArgumentValue(token: Token, iContext: Array<any>): string;
    /**
     * Проверяет доступность операции относительно типа аргумента и возвращает соответствующий конвертер аргумента.
     *
     * @param {string} type тип аргумента.
     *
     * @return {AbstractConverter} конвертер аргумента, если он доступен, {@code false} если конвертер недоступен.
     * @private
     */
    getConverter(type: string): AbstractConverter<any, any>;
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. возвращающие значение данной функции может быть только строкой.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    isReturnTypeLooksLikeBoolean(token: Token): boolean;
}
