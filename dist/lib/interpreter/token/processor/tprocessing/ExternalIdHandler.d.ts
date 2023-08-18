import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractTokenHandler } from '../AbstractTokenHandler';
/**
 * Обработчик идентификаторов.
 * @extends AbstractTokenHandler
 * @class
 */
export declare class ExternalIdHandler extends AbstractTokenHandler {
    /**
     * Контекст скрипта.
     */
    context: any;
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
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат обработки токена.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    handle(token: Token, iContext: Array<any>): InterpreterToken;
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true}, т.к. выражение представляет собой значение контекстной переменной, которая может быть
     * любого типа.
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
