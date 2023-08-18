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
exports.AbstractStringHandler = void 0;
var ComputingException_1 = require("../../../../exception/ComputingException");
var TValues_1 = require("../../../TValues");
var AbstractTokenHandler_1 = require("../../AbstractTokenHandler");
var ConversionUtil_1 = require("../../converters/ConversionUtil");
var CollectionUtils_1 = require("../../../../util/CollectionUtils");
/**
 * Абстрактный класс обработчика токена встроенной функции обработки строки.
 * @extends AbstractTokenHandler
 * @class
 */
var AbstractStringHandler = /** @class */ (function (_super) {
    __extends(AbstractStringHandler, _super);
    function AbstractStringHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Возвращает значение строкового аргумента.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {string} значение строкового аргумента.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    AbstractStringHandler.prototype.getStringArgumentValue = function (token, iContext) {
        var arg = this.interpreter.getTProcessor().interpret(token.a[0], iContext);
        var converter = this.getConverter(arg.t);
        if (converter != null) {
            return converter.convert(arg.v);
        }
        throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f \'" + token.v + "\' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043a \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443 \u0442\u0438\u043f\u0430 \'" + TValues_1.TValues.getTypeNameOrType(arg.t) + "\'.");
    };
    /**
     * Проверяет доступность операции относительно типа аргумента и возвращает соответствующий конвертер аргумента.
     *
     * @param {string} type тип аргумента.
     *
     * @return {AbstractConverter} конвертер аргумента, если он доступен, {@code false} если конвертер недоступен.
     * @private
     */
    /*private*/ AbstractStringHandler.prototype.getConverter = function (type) {
        return (CollectionUtils_1.CollectionUtils.get(ConversionUtil_1.ConversionUtil.getToStringMap(), type));
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. возвращающие значение данной функции может быть только строкой.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractStringHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    return AbstractStringHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.AbstractStringHandler = AbstractStringHandler;
AbstractStringHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.string.AbstractStringHandler";
