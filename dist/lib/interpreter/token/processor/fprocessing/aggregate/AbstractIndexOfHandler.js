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
exports.AbstractIndexOfHandler = void 0;
var big_js_1 = require("big.js");
var ComputingException_1 = require("../../../../exception/ComputingException");
var ValidationException_1 = require("../../../../exception/ValidationException");
var TValues_1 = require("../../../TValues");
var ConversionUtil_1 = require("../../converters/ConversionUtil");
var CollectionUtils_1 = require("../../../../util/CollectionUtils");
var NumberUtils_1 = require("../../../../util/NumberUtils");
var StringUtils_1 = require("../../../../util/StringUtils");
var AbstractAggregateHandler_1 = require("./AbstractAggregateHandler");
/**
 * Абстрактный класс обработчика функции поиска индекса элемента.
 * @extends AbstractAggregateHandler
 * @class
 */
var AbstractIndexOfHandler = /** @class */ (function (_super) {
    __extends(AbstractIndexOfHandler, _super);
    function AbstractIndexOfHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Вычисляет значения аргументов вызова агрегатной функции (массив - вычисляется, имена переменных - выделяются из
     * входного массива, выражение - остается без изменений).
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {java.lang.Object[]} результат вычисления значений аргументов вызова агрегатной функции.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    AbstractIndexOfHandler.prototype.getArguments = function (token, iContext) {
        var firstArg = this.interpreter.getTProcessor().interpret(token.a[0], iContext);
        if (StringUtils_1.StringUtils.areStringsEqual(firstArg.t, TValues_1.TValues.ARRAY)) {
            if (token.a.length === 2) {
                throw new ComputingException_1.ComputingException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u043f\u0435\u0440\u0432\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u043c (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 3, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e 2).");
            }
            var variables = this.getInternalVariableNames(token, 2);
            return [firstArg.v, variables, token.a[2]];
        }
        var sourceString;
        var searchString;
        var searchStart;
        try {
            sourceString = this.getStringArgumentValue(token, iContext, 0);
        }
        catch (e) {
            throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f 1-\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u043b\u0438 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043c\u043e\u0435 \u043a \u0441\u0442\u0440\u043e\u043a\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(firstArg.t) + "\').", e);
        }
        try {
            searchString = this.getStringArgumentValue(token, iContext, 1);
        }
        catch (e) {
            throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f 2-\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043c\u043e\u0435 \u043a \u0441\u0442\u0440\u043e\u043a\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435).", e);
        }
        if (token.a.length === 3) {
            var thirdArg = void 0;
            try {
                thirdArg = this.getNumberArgumentValue(token, iContext);
            }
            catch (e) {
                throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f 3-\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u043c\u043e\u0435 \u043a \u0447\u0438\u0441\u043b\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435).", e);
            }
            searchStart = NumberUtils_1.NumberUtils.getStringRepresentation(thirdArg);
            if (!NumberUtils_1.NumberUtils.isStringIntegerGeZero(searchStart)) {
                throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f 3-\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c (\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + searchStart + ").");
            }
            return [sourceString, searchString, /* parseInt */ parseInt(searchStart)];
        }
        return [sourceString, searchString];
    };
    /**
     * Возвращает значение числового аргумента.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {Big} значение строкового аргумента.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @private
     */
    AbstractIndexOfHandler.prototype.getNumberArgumentValue = function (token, iContext) {
        var arg = this.interpreter.getTProcessor().interpret(token.a[2], iContext);
        var converter = this.getNumberConverter(arg.t);
        if (converter != null) {
            return converter.convert(arg.v);
        }
        throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f \'" + token.v + "\' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043a 3-\u043c\u0443 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443 \u0442\u0438\u043f\u0430 \'" + TValues_1.TValues.getTypeNameOrType(arg.t) + "\'.");
    };
    /**
     * Проверяет доступность операции приведения к числу относительно типа аргумента и возвращает соответствующий
     * конвертер аргумента.
     *
     * @param {string} type тип аргумента.
     *
     * @return {AbstractConverter} конвертер аргумента, если он доступен, {@code false} если конвертер недоступен.
     * @private
     */
    AbstractIndexOfHandler.prototype.getNumberConverter = function (type) {
        return (CollectionUtils_1.CollectionUtils.get(ConversionUtil_1.ConversionUtil.getToNumberMap(), type));
    };
    /**
     * Возвращает значение строкового аргумента.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     * @param {number} index    индекс строкового аргумента.
     *
     * @return {string} значение строкового аргумента.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @private
     */
    AbstractIndexOfHandler.prototype.getStringArgumentValue = function (token, iContext, index) {
        var arg = this.interpreter.getTProcessor().interpret(token.a[index], iContext);
        var converter = this.getStringConverter(arg.t);
        if (converter != null) {
            return converter.convert(arg.v);
        }
        throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f \'" + token.v + "\' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043a " + (index + 1) + "-\u043c\u0443 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443 \u0442\u0438\u043f\u0430 \'" + TValues_1.TValues.getTypeNameOrType(arg.t) + "\'.");
    };
    /**
     * Проверяет доступность операции приведения к строке относительно типа аргумента и возвращает соответствующий
     * конвертер аргумента.
     *
     * @param {string} type тип аргумента.
     *
     * @return {AbstractConverter} конвертер аргумента, если он доступен, {@code false} если конвертер недоступен.
     * @private
     */
    AbstractIndexOfHandler.prototype.getStringConverter = function (type) {
        return (CollectionUtils_1.CollectionUtils.get(ConversionUtil_1.ConversionUtil.getToStringMap(), type));
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. функции данной группы могут вернуть только число.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractIndexOfHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
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
    AbstractIndexOfHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength < 2 || argsLength > 3) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 2 \u0438\u043b\u0438 3, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    return AbstractIndexOfHandler;
}(AbstractAggregateHandler_1.AbstractAggregateHandler));
exports.AbstractIndexOfHandler = AbstractIndexOfHandler;
AbstractIndexOfHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.AbstractIndexOfHandler";
(function (AbstractIndexOfHandler) {
    /**
     * Абстрактный класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * <p>
     * В связи со спецификой работы функций indexOf и lastIndexOf в качестве первого аргумента обрабатывает только
     * массив.
     * @extends AbstractAggregateHandler.AbstractAggregateHandleRunner
     * @class
     */
    var AbstractIndexOfHandleRunner = /** @class */ (function (_super) {
        __extends(AbstractIndexOfHandleRunner, _super);
        function AbstractIndexOfHandleRunner(__parent, args, iContext) {
            var _this = _super.call(this, __parent, args, iContext) || this;
            _this.__parent = __parent;
            return _this;
        }
        /**
         * Вычисляет значение функции на текущей итерации.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {number} значение функции на текущей итерации.
         *
         * @throws ValidationException в случае обнаружения ошибки в данных токена.
         * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
         */
        AbstractIndexOfHandleRunner.prototype.runIteration = function (i) {
            /* put */ (this.aggregateCallContext[this.keyOfIndex] = new big_js_1.Big(i));
            /* put */ (this.aggregateCallContext[this.keyOfElement] = this.getIteratingDataElement(i));
            var currentConditionResult = this.__parent.interpreter.getTProcessor().interpret(this.expression, this.iContext);
            if (!StringUtils_1.StringUtils.areStringsEqual(currentConditionResult.t, TValues_1.TValues.BOOLEAN)) {
                throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + this.__parent.getFunctionName() + "\' \u043d\u0430 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 " + i + " \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f boolean, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(currentConditionResult.t) + "\').");
            }
            return currentConditionResult.v ? i : -1;
        };
        /**
         * Возвращает начальное значение результата агрегации.
         *
         * @return {number} начальное значение результата агрегации.
         */
        AbstractIndexOfHandleRunner.prototype.getInitialValueOfResult = function () {
            return -1;
        };
        /**
         * Выполняет вычисление значения функции.
         *
         * @return {number} значение функции.
         *
         * @throws ValidationException в случае обнаружения ошибки в данных токена.
         * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
         */
        AbstractIndexOfHandleRunner.prototype.run = function () {
            /* add */ (this.iContext.push(this.aggregateCallContext) > 0);
            try {
                var result = this.getInitialValueOfResult();
                var i = this.getInitialValueOfLoopVariable();
                while ((this.shouldContinueLoop(i, result))) {
                    {
                        result = this.runIteration(i);
                        i = this.getNextValueOfLoopVariable(i);
                    }
                }
                ;
                return result;
            }
            finally {
                /* remove */ this.iContext.splice(/* size */ this.iContext.length - 1, 1)[0];
            }
        };
        return AbstractIndexOfHandleRunner;
    }(AbstractAggregateHandler_1.AbstractAggregateHandler.AbstractAggregateHandleRunner));
    AbstractIndexOfHandler.AbstractIndexOfHandleRunner = AbstractIndexOfHandleRunner;
    AbstractIndexOfHandleRunner["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.AbstractIndexOfHandler.AbstractIndexOfHandleRunner";
})(AbstractIndexOfHandler = exports.AbstractIndexOfHandler || (exports.AbstractIndexOfHandler = {}));
exports.AbstractIndexOfHandler = AbstractIndexOfHandler;
