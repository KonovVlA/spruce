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
exports.ExistsHandler = void 0;
var ComputingException_1 = require("../../../../exception/ComputingException");
var ValidationException_1 = require("../../../../exception/ValidationException");
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var AbstractTokenHandler_1 = require("../../AbstractTokenHandler");
var BooleanToString_1 = require("../../converters/BooleanToString");
var DatetimeToString_1 = require("../../converters/DatetimeToString");
var NumberToString_1 = require("../../converters/NumberToString");
var StringUtils_1 = require("../../../../util/StringUtils");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractTokenHandler
 */
var ExistsHandler = /** @class */ (function (_super) {
    __extends(ExistsHandler, _super);
    function ExistsHandler(interpreter) {
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
    ExistsHandler.prototype.handle = function (token, iContext) {
        var args = token.a;
        var objectToken = this.interpreter.getTProcessor().interpret(args[0], iContext);
        if (StringUtils_1.StringUtils.areStringsEqual(objectToken.t, TValues_1.TValues.OBJECT)) {
            var object = objectToken.v;
            var keyToken = this.interpreter.getTProcessor().interpret(args[1], iContext);
            var key = void 0;
            switch ((keyToken.t)) {
                case TValues_1.TValues.BOOLEAN:
                    key = BooleanToString_1.BooleanToString.getInstance().convert$java_lang_Boolean(keyToken.v);
                    break;
                case TValues_1.TValues.DATETIME:
                    key = DatetimeToString_1.DatetimeToString.getInstance().convert$java_util_Date(keyToken.v);
                    break;
                case TValues_1.TValues.NUMBER:
                    key = NumberToString_1.NumberToString.getInstance().convert$java_math_BigDecimal(keyToken.v);
                    break;
                case TValues_1.TValues.STRING:
                    key = keyToken.v;
                    break;
                default:
                    throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043a\u043b\u044e\u0447\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f \'" + TValues_1.TValues.getTypeNameOrType(keyToken.t) + "\'.");
            }
            return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.BOOLEAN, /* containsKey */ object.hasOwnProperty(key));
        }
        throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f \'" + TValues_1.TValues.getTypeNameOrType(objectToken.t) + "\'.");
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true} т.к. возвращающие значение данной функции может быть только логического типа.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    ExistsHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return true;
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    ExistsHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength !== 2) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 2, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    return ExistsHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.ExistsHandler = ExistsHandler;
ExistsHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.object.ExistsHandler";
