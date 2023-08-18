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
exports.FilterHandler = void 0;
var ComputingException_1 = require("../../../../exception/ComputingException");
var FValues_1 = require("../../../FValues");
var TValues_1 = require("../../../TValues");
var StringUtils_1 = require("../../../../util/StringUtils");
var AbstractThreeArgAggregateHandler_1 = require("./AbstractThreeArgAggregateHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractThreeArgAggregateHandler
 */
var FilterHandler = /** @class */ (function (_super) {
    __extends(FilterHandler, _super);
    function FilterHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Возвращает экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     *
     * @param {java.lang.Object[]} args     аргументы вызова функции.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner} экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     */
    FilterHandler.prototype.getThreeArgAggregateHandleRunner = function (args, iContext) {
        return new FilterHandler.FilterHandleRunner(this, args, iContext);
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. функции данной группы не могут вернуть логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    FilterHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    return FilterHandler;
}(AbstractThreeArgAggregateHandler_1.AbstractThreeArgAggregateHandler));
exports.FilterHandler = FilterHandler;
FilterHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.FilterHandler";
(function (FilterHandler) {
    /**
     * Класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * @extends AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner
     * @class
     */
    var FilterHandleRunner = /** @class */ (function (_super) {
        __extends(FilterHandleRunner, _super);
        function FilterHandleRunner(__parent, args, iContext) {
            var _this = _super.call(this, __parent, args, iContext) || this;
            _this.__parent = __parent;
            return _this;
        }
        /**
         * Возвращает начальное значение результата агрегации.
         *
         * @return {*} начальное значение результата агрегации.
         */
        FilterHandleRunner.prototype.getInitialValueOfResult = function () {
            return this.arrayExecution ? ([]) : "";
        };
        /**
         * Вычисляет значение функции на текущей итерации.
         *
         * @param {*} result         текущее значение результата агрегации.
         * @param {*} currentElement текущий элемент цикла.
         * @param {number} i              текущее значение переменной цикла в {@link #run()}.
         *
         * @return {*} значение функции на текущей итерации.
         *
         * @throws ValidationException в случае обнаружения ошибки в данных токена.
         * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
         */
        FilterHandleRunner.prototype.runIteration = function (result, currentElement, i) {
            var currentConditionResult = this.__parent.interpreter.getTProcessor().interpret(this.expression, this.iContext);
            if (!StringUtils_1.StringUtils.areStringsEqual(currentConditionResult.t, TValues_1.TValues.BOOLEAN)) {
                throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + FValues_1.FValues.FILTER + "\' \u043d\u0430 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 " + i + " \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f boolean, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(currentConditionResult.t) + "\').");
            }
            if (currentConditionResult.v) {
                if (this.arrayExecution) {
                    /* add */ (result.push(currentElement) > 0);
                    return result;
                }
                else {
                    return result + currentElement;
                }
            }
            return result;
        };
        /**
         * Проверяет, что цикл в {@link #run()} должен быть продолжен.
         *
         * @param {number} i      текущее значение переменной цикла в {@link #run()}.
         * @param {*} result текущее значение результата агрегации.
         *
         * @return {boolean} {@code true} в случае необходимости продолжения цикла в {@link #run()}, {@code false} иначе.
         */
        FilterHandleRunner.prototype.shouldContinueLoop = function (i, result) {
            return i < this.sz;
        };
        return FilterHandleRunner;
    }(AbstractThreeArgAggregateHandler_1.AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner));
    FilterHandler.FilterHandleRunner = FilterHandleRunner;
    FilterHandleRunner["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.FilterHandler.FilterHandleRunner";
})(FilterHandler = exports.FilterHandler || (exports.FilterHandler = {}));
exports.FilterHandler = FilterHandler;
