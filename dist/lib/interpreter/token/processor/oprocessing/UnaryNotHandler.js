"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnaryNotHandler = void 0;
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var ConversionUtil_1 = require("../converters/ConversionUtil");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var AbstractUnaryOperationTokenHandler_1 = require("./AbstractUnaryOperationTokenHandler");
/**
 * Обработчик операции унарное отрицание.
 * @extends AbstractUnaryOperationTokenHandler
 * @class
 */
var UnaryNotHandler = /** @class */ (function (_super) {
    __extends(UnaryNotHandler, _super);
    function UnaryNotHandler(interpreter) {
        return _super.call(this, interpreter, OValues_1.OValues.U_NOT) || this;
    }
    /**
     * Проверяет доступность операции относительно типа аргумента и возвращает соответствующий конвертер аргумента.
     *
     * @param {InterpreterToken} token аргумент.
     *
     * @return {AbstractConverter} конвертер аргумента.
     */
    UnaryNotHandler.prototype.getConverter = function (token) {
        return (CollectionUtils_1.CollectionUtils.get(ConversionUtil_1.ConversionUtil.getToBooleanMap(), token.t));
    };
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
    UnaryNotHandler.prototype.handle = function (token, iContext) {
        var operand = this.getOperand(token.a, iContext);
        return new InterpreterToken_1.InterpreterToken(operand.t, !operand.v);
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true}, т.к. результатом операции логического отрицания может быть только логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    UnaryNotHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return true;
    };
    return UnaryNotHandler;
}(AbstractUnaryOperationTokenHandler_1.AbstractUnaryOperationTokenHandler));
exports.UnaryNotHandler = UnaryNotHandler;
UnaryNotHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.UnaryNotHandler";
