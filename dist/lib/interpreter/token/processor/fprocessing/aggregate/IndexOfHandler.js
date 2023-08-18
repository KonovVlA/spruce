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
exports.IndexOfHandler = void 0;
var big_js_1 = require("big.js");
var FValues_1 = require("../../../FValues");
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var CommonUtils_1 = require("../../../../util/CommonUtils");
var StringUtils_1 = require("../../../../util/StringUtils");
var AbstractIndexOfHandler_1 = require("./AbstractIndexOfHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractIndexOfHandler
 */
var IndexOfHandler = /** @class */ (function (_super) {
    __extends(IndexOfHandler, _super);
    function IndexOfHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Возвращает название функции.
     *
     * @return {string} название функции.
     */
    IndexOfHandler.prototype.getFunctionName = function () {
        return FValues_1.FValues.INDEX_OF;
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
    IndexOfHandler.prototype.handle = function (token, iContext) {
        var args = this.getArguments(token, iContext);
        if (StringUtils_1.StringUtils.areStringsEqual(CommonUtils_1.CommonUtils.getType(args[0]), TValues_1.TValues.ARRAY)) {
            return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, new big_js_1.Big(new IndexOfHandler.IndexOfHandleRunner(this, args, iContext).run()));
        }
        var sourceString = args[0];
        var searchString = args[1];
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, new big_js_1.Big(args.length === 2 ? sourceString.indexOf(searchString) : sourceString.indexOf(searchString, args[2])));
    };
    return IndexOfHandler;
}(AbstractIndexOfHandler_1.AbstractIndexOfHandler));
exports.IndexOfHandler = IndexOfHandler;
IndexOfHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.IndexOfHandler";
(function (IndexOfHandler) {
    /**
     * Абстрактный класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * <p>
     * В связи со спецификой работы функции indexOf в качестве первого аргумента обрабатывает только массив.
     * @extends AbstractIndexOfHandler.AbstractIndexOfHandleRunner
     * @class
     */
    var IndexOfHandleRunner = /** @class */ (function (_super) {
        __extends(IndexOfHandleRunner, _super);
        function IndexOfHandleRunner(__parent, args, iContext) {
            var _this = _super.call(this, __parent, args, iContext) || this;
            _this.__parent = __parent;
            return _this;
        }
        /**
         * Возвращает начальное значение переменной цикла в {@link #run()}.
         *
         * @return {number} начальное значение переменной цикла в {@link #run()}.
         */
        IndexOfHandleRunner.prototype.getInitialValueOfLoopVariable = function () {
            return 0;
        };
        /**
         * Возвращает следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {number} следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         */
        IndexOfHandleRunner.prototype.getNextValueOfLoopVariable = function (i) {
            return i + 1;
        };
        /**
         * Проверяет, что цикл в {@link #run()} должен быть продолжен.
         *
         * @param {number} i      текущее значение переменной цикла в {@link #run()}.
         * @param {number} result текущее значение результата агрегации.
         *
         * @return {boolean} {@code true} в случае необходимости продолжения цикла в {@link #run()}, {@code false} иначе.
         */
        IndexOfHandleRunner.prototype.shouldContinueLoop = function (i, result) {
            return i < this.sz && result < 0;
        };
        return IndexOfHandleRunner;
    }(AbstractIndexOfHandler_1.AbstractIndexOfHandler.AbstractIndexOfHandleRunner));
    IndexOfHandler.IndexOfHandleRunner = IndexOfHandleRunner;
    IndexOfHandleRunner["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.IndexOfHandler.IndexOfHandleRunner";
})(IndexOfHandler = exports.IndexOfHandler || (exports.IndexOfHandler = {}));
exports.IndexOfHandler = IndexOfHandler;
