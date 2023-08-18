import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractTokenHandler } from '../AbstractTokenHandler';
/**
 * Обработчик дат.
 * @extends AbstractTokenHandler
 * @class
 */
export declare class DatetimeHandler extends AbstractTokenHandler {
    constructor(interpreter: Interpreter);
    /**
     * Поднимает исключение с сообщением о неверном значении в поле значения токена.
     *
     * @param {string} v значение в поле значения токена.
     *
     * @throws ValidationException исключение поднимается всегда.
     * @private
     */
    throwOnIncorrectDate(v: string): void;
    /**
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат обработки токена.
     */
    handle(token: Token, iContext: Array<any>): InterpreterToken;
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false}, т.к. выражение представляет собой дату.
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
