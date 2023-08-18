import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractTokenProcessor } from '../AbstractTokenProcessor';
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком поля токена.
 * @param {*} context     контекст скрипта.
 * @class
 * @extends AbstractTokenProcessor
 */
export declare class TProcessor extends AbstractTokenProcessor {
    /**
     * Таблица обработчиков значений поля {@link Token#t}.
     */
    handlers: any;
    constructor(interpreter: Interpreter, context: any);
    /**
     * Обновляет значение переменной контекста скрипта.
     *
     * @param {string} path  путь в контексте к обновляемому (устанавливаемому) полю.
     * @param {*} value значение переменной.
     *
     * @throws ContextPathException в случае ошибки формирования контекста.
     */
    updateContextVariable(path: string, value: any): void;
    /**
     * Инициализирует {@link #handlers}.
     *
     * @param {*} context контекст скрипта.
     * @private
     */
    initHandlers(context: any): void;
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
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
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
