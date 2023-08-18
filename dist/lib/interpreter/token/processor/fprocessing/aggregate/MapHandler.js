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
exports.MapHandler = void 0;
var AbstractThreeArgAggregateHandler_1 = require("./AbstractThreeArgAggregateHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractThreeArgAggregateHandler
 */
var MapHandler = /** @class */ (function (_super) {
    __extends(MapHandler, _super);
    function MapHandler(interpreter) {
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
    MapHandler.prototype.getThreeArgAggregateHandleRunner = function (args, iContext) {
        return new MapHandler.MapHandleRunner(this, args, iContext);
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
    MapHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    return MapHandler;
}(AbstractThreeArgAggregateHandler_1.AbstractThreeArgAggregateHandler));
exports.MapHandler = MapHandler;
MapHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.MapHandler";
(function (MapHandler) {
    /**
     * Класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * @extends AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner
     * @class
     */
    var MapHandleRunner = /** @class */ (function (_super) {
        __extends(MapHandleRunner, _super);
        function MapHandleRunner(__parent, args, iContext) {
            var _this = _super.call(this, __parent, args, iContext) || this;
            _this.__parent = __parent;
            return _this;
        }
        /**
         * Возвращает начальное значение результата агрегации.
         *
         * @return {*} начальное значение результата агрегации.
         */
        MapHandleRunner.prototype.getInitialValueOfResult = function () {
            return ([]);
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
        MapHandleRunner.prototype.runIteration = function (result, currentElement, i) {
            /* add */ (result.push(this.__parent.interpreter.getTProcessor().interpret(this.expression, this.iContext).v) > 0);
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
        MapHandleRunner.prototype.shouldContinueLoop = function (i, result) {
            return i < this.sz;
        };
        return MapHandleRunner;
    }(AbstractThreeArgAggregateHandler_1.AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner));
    MapHandler.MapHandleRunner = MapHandleRunner;
    MapHandleRunner["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.MapHandler.MapHandleRunner";
})(MapHandler = exports.MapHandler || (exports.MapHandler = {}));
exports.MapHandler = MapHandler;
