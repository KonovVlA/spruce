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
exports.AbstractMultiplicativeOperationTokenHandler = void 0;
var TValues_1 = require("../../TValues");
var NoOp_1 = require("../converters/NoOp");
var StringToNumber_1 = require("../converters/StringToNumber");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var AbstractBinaryOperationTokenHandler_1 = require("./AbstractBinaryOperationTokenHandler");
/**
 * Класс обработчика токена мультипликативной операции.
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
var AbstractMultiplicativeOperationTokenHandler = /** @class */ (function (_super) {
    __extends(AbstractMultiplicativeOperationTokenHandler, _super);
    function AbstractMultiplicativeOperationTokenHandler(interpreter, operation) {
        return _super.call(this, interpreter, operation) || this;
    }
    AbstractMultiplicativeOperationTokenHandler.AVAILABILITY_MAP_$LI$ = function () { if (AbstractMultiplicativeOperationTokenHandler.AVAILABILITY_MAP == null) {
        AbstractMultiplicativeOperationTokenHandler.AVAILABILITY_MAP = AbstractMultiplicativeOperationTokenHandler.getAvailabilityMap();
    } return AbstractMultiplicativeOperationTokenHandler.AVAILABILITY_MAP; };
    /**
     * Инициализирует матрицу применимости операции относительно типов аргументов.
     *
     * @return {*} матрица применимости операции относительно типов аргументов.
     * @private
     */
    /*private*/ AbstractMultiplicativeOperationTokenHandler.getAvailabilityMap = function () {
        var map = ({});
        var numberMap = ({});
        /* put */ (numberMap[TValues_1.TValues.NUMBER] = NoOp_1.NoOp.getInstance());
        /* put */ (numberMap[TValues_1.TValues.STRING] = StringToNumber_1.StringToNumber.getInstance());
        /* put */ (map[TValues_1.TValues.NUMBER] = numberMap);
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
    AbstractMultiplicativeOperationTokenHandler.prototype.getConverter = function (leftToken, rightToken) {
        var lValueMap = (CollectionUtils_1.CollectionUtils.get(AbstractMultiplicativeOperationTokenHandler.AVAILABILITY_MAP_$LI$(), leftToken.t));
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
     * @return {boolean} {@code false}, т.к. результатом мультипликативной операции не может быть логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractMultiplicativeOperationTokenHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    return AbstractMultiplicativeOperationTokenHandler;
}(AbstractBinaryOperationTokenHandler_1.AbstractBinaryOperationTokenHandler));
exports.AbstractMultiplicativeOperationTokenHandler = AbstractMultiplicativeOperationTokenHandler;
AbstractMultiplicativeOperationTokenHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.AbstractMultiplicativeOperationTokenHandler";
