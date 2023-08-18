import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractTokenProcessor } from '../AbstractTokenProcessor';
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком поля токена.
 * @class
 * @extends AbstractTokenProcessor
 */
export declare class FProcessor extends AbstractTokenProcessor {
    /**
     * Таблица обработчиков значений поля {@link Token#v}.
     */
    handlers: any;
    constructor(interpreter: Interpreter);
    /**
     * Проверяет, что для заданного имени функции имеется встроенный обработчик.
     *
     * @param {string} functionName имя функции.
     *
     * @return {boolean} {@code true} в случае наличия обработчика, {@code false} иначе.
     */
    hasHandler(functionName: string): boolean;
    /**
     * Инициализирует {@link #handlers}.
     * @private
     */
    initHandlers(): void;
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
    isReturnTypeLooksLikeBoolean(token: Token): boolean;
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
    process(token: Token, iContext: Array<any>): InterpreterToken;
    /**
     * Проверяет токен.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    validate(token: Token): void;
}
