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
exports.AbstractBinaryLogicOperationHandler = void 0;
var TValues_1 = require("../../TValues");
var ConversionUtil_1 = require("../converters/ConversionUtil");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var AbstractBinaryOperationTokenHandler_1 = require("./AbstractBinaryOperationTokenHandler");
/**
 * Класс обработки токена бинарной логической операции.
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
var AbstractBinaryLogicOperationHandler = /** @class */ (function (_super) {
    __extends(AbstractBinaryLogicOperationHandler, _super);
    function AbstractBinaryLogicOperationHandler(interpreter, operation) {
        return _super.call(this, interpreter, operation) || this;
    }
    AbstractBinaryLogicOperationHandler.AVAILABILITY_MAP_$LI$ = function () { if (AbstractBinaryLogicOperationHandler.AVAILABILITY_MAP == null) {
        AbstractBinaryLogicOperationHandler.AVAILABILITY_MAP = AbstractBinaryLogicOperationHandler.getAvailabilityMap();
    } return AbstractBinaryLogicOperationHandler.AVAILABILITY_MAP; };
    /**
     * Инициализирует матрицу применимости операции относительно типов аргументов.
     *
     * @return {*} матрица применимости операции относительно типов аргументов.
     * @private
     */
    /*private*/ AbstractBinaryLogicOperationHandler.getAvailabilityMap = function () {
        var map = ({});
        /* put */ (map[TValues_1.TValues.BOOLEAN] = ConversionUtil_1.ConversionUtil.getToBooleanMap());
        return map;
    };
    /**
     * Проверяет, что операция доступна исходя из типа левого аргумента.
     *
     * @param {InterpreterToken} leftToken левый аргумент.
     *
     * @return {boolean} {@code true} в случае доступности операции для левого аргумента.
     */
    AbstractBinaryLogicOperationHandler.prototype.isAvailableForLeftToken = function (leftToken) {
        return CollectionUtils_1.CollectionUtils.get(AbstractBinaryLogicOperationHandler.AVAILABILITY_MAP_$LI$(), leftToken.t) != null;
    };
    /**
     * Проверяет доступность операции относительно типов аргументов и возвращает соответствующий конвертер правого
     * аргумента.
     *
     * @param {InterpreterToken} leftToken  левый аргумент.
     * @param {InterpreterToken} rightToken правый аргумент.
     *
     * @return {AbstractConverter} конвертер правого аргумента.
     */
    AbstractBinaryLogicOperationHandler.prototype.getConverter = function (leftToken, rightToken) {
        return (CollectionUtils_1.CollectionUtils.get((CollectionUtils_1.CollectionUtils.get(AbstractBinaryLogicOperationHandler.AVAILABILITY_MAP_$LI$(), leftToken.t)), rightToken.t));
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true}, т.к. результатом логической операции может быть только логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractBinaryLogicOperationHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return true;
    };
    return AbstractBinaryLogicOperationHandler;
}(AbstractBinaryOperationTokenHandler_1.AbstractBinaryOperationTokenHandler));
exports.AbstractBinaryLogicOperationHandler = AbstractBinaryLogicOperationHandler;
AbstractBinaryLogicOperationHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.AbstractBinaryLogicOperationHandler";
