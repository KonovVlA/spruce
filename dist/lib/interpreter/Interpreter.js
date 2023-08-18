"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = void 0;
var FProcessor_1 = require("./token/processor/fprocessing/FProcessor");
var OProcessor_1 = require("./token/processor/oprocessing/OProcessor");
var TProcessor_1 = require("./token/processor/tprocessing/TProcessor");
var CollectionUtils_1 = require("./util/CollectionUtils");
var NumberUtils_1 = require("./util/NumberUtils");
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
var Interpreter = /** @class */ (function () {
    function Interpreter(context, macroDefinitions) {
        if (this.fProcessor === undefined) {
            this.fProcessor = null;
        }
        if (this.macroDefinitions === undefined) {
            this.macroDefinitions = null;
        }
        if (this.oProcessor === undefined) {
            this.oProcessor = null;
        }
        if (this.tProcessor === undefined) {
            this.tProcessor = null;
        }
        this.macroDefinitions = macroDefinitions == null ? ({}) : macroDefinitions;
        this.fProcessor = new FProcessor_1.FProcessor(this);
        this.tProcessor = new TProcessor_1.TProcessor(this, Interpreter.getSafeContext(context));
        this.oProcessor = new OProcessor_1.OProcessor(this);
    }
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
    /*private*/ Interpreter.getSafeContext = function (context) {
        return context != null ? CollectionUtils_1.CollectionUtils.deepCloneWithTypeConversion(context) : ({});
    };
    /**
     * Возвращает обработчик поля {@link Token#v} токенов в случае значения {@link TValues#FUNCTION} поля {@link
     * Token#v}, являющегося встроенной функцией.
     *
     * @return {FProcessor} обработчик поля {@link Token#v} токенов в случае значения {@link TValues#FUNCTION} поля {@link Token#v},
     * являющегося встроенной функцией.
     */
    Interpreter.prototype.getFProcessor = function () {
        return this.fProcessor;
    };
    /**
     * Возвращает макросы скрипта.
     *
     * @return {*} макросы скрипта.
     */
    Interpreter.prototype.getMacroDefinitions = function () {
        return this.macroDefinitions;
    };
    /**
     * Возвращает обработчик поля {@link Token#v} токенов в случае значения {@link TValues#OPERATION} поля {@link
     * Token#v}.
     *
     * @return {OProcessor} обработчик поля {@link Token#v} токенов в случае значения {@link TValues#OPERATION} поля {@link Token#v}.
     */
    Interpreter.prototype.getOProcessor = function () {
        return this.oProcessor;
    };
    /**
     * Возвращает обработчик поля {@link Token#t} токенов.
     *
     * @return {TProcessor} обработчик поля {@link Token#t} токенов.
     */
    Interpreter.prototype.getTProcessor = function () {
        return this.tProcessor;
    };
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
    Interpreter.prototype.interpret = function (expression) {
        var accuracy = NumberUtils_1.NumberUtils.setupBigDecimalAccuracy();
        var result = this.interpretRecursive(expression, ([])).v;
        NumberUtils_1.NumberUtils.rollbackBigDecimalAccuracy(accuracy);
        return result;
    };
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
    Interpreter.prototype.isReturnTypeLooksLikeBoolean = function (expression) {
        return this.tProcessor.isReturnTypeLooksLikeBoolean(expression);
    };
    /**
     * Обновляет значение переменной контекста скрипта.
     *
     * @param {string} path  путь в контексте к обновляемому (устанавливаемому) полю.
     * @param {*} value значение переменной.
     *
     * @throws ELEngineException в случае ошибки формирования контекста.
     */
    Interpreter.prototype.updateContextVariable = function (path, value) {
        this.tProcessor.updateContextVariable(path, CollectionUtils_1.CollectionUtils.deepCloneWithTypeConversion(value));
    };
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
    /*private*/ Interpreter.prototype.interpretRecursive = function (expression, iContext) {
        return this.tProcessor.interpret(expression, iContext);
    };
    return Interpreter;
}());
exports.Interpreter = Interpreter;
Interpreter["__class"] = "ru.sbrf.ufs.prodsel.elengine.Interpreter";
