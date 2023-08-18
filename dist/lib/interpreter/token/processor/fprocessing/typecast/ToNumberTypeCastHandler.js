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
exports.ToNumberTypeCastHandler = void 0;
var TValues_1 = require("../../../TValues");
var ConversionUtil_1 = require("../../converters/ConversionUtil");
var CollectionUtils_1 = require("../../../../util/CollectionUtils");
var AbstractTypeCastHandler_1 = require("./AbstractTypeCastHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractTypeCastHandler
 */
var ToNumberTypeCastHandler = /** @class */ (function (_super) {
    __extends(ToNumberTypeCastHandler, _super);
    function ToNumberTypeCastHandler(interpreter) {
        return _super.call(this, interpreter, TValues_1.TValues.NUMBER) || this;
    }
    /**
     * Проверяет доступность операции относительно типа аргумента и возвращает соответствующий конвертер аргумента.
     *
     * @param {string} type тип аргумента.
     *
     * @return {AbstractConverter} конвертер аргумента, если он доступен, {@code false} если конвертер недоступен.
     */
    ToNumberTypeCastHandler.prototype.getConverter = function (type) {
        return (CollectionUtils_1.CollectionUtils.get(ConversionUtil_1.ConversionUtil.getToNumberMap(), type));
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
    ToNumberTypeCastHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    return ToNumberTypeCastHandler;
}(AbstractTypeCastHandler_1.AbstractTypeCastHandler));
exports.ToNumberTypeCastHandler = ToNumberTypeCastHandler;
ToNumberTypeCastHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.typecast.ToNumberTypeCastHandler";
