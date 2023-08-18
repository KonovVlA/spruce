import { InterpreterToken } from './token/InterpreterToken';
import { Token } from './token/Token';
import { FProcessor } from './token/processor/fprocessing/FProcessor';
import { OProcessor } from './token/processor/oprocessing/OProcessor';
import { TProcessor } from './token/processor/tprocessing/TProcessor';
/**
 * Конструктор.
 * <p>
 * Порождает экземпляр интерпретатора с текущим контекстом и макроопределениями.
 *
 * @param {*} context          контекст скрипта (мапинг имен переменных контекста на их значения). Допускается значение
 * {@code null}, в этом случае контекст будет считаться пустым. Полученный в данном
 * параметре контекст всегда преобразуется во внутренний формат интерпретатора вызовом
 * {@link CollectionUtils#deepCloneWithTypeConversion(Object)}.
 * @param {*} macroDefinitions макросы скрипта (мапинг имен переиспользуемых функций на их выражения в формате
 * интерпретатора). Допускается значение {@code null}, в этом случае набор макроопределений
 * будет считаться пустым.
 *
 * @throws ComputingException в случае ошибки формирования контекста.
 * @class
 */
export declare class Interpreter {
    /**
     * Обработчик поля {@link Token#v} токенов в случае значения {@link TValues#FUNCTION} поля {@link Token#v},
     * являющегося встроенной функцией.
     */
    fProcessor: FProcessor;
    /**
     * Макросы скрипта.
     */
    macroDefinitions: any;
    /**
     * Обработчик поля {@link Token#v} токенов в случае значения {@link TValues#OPERATION} поля {@link Token#v}.
     */
    oProcessor: OProcessor;
    /**
     * Обработчик поля {@link Token#t} токенов.
     */
    tProcessor: TProcessor;
    constructor(context: any, macroDefinitions: any);
    /**
     * Формирует безопасный для использования в интерпретаторе вариант контекста путем глубокого копирования исходного
     * контекста с отсечением всех данных к типам внутреннего представления интерпретатора.
     *
     * @param {*} context исходный контекст.
     *
     * @return {*} безопасный для использования в интерпретаторе вариант контекста.
     *
     * @throws ComputingException в случае ошибки формирования контекста.
     * @private
     */
    static getSafeContext(context: any): any;
    /**
     * Возвращает обработчик поля {@link Token#v} токенов в случае значения {@link TValues#FUNCTION} поля {@link
     * Token#v}, являющегося встроенной функцией.
     *
     * @return {FProcessor} обработчик поля {@link Token#v} токенов в случае значения {@link TValues#FUNCTION} поля {@link Token#v},
     * являющегося встроенной функцией.
     */
    getFProcessor(): FProcessor;
    /**
     * Возвращает макросы скрипта.
     *
     * @return {*} макросы скрипта.
     */
    getMacroDefinitions(): any;
    /**
     * Возвращает обработчик поля {@link Token#v} токенов в случае значения {@link TValues#OPERATION} поля {@link
     * Token#v}.
     *
     * @return {OProcessor} обработчик поля {@link Token#v} токенов в случае значения {@link TValues#OPERATION} поля {@link Token#v}.
     */
    getOProcessor(): OProcessor;
    /**
     * Возвращает обработчик поля {@link Token#t} токенов.
     *
     * @return {TProcessor} обработчик поля {@link Token#t} токенов.
     */
    getTProcessor(): TProcessor;
    /**
     * Вычисляет значение выражения.
     *
     * @param {Token} expression выражение.
     *
     * @return {*} значение выражения.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    interpret(expression: Token): any;
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} expression выражение.
     *
     * @return {boolean} {@code true} если поверхностный анализ выражения допускает логический тип результата, {@code false}
     * иначе.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    isReturnTypeLooksLikeBoolean(expression: Token): boolean;
    /**
     * Обновляет значение переменной контекста скрипта.
     *
     * @param {string} path  путь в контексте к обновляемому (устанавливаемому) полю.
     * @param {*} value значение переменной.
     *
     * @throws ELEngineException в случае ошибки формирования контекста.
     */
    updateContextVariable(path: string, value: any): void;
    /**
     * Вычисляет значение выражение (внутренний вызов, порождающий рекурсию и создающий внутренний контекст).
     *
     * @param {Token} expression выражение.
     * @param {*[]} iContext   внутренний контекст.
     *
     * @return {InterpreterToken} значение выражения.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @private
     */
    interpretRecursive(expression: Token, iContext: Array<any>): InterpreterToken;
}
