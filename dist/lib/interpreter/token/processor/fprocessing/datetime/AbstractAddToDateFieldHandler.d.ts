import { Interpreter } from '../../../../Interpreter';
import { Token } from '../../../Token';
import { AbstractTwoArgsDatetimeHandler } from './AbstractTwoArgsDatetimeHandler';
/**
 * Абстрактный класс обработчика функции работы с датой-временем с двумя аргументами (первый - дата, второй - целое
 * число, для инкрементации данных даты).
 * @extends AbstractTwoArgsDatetimeHandler
 * @class
 */
export declare abstract class AbstractAddToDateFieldHandler extends AbstractTwoArgsDatetimeHandler {
    constructor(interpreter: Interpreter);
    /**
     * Возвращает значение аргумента даты.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {Date} значение числового аргумента.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    getDateArgumentValue(token: Token, iContext: Array<any>): Date;
    /**
     * Возвращает значение числового аргумента.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {number} значение числового аргумента.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    getNumberArgumentValue(token: Token, iContext: Array<any>): number;
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. возвращающие значение функций данной группы может быть только датой.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    isReturnTypeLooksLikeBoolean(token: Token): boolean;
}
