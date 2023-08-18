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
exports.MinHandler = void 0;
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var CommonUtils_1 = require("../../../../util/CommonUtils");
var StringUtils_1 = require("../../../../util/StringUtils");
var AbstractMinMaxSumAvgHandler_1 = require("./AbstractMinMaxSumAvgHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractMinMaxSumAvgHandler
 */
var MinHandler = /** @class */ (function (_super) {
    __extends(MinHandler, _super);
    function MinHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Возвращает доступные простые типы, доступные для использования в агрегатной функции.
     *
     * @return {string[]} доступные простые типы, доступные для использования в агрегатной функции.
     */
    MinHandler.prototype.getAvailableTypes = function () {
        return AbstractMinMaxSumAvgHandler_1.AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_MIN_MAX_$LI$();
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
    MinHandler.prototype.handle = function (token, iContext) {
        var minArgs = this.getArgs(token, iContext);
        var baseType = CommonUtils_1.CommonUtils.getType(/* get */ minArgs[0]);
        switch ((baseType)) {
            case TValues_1.TValues.DATETIME:
                var value1 = minArgs[0].getTime();
                for (var i = 1; i < /* size */ minArgs.length; i++) {
                    {
                        var currentValue1 = minArgs[i].getTime();
                        if (currentValue1 < value1) {
                            value1 = currentValue1;
                        }
                    }
                    ;
                }
                return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.DATETIME, new Date(value1));
            case TValues_1.TValues.NUMBER:
                var value2 = minArgs[0];
                for (var i = 1; i < /* size */ minArgs.length; i++) {
                    {
                        var currentValue2 = minArgs[i];
                        if ( /* compareTo */currentValue2.cmp(value2) < 0) {
                            value2 = currentValue2;
                        }
                    }
                    ;
                }
                return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, value2);
            default:
                var value3 = minArgs[0];
                for (var i = 1; i < /* size */ minArgs.length; i++) {
                    {
                        var currentValue3 = minArgs[i];
                        if (StringUtils_1.StringUtils.compareTo(currentValue3, value3) < 0) {
                            value3 = currentValue3;
                        }
                    }
                    ;
                }
                return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.STRING, value3);
        }
    };
    return MinHandler;
}(AbstractMinMaxSumAvgHandler_1.AbstractMinMaxSumAvgHandler));
exports.MinHandler = MinHandler;
MinHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.misc.MinHandler";
