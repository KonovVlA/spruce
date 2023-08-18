import { Big } from 'big.js';
import { Interpreter } from '../../../../Interpreter';
import { Token } from '../../../Token';
import { AbstractTokenHandler } from '../../AbstractTokenHandler';
/**
 * Абстрактный класс обработчика токена встроенной функции обработки числа.
 * @extends AbstractTokenHandler
 * @class
 */
export declare abstract class AbstractNumberHandler extends AbstractTokenHandler {
    constructor(interpreter: Interpreter);
    /**
     * Возвращает значение числового аргумента.
     *
     * @param {Token} token    токен.
     * @param {number} index    индекс числового аргумента.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {Big} значение числового аргумента.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    getNumberArgumentValue(token: Token, index: number, iContext: Array<any>): Big;
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. возвращающие значение функций данной группы может быть только числом.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    isReturnTypeLooksLikeBoolean(token: Token): boolean;
}
