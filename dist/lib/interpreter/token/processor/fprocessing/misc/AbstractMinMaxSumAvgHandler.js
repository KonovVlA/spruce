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
exports.AbstractMinMaxSumAvgHandler = void 0;
var ComputingException_1 = require("../../../../exception/ComputingException");
var ValidationException_1 = require("../../../../exception/ValidationException");
var TValues_1 = require("../../../TValues");
var AbstractTokenHandler_1 = require("../../AbstractTokenHandler");
var CommonUtils_1 = require("../../../../util/CommonUtils");
var StringUtils_1 = require("../../../../util/StringUtils");
/**
 * Абстрактный класс обработчика токена встроенной агрегатной функции.
 * @extends AbstractTokenHandler
 * @class
 */
var AbstractMinMaxSumAvgHandler = /** @class */ (function (_super) {
    __extends(AbstractMinMaxSumAvgHandler, _super);
    function AbstractMinMaxSumAvgHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_AVG_$LI$ = function () { if (AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_AVG == null) {
        AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_AVG = AbstractMinMaxSumAvgHandler.initAvailableTypesAvg();
    } return AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_AVG; };
    AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_MIN_MAX_$LI$ = function () { if (AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_MIN_MAX == null) {
        AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_MIN_MAX = AbstractMinMaxSumAvgHandler.initAvailableTypesMinMax();
    } return AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_MIN_MAX; };
    AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_SUM_$LI$ = function () { if (AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_SUM == null) {
        AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_SUM = AbstractMinMaxSumAvgHandler.initAvailableTypesSum();
    } return AbstractMinMaxSumAvgHandler.AVAILABLE_TYPES_SUM; };
    /**
     * Инициализирует доступные простые типы, доступные для использования в агрегатной функции avg.
     *
     * @return {string[]} доступные простые типы, доступные для использования в агрегатной функции avg.
     * @private
     */
    /*private*/ AbstractMinMaxSumAvgHandler.initAvailableTypesAvg = function () {
        var types = ([]);
        /* add */ (types.push(TValues_1.TValues.DATETIME) > 0);
        /* add */ (types.push(TValues_1.TValues.NUMBER) > 0);
        return types;
    };
    /**
     * Инициализирует доступные простые типы, доступные для использования в агрегатных функциях min и max.
     *
     * @return {string[]} доступные простые типы, доступные для использования в агрегатных функциях min и max.
     * @private
     */
    /*private*/ AbstractMinMaxSumAvgHandler.initAvailableTypesMinMax = function () {
        var types = ([]);
        /* add */ (types.push(TValues_1.TValues.DATETIME) > 0);
        /* add */ (types.push(TValues_1.TValues.NUMBER) > 0);
        /* add */ (types.push(TValues_1.TValues.STRING) > 0);
        return types;
    };
    /**
     * Инициализирует доступные простые типы, доступные для использования в агрегатной функции sum.
     *
     * @return {string[]} доступные простые типы, доступные для использования в агрегатной функции sum.
     * @private
     */
    /*private*/ AbstractMinMaxSumAvgHandler.initAvailableTypesSum = function () {
        var types = ([]);
        /* add */ (types.push(TValues_1.TValues.NUMBER) > 0);
        /* add */ (types.push(TValues_1.TValues.STRING) > 0);
        return types;
    };
    /**
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {*[]} результат обработки токена.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    AbstractMinMaxSumAvgHandler.prototype.getArgs = function (token, iContext) {
        var args = token.a;
        var firstArgument = this.interpreter.getTProcessor().interpret(args[0], iContext);
        var argsList;
        var baseType;
        if (StringUtils_1.StringUtils.areStringsEqual(firstArgument.t, TValues_1.TValues.ARRAY)) {
            if (args.length > 1) {
                throw new ComputingException_1.ComputingException("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' (\u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0438 \u043f\u0435\u0440\u0432\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 - \u043c\u0430\u0441\u0441\u0438\u0432).");
            }
            argsList = firstArgument.v;
            if ( /* isEmpty */(argsList.length == 0)) {
                throw new ComputingException_1.ComputingException("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' (\u043f\u0443\u0441\u0442\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430).");
            }
            baseType = CommonUtils_1.CommonUtils.getType(/* get */ argsList[0]);
            if (!(this.getAvailableTypes().indexOf((baseType)) >= 0)) {
                throw new ComputingException_1.ComputingException("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' (\u043f\u0435\u0440\u0432\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0442\u0438\u043f \'" + TValues_1.TValues.getTypeNameOrType(baseType) + "\').");
            }
            for (var i = 0; i < /* size */ argsList.length; i++) {
                {
                    var argType = CommonUtils_1.CommonUtils.getType(/* get */ argsList[i]);
                    if (!StringUtils_1.StringUtils.areStringsEqual(argType, baseType)) {
                        throw new ComputingException_1.ComputingException("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' (\u0432\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \'" + TValues_1.TValues.getTypeNameOrType(baseType) + "\', \u043d\u043e " + i + "-\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f \'" + TValues_1.TValues.getTypeNameOrType(argType) + "\' ).");
                    }
                }
                ;
            }
        }
        else {
            baseType = firstArgument.t;
            if (!(this.getAvailableTypes().indexOf((baseType)) >= 0)) {
                throw new ComputingException_1.ComputingException("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' (\u043f\u0435\u0440\u0432\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0442\u0438\u043f \'" + TValues_1.TValues.getTypeNameOrType(baseType) + "\').");
            }
            argsList = ([]);
            /* add */ (argsList.push(firstArgument.v) > 0);
            for (var i = 1; i < args.length; i++) {
                {
                    var it_1 = this.interpreter.getTProcessor().interpret(args[i], iContext);
                    if (!StringUtils_1.StringUtils.areStringsEqual(it_1.t, baseType)) {
                        throw new ComputingException_1.ComputingException("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' (\u0432\u0441\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \'" + TValues_1.TValues.getTypeNameOrType(baseType) + "\', \u043d\u043e " + i + "-\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u0442\u0438\u043f \'" + TValues_1.TValues.getTypeNameOrType(it_1.t) + "\' ).");
                    }
                    /* add */ (argsList.push(it_1.v) > 0);
                }
                ;
            }
        }
        return argsList;
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. возвращающие значение данной группы функций может быть только числом.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractMinMaxSumAvgHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
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
    AbstractMinMaxSumAvgHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength === 0) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u0443\u0441\u0442.");
        }
    };
    return AbstractMinMaxSumAvgHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.AbstractMinMaxSumAvgHandler = AbstractMinMaxSumAvgHandler;
AbstractMinMaxSumAvgHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.misc.AbstractMinMaxSumAvgHandler";
