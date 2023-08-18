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
exports.AvgHandler = void 0;
var big_js_1 = require("big.js");
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
var AvgHandler = /** @class */ (function (_super) {
    __extends(AvgHandler, _super);
    function AvgHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Возвращает доступные простые типы, доступные для использования в агрегатной функции.
     *
     * @return {string[]} доступные простые типы, доступные для использования в агрегатной функции.
     */
    AvgHandler.prototype.getAvailableTypes = function () {
        return AbstractMinMaxSumAvgHandler_1.AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_AVG_$LI$();
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
    AvgHandler.prototype.handle = function (token, iContext) {
        var avgArgs = this.getArgs(token, iContext);
        var baseType = CommonUtils_1.CommonUtils.getType(/* get */ avgArgs[0]);
        if (StringUtils_1.StringUtils.areStringsEqual(TValues_1.TValues.DATETIME, baseType)) {
            var value_1 = new big_js_1.Big(avgArgs[0].getTime());
            for (var i = 1; i < /* size */ avgArgs.length; i++) {
                {
                    var currentValue1 = new big_js_1.Big(avgArgs[i].getTime());
                    value_1 = NumberUtils_1.NumberUtils.plus(value_1, currentValue1);
                }
                ;
            }
            value_1 = NumberUtils_1.NumberUtils.floor(NumberUtils_1.NumberUtils.divide(value_1, new big_js_1.Big(/* size */ avgArgs.length)));
            return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.DATETIME, new Date(new Number(NumberUtils_1.NumberUtils.getStringRepresentation(value_1)).valueOf()));
        }
        var value = avgArgs[0];
        for (var i = 1; i < /* size */ avgArgs.length; i++) {
            {
                value = NumberUtils_1.NumberUtils.plus(value, avgArgs[i]);
            }
            ;
        }
        value = NumberUtils_1.NumberUtils.divide(value, new big_js_1.Big(/* size */ avgArgs.length));
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, value);
    };
    return AvgHandler;
}(AbstractMinMaxSumAvgHandler_1.AbstractMinMaxSumAvgHandler));
exports.AvgHandler = AvgHandler;
AvgHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.misc.AvgHandler";
