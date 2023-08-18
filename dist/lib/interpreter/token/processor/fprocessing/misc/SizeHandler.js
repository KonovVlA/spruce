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
exports.SizeHandler = void 0;
var big_js_1 = require("big.js");
var ComputingException_1 = require("../../../../exception/ComputingException");
var ValidationException_1 = require("../../../../exception/ValidationException");
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var AbstractTokenHandler_1 = require("../../AbstractTokenHandler");
var StringUtils_1 = require("../../../../util/StringUtils");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractTokenHandler
 */
var SizeHandler = /** @class */ (function (_super) {
    __extends(SizeHandler, _super);
    function SizeHandler(interpreter) {
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
    SizeHandler.prototype.handle = function (token, iContext) {
        var arg = this.interpreter.getTProcessor().interpret(token.a[0], iContext);
        if (StringUtils_1.StringUtils.areStringsEqual(arg.t, TValues_1.TValues.STRING)) {
            return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, new big_js_1.Big(arg.v.length));
        }
        else if (StringUtils_1.StringUtils.areStringsEqual(arg.t, TValues_1.TValues.ARRAY)) {
            return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, new big_js_1.Big(/* size */ arg.v.length));
        }
        throw new ComputingException_1.ComputingException("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' (\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0442\u0438\u043f \'" + TValues_1.TValues.getTypeNameOrType(arg.t) + "\').");
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. возвращающие значение данной функции может быть только числом.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    SizeHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    SizeHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength !== 1) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 1, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    return SizeHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.SizeHandler = SizeHandler;
SizeHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.misc.SizeHandler";
