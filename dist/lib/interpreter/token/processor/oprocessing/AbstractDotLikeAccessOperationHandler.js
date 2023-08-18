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
exports.AbstractDotLikeAccessOperationHandler = void 0;
var ValidationException_1 = require("../../../exception/ValidationException");
var TValues_1 = require("../../TValues");
var StringUtils_1 = require("../../../util/StringUtils");
var AbstractBinaryOperationTokenHandler_1 = require("./AbstractBinaryOperationTokenHandler");
/**
 * Класс обработчика операций доступа к полю объекта по идентификатору ('.' или '?').
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
var AbstractDotLikeAccessOperationHandler = /** @class */ (function (_super) {
    __extends(AbstractDotLikeAccessOperationHandler, _super);
    function AbstractDotLikeAccessOperationHandler(interpreter, operation) {
        return _super.call(this, interpreter, operation) || this;
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
    AbstractDotLikeAccessOperationHandler.prototype.getConverter = function (leftToken, rightToken) {
        return null;
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true}, т.к. результатом взятия поля объекта может быть значение произвольного типа.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractDotLikeAccessOperationHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
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
    AbstractDotLikeAccessOperationHandler.prototype.validate = function (token) {
        _super.prototype.validate.call(this, token);
        var fieldIdToken = token.a[1];
        if (fieldIdToken.t == null || !StringUtils_1.StringUtils.areStringsEqual(fieldIdToken.t, TValues_1.TValues.EXTERNAL_ID)) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + this.operationName + "\' \u0442\u0438\u043f \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u043d\u0435\u0432\u0435\u0440\u0435\u043d (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(fieldIdToken.t) + "\').");
        }
        if (fieldIdToken.v == null || /* isEmpty */ (fieldIdToken.v.length === 0)) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + this.operationName + "\' \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430.");
        }
    };
    return AbstractDotLikeAccessOperationHandler;
}(AbstractBinaryOperationTokenHandler_1.AbstractBinaryOperationTokenHandler));
exports.AbstractDotLikeAccessOperationHandler = AbstractDotLikeAccessOperationHandler;
AbstractDotLikeAccessOperationHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.AbstractDotLikeAccessOperationHandler";
