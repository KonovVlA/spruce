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
exports.NumberHandler = void 0;
var big_js_1 = require("big.js");
var ValidationException_1 = require("../../../exception/ValidationException");
var InterpreterToken_1 = require("../../InterpreterToken");
var TValues_1 = require("../../TValues");
var AbstractTokenHandler_1 = require("../AbstractTokenHandler");
var NumberUtils_1 = require("../../../util/NumberUtils");
var StringUtils_1 = require("../../../util/StringUtils");
/**
 * Обработчик чисел.
 * @extends AbstractTokenHandler
 * @class
 */
var NumberHandler = /** @class */ (function (_super) {
    __extends(NumberHandler, _super);
    function NumberHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат обработки токена.
     */
    NumberHandler.prototype.handle = function (token, iContext) {
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, new big_js_1.Big(token.v));
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false}, т.к. выражение представляет собой число.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    NumberHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
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
    NumberHandler.prototype.validate = function (token) {
        var v = token.v;
        if (StringUtils_1.StringUtils.isNullOrEmpty(v)) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f.");
        }
        if (!NumberUtils_1.NumberUtils.isStringNumberGeZero(v)) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \'" + v + "\'.");
        }
    };
    return NumberHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.NumberHandler = NumberHandler;
NumberHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.tprocessing.NumberHandler";
