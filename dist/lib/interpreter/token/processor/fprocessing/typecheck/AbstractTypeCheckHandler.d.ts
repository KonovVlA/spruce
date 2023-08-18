import { Interpreter } from '../../../../Interpreter';
import { InterpreterToken } from '../../../InterpreterToken';
import { Token } from '../../../Token';
import { AbstractTokenHandler } from '../../AbstractTokenHandler';
/**
 * Абстрактный класс обработчика токена встроенной функции проверки типа.
 * @extends AbstractTokenHandler
 * @class
 */
export declare abstract class AbstractTypeCheckHandler extends AbstractTokenHandler {
    /**
     * Тип значения, соответствующий встроенной функции проверки типа.
     */
    type: string;
    constructor(interpreter: Interpreter, type: string);
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
     * @return {boolean} {@code true} т.к. группа функций проверки типа содержит только функции, возвращающие значение только
     * логического типа.
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
