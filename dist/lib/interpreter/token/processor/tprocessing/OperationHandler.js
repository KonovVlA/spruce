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
exports.OperationHandler = void 0;
var AbstractTokenHandler_1 = require("../AbstractTokenHandler");
/**
 * Обработчик операций.
 * @extends AbstractTokenHandler
 * @class
 */
var OperationHandler = /** @class */ (function (_super) {
    __extends(OperationHandler, _super);
    function OperationHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
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
    OperationHandler.prototype.handle = function (token, iContext) {
        return this.interpreter.getOProcessor().interpret(token, iContext);
    };
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
    OperationHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return this.interpreter.getOProcessor().isReturnTypeLooksLikeBoolean(token);
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    OperationHandler.prototype.validate = function (token) {
    };
    return OperationHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.OperationHandler = OperationHandler;
OperationHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.tprocessing.OperationHandler";
