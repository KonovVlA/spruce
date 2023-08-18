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
exports.LogHandler = void 0;
var ComputingException_1 = require("../../../../exception/ComputingException");
var ValidationException_1 = require("../../../../exception/ValidationException");
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var NumberUtils_1 = require("../../../../util/NumberUtils");
var AbstractNumberHandler_1 = require("./AbstractNumberHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractNumberHandler
 */
var LogHandler = /** @class */ (function (_super) {
    __extends(LogHandler, _super);
    function LogHandler(interpreter) {
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
    LogHandler.prototype.handle = function (token, iContext) {
        var argsLength = token.a.length;
        if (argsLength === 1) {
            try {
                return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, NumberUtils_1.NumberUtils.ln(this.getNumberArgumentValue(token, 0, iContext)));
            }
            catch (e) {
                throw new ComputingException_1.ComputingException("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0435 \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\'.", e);
            }
        }
        else {
            var x = void 0;
            var base = void 0;
            try {
                x = this.getNumberArgumentValue(token, 0, iContext);
            }
            catch (e) {
                throw new ComputingException_1.ComputingException("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 1-\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0435 \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\'.", e);
            }
            try {
                base = this.getNumberArgumentValue(token, 1, iContext);
            }
            catch (e) {
                throw new ComputingException_1.ComputingException("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e 2-\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0435 \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\'.", e);
            }
            return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, NumberUtils_1.NumberUtils.log(x, base));
        }
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    LogHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength < 1 || argsLength > 2) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 1 \u0438\u043b\u0438 2, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    return LogHandler;
}(AbstractNumberHandler_1.AbstractNumberHandler));
exports.LogHandler = LogHandler;
LogHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.number.LogHandler";
