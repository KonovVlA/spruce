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
exports.AbstractRelativeComparisonOperationHandler = void 0;
var TValues_1 = require("../../TValues");
var ConversionUtil_1 = require("../converters/ConversionUtil");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var AbstractBinaryOperationTokenHandler_1 = require("./AbstractBinaryOperationTokenHandler");
/**
 * Класс обработчика операции сравнения на меньше/больше/меньше или равно/больше или равно.
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
var AbstractRelativeComparisonOperationHandler = /** @class */ (function (_super) {
    __extends(AbstractRelativeComparisonOperationHandler, _super);
    function AbstractRelativeComparisonOperationHandler(interpreter, operation) {
        return _super.call(this, interpreter, operation) || this;
    }
    AbstractRelativeComparisonOperationHandler.AVAILABILITY_MAP_$LI$ = function () { if (AbstractRelativeComparisonOperationHandler.AVAILABILITY_MAP == null) {
        AbstractRelativeComparisonOperationHandler.AVAILABILITY_MAP = AbstractRelativeComparisonOperationHandler.getAvailabilityMap();
    } return AbstractRelativeComparisonOperationHandler.AVAILABILITY_MAP; };
    /**
     * Инициализирует матрицу применимости операции относительно типов аргументов.
     *
     * @return {*} матрица применимости операции относительно типов аргументов.
     * @private
     */
    /*private*/ AbstractRelativeComparisonOperationHandler.getAvailabilityMap = function () {
        var map = ({});
        /* put */ (map[TValues_1.TValues.DATETIME] = ConversionUtil_1.ConversionUtil.getToDatetimeMap());
        /* put */ (map[TValues_1.TValues.NUMBER] = ConversionUtil_1.ConversionUtil.getToNumberMap());
        /* put */ (map[TValues_1.TValues.STRING] = ConversionUtil_1.ConversionUtil.getToStringMap());
        return map;
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
    AbstractRelativeComparisonOperationHandler.prototype.getConverter = function (leftToken, rightToken) {
        var lValueMap = (CollectionUtils_1.CollectionUtils.get(AbstractRelativeComparisonOperationHandler.AVAILABILITY_MAP_$LI$(), leftToken.t));
        if (lValueMap != null) {
            return (CollectionUtils_1.CollectionUtils.get(lValueMap, rightToken.t));
        }
        return null;
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true}, т.к. результатом сравнения на меньше/больше/меньше или равно/больше или равно может быть
     * только логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractRelativeComparisonOperationHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return true;
    };
    return AbstractRelativeComparisonOperationHandler;
}(AbstractBinaryOperationTokenHandler_1.AbstractBinaryOperationTokenHandler));
exports.AbstractRelativeComparisonOperationHandler = AbstractRelativeComparisonOperationHandler;
AbstractRelativeComparisonOperationHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.AbstractRelativeComparisonOperationHandler";
