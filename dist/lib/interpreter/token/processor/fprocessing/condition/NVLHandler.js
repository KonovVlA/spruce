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
exports.NVLHandler = void 0;
var ValidationException_1 = require("../../../../exception/ValidationException");
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
var NVLHandler = /** @class */ (function (_super) {
    __extends(NVLHandler, _super);
    function NVLHandler(interpreter) {
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
    NVLHandler.prototype.handle = function (token, iContext) {
        var args = token.a;
        var normalToken = this.interpreter.getTProcessor().interpret(args[0], iContext);
        if (StringUtils_1.StringUtils.areStringsEqual(TValues_1.TValues.NULL, normalToken.t)) {
            return this.interpreter.getTProcessor().interpret(args[1], iContext);
        }
        return args.length === 2 ? normalToken : this.interpreter.getTProcessor().interpret(args[2], iContext);
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
    NVLHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        var args = token.a;
        if (args.length === 2) {
            return this.interpreter.getTProcessor().isReturnTypeLooksLikeBoolean(args[0]) || this.interpreter.getTProcessor().isReturnTypeLooksLikeBoolean(args[1]);
        }
        return this.interpreter.getTProcessor().isReturnTypeLooksLikeBoolean(args[1]) || this.interpreter.getTProcessor().isReturnTypeLooksLikeBoolean(args[2]);
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    NVLHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength < 2 || argsLength > 3) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 2 \u0438\u043b\u0438 3, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    return NVLHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.NVLHandler = NVLHandler;
NVLHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.condition.NVLHandler";
