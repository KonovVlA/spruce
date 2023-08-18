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
exports.SumHandler = void 0;
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var CommonUtils_1 = require("../../../../util/CommonUtils");
var NumberUtils_1 = require("../../../../util/NumberUtils");
var StringUtils_1 = require("../../../../util/StringUtils");
var AbstractMinMaxSumAvgHandler_1 = require("./AbstractMinMaxSumAvgHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractMinMaxSumAvgHandler
 */
var SumHandler = /** @class */ (function (_super) {
    __extends(SumHandler, _super);
    function SumHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Возвращает доступные простые типы, доступные для использования в агрегатной функции.
     *
     * @return {string[]} доступные простые типы, доступные для использования в агрегатной функции.
     */
    SumHandler.prototype.getAvailableTypes = function () {
        return AbstractMinMaxSumAvgHandler_1.AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_SUM_$LI$();
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
    SumHandler.prototype.handle = function (token, iContext) {
        var sumArgs = this.getArgs(token, iContext);
        var baseType = CommonUtils_1.CommonUtils.getType(/* get */ sumArgs[0]);
        if (StringUtils_1.StringUtils.areStringsEqual(TValues_1.TValues.NUMBER, baseType)) {
            var value = sumArgs[0];
            for (var i = 1; i < /* size */ sumArgs.length; i++) {
                {
                    value = NumberUtils_1.NumberUtils.plus(value, sumArgs[i]);
                }
                ;
            }
            return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, value);
        }
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.STRING, StringUtils_1.StringUtils.concat(sumArgs));
    };
    return SumHandler;
}(AbstractMinMaxSumAvgHandler_1.AbstractMinMaxSumAvgHandler));
exports.SumHandler = SumHandler;
SumHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.misc.SumHandler";
