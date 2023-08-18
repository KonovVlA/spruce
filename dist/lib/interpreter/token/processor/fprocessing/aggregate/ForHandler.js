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
exports.ForHandler = void 0;
var big_js_1 = require("big.js");
var ComputingException_1 = require("../../../../exception/ComputingException");
var ValidationException_1 = require("../../../../exception/ValidationException");
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var CommonUtils_1 = require("../../../../util/CommonUtils");
var NumberUtils_1 = require("../../../../util/NumberUtils");
var StringUtils_1 = require("../../../../util/StringUtils");
var AbstractAggregateHandler_1 = require("./AbstractAggregateHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractAggregateHandler
 */
var ForHandler = /** @class */ (function (_super) {
    __extends(ForHandler, _super);
    function ForHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Вычисляет значения аргументов вызова агрегатной функции.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {java.lang.Object[]} результат вычисления значений аргументов вызова агрегатной функции.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @private
     */
    /*private*/ ForHandler.prototype.getArguments = function (token, iContext) {
        var variable = this.getInternalVariableName(token, token.a[0]);
        var startCounterToken = this.getCounterValue(token, iContext, token.a[1], true);
        var endCounterToken = this.getCounterValue(token, iContext, token.a[2], false);
        if (!StringUtils_1.StringUtils.areStringsEqual(startCounterToken.t, endCounterToken.t)) {
            throw new ComputingException_1.ComputingException("\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043d\u0435\u0432\u0435\u0440\u043d\u044b (\u0442\u0438\u043f\u044b \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u0447\u0435\u0442\u0447\u0438\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c).");
        }
        var incrementLoop = StringUtils_1.StringUtils.areStringsEqual(startCounterToken.t, TValues_1.TValues.NUMBER) ? /* compareTo */ startCounterToken.v.cmp(endCounterToken.v) <= 0 : startCounterToken.v.getTime() <= endCounterToken.v.getTime();
        var step;
        if (token.a.length === 5) {
            var stepToken = this.interpreter.getTProcessor().interpret(token.a[4], iContext);
            if (!StringUtils_1.StringUtils.areStringsEqual(stepToken.t, TValues_1.TValues.NUMBER)) {
                throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0448\u0430\u0433\u0430 \u0441\u0447\u0435\u0442\u0447\u0438\u043a\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0447\u0438\u0441\u043b\u043e, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(stepToken.t) + "\').");
            }
            step = stepToken.v;
            var stepAndZeroCompare = step.cmp(new big_js_1.Big("0"));
            if (stepAndZeroCompare === 0) {
                throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0448\u0430\u0433\u0430 \u0441\u0447\u0435\u0442\u0447\u0438\u043a\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u0435\u043d \u043d\u0443\u043b\u044e.");
            }
            var decrementStep = stepAndZeroCompare < 0;
            if ((incrementLoop && decrementStep) || (!incrementLoop && !decrementStep)) {
                throw new ComputingException_1.ComputingException("\u0412 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0448\u0430\u0433\u0430 \u0441\u0447\u0435\u0442\u0447\u0438\u043a\u0430 \u043d\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0443\u0435\u0442\u0441\u044f \u0441 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0441\u0447\u0435\u0442\u0447\u0438\u043a\u0430.");
            }
        }
        else {
            if (incrementLoop) {
                step = new big_js_1.Big(StringUtils_1.StringUtils.areStringsEqual(startCounterToken.t, TValues_1.TValues.NUMBER) ? "1" : "86400000");
            }
            else {
                step = new big_js_1.Big(StringUtils_1.StringUtils.areStringsEqual(startCounterToken.t, TValues_1.TValues.NUMBER) ? "-1" : "-86400000");
            }
        }
        return [variable, startCounterToken.v, endCounterToken.v, token.a[3], step];
    };
    /**
     * Вычисляет значение переменной счетчика (начальной или конечной).
     *
     * @param {Token} token        токен.
     * @param {*[]} iContext     внутренний контекст.
     * @param {Token} counterToken токен значения счетчика.
     * @param {boolean} start        флаг того, что вычисляется токен начального значения счетчика.
     *
     * @return {InterpreterToken} значение переменной счетчика (начальной или конечной).
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @private
     */
    /*private*/ ForHandler.prototype.getCounterValue = function (token, iContext, counterToken, start) {
        var counterValue = this.interpreter.getTProcessor().interpret(counterToken, iContext);
        if (!(StringUtils_1.StringUtils.areStringsEqual(counterValue.t, TValues_1.TValues.NUMBER) || StringUtils_1.StringUtils.areStringsEqual(counterValue.t, TValues_1.TValues.DATETIME))) {
            throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f " + (start ? "\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e" : "\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e") + " \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441\u0447\u0435\u0442\u0447\u0438\u043a\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0447\u0438\u0441\u043b\u043e \u0438\u043b\u0438 \u0434\u0430\u0442\u0430, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(counterValue.t) + "\').");
        }
        return counterValue;
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
    ForHandler.prototype.handle = function (token, iContext) {
        var args = this.getArguments(token, iContext);
        var indexKey = args[0];
        var startValue = args[1];
        var endValue = args[2];
        var expression = args[3];
        var step = args[4];
        var result = ([]);
        var aggregateCallContext = ({});
        /* add */ (iContext.push(aggregateCallContext) > 0);
        try {
            if (StringUtils_1.StringUtils.areStringsEqual(CommonUtils_1.CommonUtils.getType(startValue), TValues_1.TValues.NUMBER)) {
                var startBD = startValue;
                var endBD = endValue;
                var loopVariable = startBD;
                if ( /* compareTo */step.cmp(new big_js_1.Big("0")) > 0) {
                    while (( /* compareTo */loopVariable.cmp(endBD) <= 0)) {
                        {
                            /* put */ (aggregateCallContext[indexKey] = loopVariable);
                            /* add */ (result.push(this.interpreter.getTProcessor().interpret(expression, iContext).v) > 0);
                            loopVariable = NumberUtils_1.NumberUtils.plus(loopVariable, step);
                        }
                    }
                    ;
                }
                else {
                    while (( /* compareTo */loopVariable.cmp(endBD) >= 0)) {
                        {
                            /* put */ (aggregateCallContext[indexKey] = loopVariable);
                            /* add */ (result.push(this.interpreter.getTProcessor().interpret(expression, iContext).v) > 0);
                            loopVariable = NumberUtils_1.NumberUtils.plus(loopVariable, step);
                        }
                    }
                    ;
                }
            }
            else {
                var startD = startValue;
                var endD = endValue;
                var currentDAsBD = new big_js_1.Big(startD.getTime());
                var endDAsBD = new big_js_1.Big(endD.getTime());
                if ( /* compareTo */step.cmp(new big_js_1.Big("0")) > 0) {
                    while (( /* compareTo */currentDAsBD.cmp(endDAsBD) <= 0)) {
                        {
                            /* put */ (aggregateCallContext[indexKey] = new Date(new Number(NumberUtils_1.NumberUtils.getStringRepresentation(currentDAsBD)).valueOf()));
                            /* add */ (result.push(this.interpreter.getTProcessor().interpret(expression, iContext).v) > 0);
                            currentDAsBD = NumberUtils_1.NumberUtils.plus(currentDAsBD, step);
                        }
                    }
                    ;
                }
                else {
                    while (( /* compareTo */currentDAsBD.cmp(endDAsBD) >= 0)) {
                        {
                            /* put */ (aggregateCallContext[indexKey] = new Date(new Number(NumberUtils_1.NumberUtils.getStringRepresentation(currentDAsBD)).valueOf()));
                            /* add */ (result.push(this.interpreter.getTProcessor().interpret(expression, iContext).v) > 0);
                            currentDAsBD = NumberUtils_1.NumberUtils.plus(currentDAsBD, step);
                        }
                    }
                    ;
                }
            }
            return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.ARRAY, result);
        }
        finally {
            /* remove */ iContext.splice(/* size */ iContext.length - 1, 1)[0];
        }
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. данная функция может вернуть только массив.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    ForHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    ForHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength < 4 || argsLength > 5) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 4 \u0438\u043b\u0438 5, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    return ForHandler;
}(AbstractAggregateHandler_1.AbstractAggregateHandler));
exports.ForHandler = ForHandler;
ForHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.ForHandler";
