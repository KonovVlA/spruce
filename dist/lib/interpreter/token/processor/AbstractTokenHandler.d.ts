import { Interpreter } from '../../Interpreter';
import { InterpreterToken } from '../InterpreterToken';
import { Token } from '../Token';
/**
 * Интерфейс обработчика конкретного значения поля токена.
 * @class
 */
export declare abstract class AbstractTokenHandler {
    /**
     * Экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
     */
    interpreter: Interpreter;
    constructor(interpreter: Interpreter);
    /**
     * Производит интерпретацию токена.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат интерпретации токена.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    interpret(token: Token, iContext: Array<any>): InterpreterToken;
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true} если поверхностный анализ выражения допускает логический тип результата, {@code false}
     * иначе.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    abstract isReturnTypeLooksLikeBoolean(token: Token): boolean;
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
    abstract handle(token: Token, iContext: Array<any>): InterpreterToken;
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    abstract validate(token: Token): any;
}
