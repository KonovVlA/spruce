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
exports.AbstractTypeCastHandler = void 0;
var ComputingException_1 = require("../../../../exception/ComputingException");
var ValidationException_1 = require("../../../../exception/ValidationException");
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var AbstractTokenHandler_1 = require("../../AbstractTokenHandler");
/**
 * Абстрактный класс обработчика токена встроенной функции приведения типа.
 * @extends AbstractTokenHandler
 * @class
 */
var AbstractTypeCastHandler = /** @class */ (function (_super) {
    __extends(AbstractTypeCastHandler, _super);
    function AbstractTypeCastHandler(interpreter, type) {
        var _this = _super.call(this, interpreter) || this;
        if (_this.type === undefined) {
            _this.type = null;
        }
        _this.type = type;
        return _this;
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
    AbstractTypeCastHandler.prototype.handle = function (token, iContext) {
        var valueToConvert = this.interpreter.getTProcessor().interpret(token.a[0], iContext);
        var converter = this.getConverter(valueToConvert.t);
        if (converter != null) {
            try {
                return new InterpreterToken_1.InterpreterToken(this.type, converter.convert(valueToConvert.v));
            }
            catch (ce) {
                throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 \'" + token.v + "\' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043a \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \'" + valueToConvert.v + "\'.", ce);
            }
        }
        throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 \'" + token.v + "\' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043a \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443 \u0442\u0438\u043f\u0430 \'" + TValues_1.TValues.getTypeNameOrType(valueToConvert.t) + "\'.");
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractTypeCastHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength !== 1) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 1, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    return AbstractTypeCastHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.AbstractTypeCastHandler = AbstractTypeCastHandler;
AbstractTypeCastHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.typecast.AbstractTypeCastHandler";
