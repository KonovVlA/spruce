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
exports.PowHandler = void 0;
var ComputingException_1 = require("../../../../exception/ComputingException");
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var NumberUtils_1 = require("../../../../util/NumberUtils");
var AbstractTwoArgsNumberHandler_1 = require("./AbstractTwoArgsNumberHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractTwoArgsNumberHandler
 */
var PowHandler = /** @class */ (function (_super) {
    __extends(PowHandler, _super);
    function PowHandler(interpreter) {
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
    PowHandler.prototype.handle = function (token, iContext) {
        var x;
        var exponent;
        try {
            x = this.getNumberArgumentValue(token, 0, iContext);
        }
        catch (e) {
            throw new ComputingException_1.ComputingException("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 1-\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0435 \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\'.", e);
        }
        try {
            exponent = this.getNumberArgumentValue(token, 1, iContext);
        }
        catch (e) {
            throw new ComputingException_1.ComputingException("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e 2-\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0435 \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\'.", e);
        }
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, NumberUtils_1.NumberUtils.pow(x, exponent));
    };
    return PowHandler;
}(AbstractTwoArgsNumberHandler_1.AbstractTwoArgsNumberHandler));
exports.PowHandler = PowHandler;
PowHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.number.PowHandler";
