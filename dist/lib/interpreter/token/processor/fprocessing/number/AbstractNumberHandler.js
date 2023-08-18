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
exports.AbstractNumberHandler = void 0;
var ComputingException_1 = require("../../../../exception/ComputingException");
var TValues_1 = require("../../../TValues");
var AbstractTokenHandler_1 = require("../../AbstractTokenHandler");
var ConversionUtil_1 = require("../../converters/ConversionUtil");
var CollectionUtils_1 = require("../../../../util/CollectionUtils");
/**
 * Абстрактный класс обработчика токена встроенной функции обработки числа.
 * @extends AbstractTokenHandler
 * @class
 */
var AbstractNumberHandler = /** @class */ (function (_super) {
    __extends(AbstractNumberHandler, _super);
    function AbstractNumberHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Возвращает значение числового аргумента.
     *
     * @param {Token} token    токен.
     * @param {number} index    индекс числового аргумента.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {Big} значение числового аргумента.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    AbstractNumberHandler.prototype.getNumberArgumentValue = function (token, index, iContext) {
        var arg = this.interpreter.getTProcessor().interpret(token.a[index], iContext);
        var converter = (CollectionUtils_1.CollectionUtils.get(ConversionUtil_1.ConversionUtil.getToNumberMap(), arg.t));
        if (converter != null) {
            return converter.convert(arg.v);
        }
        throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f \'" + token.v + "\' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043a \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443 \u0442\u0438\u043f\u0430 \'" + TValues_1.TValues.getTypeNameOrType(arg.t) + "\'.");
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. возвращающие значение функций данной группы может быть только числом.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractNumberHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    return AbstractNumberHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.AbstractNumberHandler = AbstractNumberHandler;
AbstractNumberHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.number.AbstractNumberHandler";
