import { Interpreter } from '../../Interpreter';
import { InterpreterToken } from '../InterpreterToken';
import { Token } from '../Token';
/**
 * Интерфейс обработчика поля токена.
 * @class
 */
export declare abstract class AbstractTokenProcessor {
    /**
     * Экземпляр интерпретатора, связанный с данным обработчиком поля токена.
     */
    interpreter: Interpreter;
    constructor(interpreter: Interpreter);
    /**
     * Интерпретирует токен.
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
     * @throws ValidationException в случае обнаружения ошибки в данных токенов.
     */
    abstract process(token: Token, iContext: Array<any>): InterpreterToken;
    /**
     * Проверяет токен.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    abstract validate(token: Token): any;
}
