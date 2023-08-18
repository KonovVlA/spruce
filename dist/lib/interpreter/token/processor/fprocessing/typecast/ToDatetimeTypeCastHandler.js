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
exports.ToDatetimeTypeCastHandler = void 0;
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
var ToDatetimeTypeCastHandler = /** @class */ (function (_super) {
    __extends(ToDatetimeTypeCastHandler, _super);
    function ToDatetimeTypeCastHandler(interpreter) {
        return _super.call(this, interpreter, TValues_1.TValues.DATETIME) || this;
    }
    /**
     * Проверяет доступность операции относительно типа аргумента и возвращает соответствующий конвертер аргумента.
     *
     * @param {string} type тип аргумента.
     *
     * @return {AbstractConverter} конвертер аргумента, если он доступен, {@code false} если конвертер недоступен.
     */
    ToDatetimeTypeCastHandler.prototype.getConverter = function (type) {
        return (CollectionUtils_1.CollectionUtils.get(ConversionUtil_1.ConversionUtil.getToDatetimeMap(), type));
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. возвращающие значение данной функции может быть только датой.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    ToDatetimeTypeCastHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    return ToDatetimeTypeCastHandler;
}(AbstractTypeCastHandler_1.AbstractTypeCastHandler));
exports.ToDatetimeTypeCastHandler = ToDatetimeTypeCastHandler;
ToDatetimeTypeCastHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.typecast.ToDatetimeTypeCastHandler";
