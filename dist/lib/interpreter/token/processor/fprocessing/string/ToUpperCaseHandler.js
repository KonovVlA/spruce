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
exports.ToUpperCaseHandler = void 0;
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var AbstractOneArgStringHandler_1 = require("./AbstractOneArgStringHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractOneArgStringHandler
 */
var ToUpperCaseHandler = /** @class */ (function (_super) {
    __extends(ToUpperCaseHandler, _super);
    function ToUpperCaseHandler(interpreter) {
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
    ToUpperCaseHandler.prototype.handle = function (token, iContext) {
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.STRING, this.getStringArgumentValue(token, iContext).toUpperCase());
    };
    return ToUpperCaseHandler;
}(AbstractOneArgStringHandler_1.AbstractOneArgStringHandler));
exports.ToUpperCaseHandler = ToUpperCaseHandler;
ToUpperCaseHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.string.ToUpperCaseHandler";
