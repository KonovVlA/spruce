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
exports.LastIndexOfHandler = void 0;
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
var LastIndexOfHandler = /** @class */ (function (_super) {
    __extends(LastIndexOfHandler, _super);
    function LastIndexOfHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Возвращает название функции.
     *
     * @return {string} название функции.
     */
    LastIndexOfHandler.prototype.getFunctionName = function () {
        return FValues_1.FValues.LAST_INDEX_OF;
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
    LastIndexOfHandler.prototype.handle = function (token, iContext) {
        var args = this.getArguments(token, iContext);
        if (StringUtils_1.StringUtils.areStringsEqual(CommonUtils_1.CommonUtils.getType(args[0]), TValues_1.TValues.ARRAY)) {
            return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, new big_js_1.Big(new LastIndexOfHandler.LastIndexOfHandleRunner(this, args, iContext).run()));
        }
        var sourceString = args[0];
        var searchString = args[1];
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, new big_js_1.Big(args.length === 2 ? sourceString.lastIndexOf(searchString) : StringUtils_1.StringUtils.lastIndexOf(sourceString, searchString, args[2])));
    };
    return LastIndexOfHandler;
}(AbstractIndexOfHandler_1.AbstractIndexOfHandler));
exports.LastIndexOfHandler = LastIndexOfHandler;
LastIndexOfHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.LastIndexOfHandler";
(function (LastIndexOfHandler) {
    /**
     * Абстрактный класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * <p>
     * В связи со спецификой работы функции lastIndexOf в качестве первого аргумента обрабатывает только массив.
     * @extends AbstractIndexOfHandler.AbstractIndexOfHandleRunner
     * @class
     */
    var LastIndexOfHandleRunner = /** @class */ (function (_super) {
        __extends(LastIndexOfHandleRunner, _super);
        function LastIndexOfHandleRunner(__parent, args, iContext) {
            var _this = _super.call(this, __parent, args, iContext) || this;
            _this.__parent = __parent;
            return _this;
        }
        /**
         * Возвращает начальное значение переменной цикла в {@link #run()}.
         *
         * @return {number} начальное значение переменной цикла в {@link #run()}.
         */
        LastIndexOfHandleRunner.prototype.getInitialValueOfLoopVariable = function () {
            return this.sz - 1;
        };
        /**
         * Возвращает следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {number} следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         */
        LastIndexOfHandleRunner.prototype.getNextValueOfLoopVariable = function (i) {
            return i - 1;
        };
        /**
         * Проверяет, что цикл в {@link #run()} должен быть продолжен.
         *
         * @param {number} i      текущее значение переменной цикла в {@link #run()}.
         * @param {number} result текущее значение результата агрегации.
         *
         * @return {boolean} {@code true} в случае необходимости продолжения цикла в {@link #run()}, {@code false} иначе.
         */
        LastIndexOfHandleRunner.prototype.shouldContinueLoop = function (i, result) {
            return i >= 0 && result < 0;
        };
        return LastIndexOfHandleRunner;
    }(AbstractIndexOfHandler_1.AbstractIndexOfHandler.AbstractIndexOfHandleRunner));
    LastIndexOfHandler.LastIndexOfHandleRunner = LastIndexOfHandleRunner;
    LastIndexOfHandleRunner["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.LastIndexOfHandler.LastIndexOfHandleRunner";
})(LastIndexOfHandler = exports.LastIndexOfHandler || (exports.LastIndexOfHandler = {}));
exports.LastIndexOfHandler = LastIndexOfHandler;
