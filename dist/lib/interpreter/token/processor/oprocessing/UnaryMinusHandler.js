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
exports.UnaryMinusHandler = void 0;
var big_js_1 = require("big.js");
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var ConversionUtil_1 = require("../converters/ConversionUtil");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var AbstractUnaryOperationTokenHandler_1 = require("./AbstractUnaryOperationTokenHandler");
/**
 * Обработчик операции унарный минус.
 * @extends AbstractUnaryOperationTokenHandler
 * @class
 */
var UnaryMinusHandler = /** @class */ (function (_super) {
    __extends(UnaryMinusHandler, _super);
    function UnaryMinusHandler(interpreter) {
        return _super.call(this, interpreter, OValues_1.OValues.U_MINUS) || this;
    }
    /**
     * Проверяет доступность операции относительно типа аргумента и возвращает соответствующий конвертер аргумента.
     *
     * @param {InterpreterToken} token аргумент.
     *
     * @return {AbstractConverter} конвертер аргумента.
     */
    UnaryMinusHandler.prototype.getConverter = function (token) {
        return (CollectionUtils_1.CollectionUtils.get(ConversionUtil_1.ConversionUtil.getToNumberMap(), token.t));
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
    UnaryMinusHandler.prototype.handle = function (token, iContext) {
        var operand = this.getOperand(token.a, iContext);
        return new InterpreterToken_1.InterpreterToken(operand.t, /* negate */ operand.v.times(new big_js_1.Big("-1")));
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false}, т.к. результатом операции унарный минус не может быть логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    UnaryMinusHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    return UnaryMinusHandler;
}(AbstractUnaryOperationTokenHandler_1.AbstractUnaryOperationTokenHandler));
exports.UnaryMinusHandler = UnaryMinusHandler;
UnaryMinusHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.UnaryMinusHandler";
