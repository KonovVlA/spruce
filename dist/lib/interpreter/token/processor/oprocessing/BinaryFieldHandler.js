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
exports.BinaryFieldHandler = void 0;
var ValidationException_1 = require("../../../exception/ValidationException");
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var TValues_1 = require("../../TValues");
var StringUtils_1 = require("../../../util/StringUtils");
var AbstractBinaryOperationTokenHandler_1 = require("./AbstractBinaryOperationTokenHandler");
/**
 * Обработчик операции объявления поля объекта.
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
var BinaryFieldHandler = /** @class */ (function (_super) {
    __extends(BinaryFieldHandler, _super);
    function BinaryFieldHandler(interpreter) {
        return _super.call(this, interpreter, OValues_1.OValues.B_FIELD) || this;
    }
    /**
     * Проверяет доступность операции относительно типов аргументов и возвращает соответствующий конвертер правого
     * аргумента.
     *
     * @param {InterpreterToken} leftToken  левый аргумент.
     * @param {InterpreterToken} rightToken правый аргумент.
     *
     * @return {AbstractConverter} конвертер правого аргумента.
     */
    BinaryFieldHandler.prototype.getConverter = function (leftToken, rightToken) {
        return null;
    };
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
    BinaryFieldHandler.prototype.handle = function (token, iContext) {
        var args = token.a;
        var fieldNameToken = args[0];
        var fieldValueToken = args[1];
        var fieldName = fieldNameToken.v;
        var fieldValue = this.interpreter.getTProcessor().interpret(fieldValueToken, iContext).v;
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.ARRAY, [fieldName, fieldValue]);
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false}, т.к. результатом объявления поля объекта не может быть логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    BinaryFieldHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
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
    BinaryFieldHandler.prototype.validate = function (token) {
        _super.prototype.validate.call(this, token);
        var fieldNameToken = token.a[0];
        var fieldNameTokenType = fieldNameToken.t;
        if (!(StringUtils_1.StringUtils.areStringsEqual(fieldNameTokenType, TValues_1.TValues.EXTERNAL_ID) || StringUtils_1.StringUtils.areStringsEqual(fieldNameTokenType, TValues_1.TValues.STRING))) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + this.operationName + "\' \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0442\u0438\u043f \'" + TValues_1.TValues.getTypeNameOrType(fieldNameTokenType) + "\'.");
        }
        var fieldNameTokenValue = fieldNameToken.v;
        if (StringUtils_1.StringUtils.isNullOrEmpty(fieldNameTokenValue)) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + this.operationName + "\' \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \'" + fieldNameTokenValue + "\' \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d.");
        }
    };
    return BinaryFieldHandler;
}(AbstractBinaryOperationTokenHandler_1.AbstractBinaryOperationTokenHandler));
exports.BinaryFieldHandler = BinaryFieldHandler;
BinaryFieldHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.BinaryFieldHandler";
