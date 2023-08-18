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
exports.SubstrHandler = void 0;
var ComputingException_1 = require("../../../../exception/ComputingException");
var ValidationException_1 = require("../../../../exception/ValidationException");
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var ConversionUtil_1 = require("../../converters/ConversionUtil");
var CollectionUtils_1 = require("../../../../util/CollectionUtils");
var NumberUtils_1 = require("../../../../util/NumberUtils");
var AbstractStringHandler_1 = require("./AbstractStringHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractStringHandler
 */
var SubstrHandler = /** @class */ (function (_super) {
    __extends(SubstrHandler, _super);
    function SubstrHandler(interpreter) {
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
     * @private
     */
    /*private*/ SubstrHandler.prototype.getNumberArgumentValue = function (token, index, iContext) {
        var arg = this.interpreter.getTProcessor().interpret(token.a[index], iContext);
        var converter = (CollectionUtils_1.CollectionUtils.get(ConversionUtil_1.ConversionUtil.getToNumberMap(), arg.t));
        if (converter != null) {
            return converter.convert(arg.v);
        }
        throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f \'" + token.v + "\' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043a \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443 \u0442\u0438\u043f\u0430 \'" + TValues_1.TValues.getTypeNameOrType(arg.t) + "\'.");
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
    SubstrHandler.prototype.handle = function (token, iContext) {
        var sourceString;
        var sourceStringLength;
        var start;
        var length;
        var end;
        try {
            sourceString = this.getStringArgumentValue(token, iContext);
            sourceStringLength = sourceString.length;
        }
        catch (e) {
            throw new ComputingException_1.ComputingException("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u043f\u0435\u0440\u0432\u043e\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0435 \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\'.", e);
        }
        try {
            var startAsBig = this.getNumberArgumentValue(token, 1, iContext);
            var startAsString = NumberUtils_1.NumberUtils.getStringRepresentation(startAsBig);
            if (!NumberUtils_1.NumberUtils.isStringInteger(startAsString)) {
                throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f \'" + token.v + "\' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043a \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443 \'" + startAsString + "\'.");
            }
            var tempStart = parseInt(startAsString);
            start = tempStart >= 0 ? tempStart : 0;
        }
        catch (e) {
            throw new ComputingException_1.ComputingException("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u043e \u0432\u0442\u043e\u0440\u043e\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0435 \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\'.", e);
        }
        if (token.a.length === 3) {
            try {
                var lengthAsBig = this.getNumberArgumentValue(token, 2, iContext);
                var lengthAsString = NumberUtils_1.NumberUtils.getStringRepresentation(lengthAsBig);
                if (!NumberUtils_1.NumberUtils.isStringInteger(lengthAsString)) {
                    throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f \'" + token.v + "\' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043a \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443 \'" + lengthAsString + "\'.");
                }
                length = /* parseInt */ parseInt(lengthAsString);
            }
            catch (e) {
                throw new ComputingException_1.ComputingException("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432 \u0442\u0440\u0435\u0442\u044c\u0435\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0435 \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\'.", e);
            }
        }
        else {
            length = sourceStringLength;
        }
        if (start >= sourceStringLength || length <= 0) {
            return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.STRING, "");
        }
        var tempEnd = start + length;
        end = tempEnd <= sourceStringLength ? tempEnd : sourceStringLength;
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.STRING, sourceString.substring(start, end));
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    SubstrHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength < 2 || argsLength > 3) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 2 \u0438\u043b\u0438 3, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    return SubstrHandler;
}(AbstractStringHandler_1.AbstractStringHandler));
exports.SubstrHandler = SubstrHandler;
SubstrHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.string.SubstrHandler";
