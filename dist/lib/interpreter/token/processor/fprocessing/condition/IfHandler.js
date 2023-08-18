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
exports.IfHandler = void 0;
var ComputingException_1 = require("../../../../exception/ComputingException");
var ValidationException_1 = require("../../../../exception/ValidationException");
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var AbstractTokenHandler_1 = require("../../AbstractTokenHandler");
var StringToBoolean_1 = require("../../converters/StringToBoolean");
var StringUtils_1 = require("../../../../util/StringUtils");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractTokenHandler
 */
var IfHandler = /** @class */ (function (_super) {
    __extends(IfHandler, _super);
    function IfHandler(interpreter) {
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
    IfHandler.prototype.handle = function (token, iContext) {
        var args = token.a;
        var conditionToken = this.interpreter.getTProcessor().interpret(args[0], iContext);
        var condition;
        if (StringUtils_1.StringUtils.areStringsEqual(conditionToken.t, TValues_1.TValues.STRING)) {
            try {
                condition = StringToBoolean_1.StringToBoolean.getInstance().convert$java_lang_String(conditionToken.v);
            }
            catch (ce) {
                throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043d\u0435 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043c \u043a \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e (\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + conditionToken.v + "\').", ce);
            }
        }
        else if (StringUtils_1.StringUtils.areStringsEqual(conditionToken.t, TValues_1.TValues.BOOLEAN)) {
            condition = conditionToken.v;
        }
        else {
            throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f \'" + TValues_1.TValues.getTypeNameOrType(conditionToken.t) + "\'.");
        }
        if (condition) {
            return this.interpreter.getTProcessor().interpret(args[1], iContext);
        }
        else if (args.length === 3) {
            return this.interpreter.getTProcessor().interpret(args[2], iContext);
        }
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NULL, null);
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
    IfHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        var args = token.a;
        var trueNodeReturnTypeLikeBoolean = this.interpreter.getTProcessor().isReturnTypeLooksLikeBoolean(args[1]);
        var falseNodeReturnTypeLikeBoolean = args.length === 3 && this.interpreter.getTProcessor().isReturnTypeLooksLikeBoolean(args[2]);
        return trueNodeReturnTypeLikeBoolean || falseNodeReturnTypeLikeBoolean;
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    IfHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength < 2 || argsLength > 3) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 2 \u0438\u043b\u0438 3, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    return IfHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.IfHandler = IfHandler;
IfHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.condition.IfHandler";
