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
exports.FoldRightHandler = void 0;
var AbstractFoldHandler_1 = require("./AbstractFoldHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractFoldHandler
 */
var FoldRightHandler = /** @class */ (function (_super) {
    __extends(FoldRightHandler, _super);
    function FoldRightHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Возвращает экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     *
     * @param {java.lang.Object[]} args     аргументы вызова функции.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {AbstractFoldHandler.AbstractFoldHandleRunner} экземпляр обработчика основных действий функции {@link #handle(Token, List)}.
     */
    FoldRightHandler.prototype.getFoldHandleRunner = function (args, iContext) {
        return new FoldRightHandler.FoldRightHandleRunner(this, args, iContext);
    };
    return FoldRightHandler;
}(AbstractFoldHandler_1.AbstractFoldHandler));
exports.FoldRightHandler = FoldRightHandler;
FoldRightHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.FoldRightHandler";
(function (FoldRightHandler) {
    /**
     * Класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * @extends AbstractFoldHandler.AbstractFoldHandleRunner
     * @class
     */
    var FoldRightHandleRunner = /** @class */ (function (_super) {
        __extends(FoldRightHandleRunner, _super);
        function FoldRightHandleRunner(__parent, args, iContext) {
            var _this = _super.call(this, __parent, args, iContext) || this;
            _this.__parent = __parent;
            return _this;
        }
        /**
         * Возвращает начальное значение переменной цикла в {@link #run()}.
         *
         * @return {number} начальное значение переменной цикла в {@link #run()}.
         */
        FoldRightHandleRunner.prototype.getInitialValueOfLoopVariable = function () {
            return this.withInitial ? this.sz - 1 : this.sz - 2;
        };
        /**
         * Возвращает значение, которым инициализируется стартовое значение для агрегации.
         *
         * @return {*} значение, которым инициализируется стартовое значение для агрегации.
         */
        FoldRightHandleRunner.prototype.getInitialValueOfResult = function () {
            return this.withInitial ? this.args[3] : this.getIteratingDataElement(this.getIteratingDataSize() - 1);
        };
        /**
         * Возвращает следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {number} следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         */
        FoldRightHandleRunner.prototype.getNextValueOfLoopVariable = function (i) {
            return i - 1;
        };
        /**
         * Проверяет, что цикл в {@link #run()} должен быть продолжен.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {boolean} {@code true} в случае необходимости продолжения цикла в {@link #run()}, {@code false} иначе.
         */
        FoldRightHandleRunner.prototype.shouldContinueLoop = function (i) {
            return i >= 0;
        };
        return FoldRightHandleRunner;
    }(AbstractFoldHandler_1.AbstractFoldHandler.AbstractFoldHandleRunner));
    FoldRightHandler.FoldRightHandleRunner = FoldRightHandleRunner;
    FoldRightHandleRunner["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.FoldRightHandler.FoldRightHandleRunner";
})(FoldRightHandler = exports.FoldRightHandler || (exports.FoldRightHandler = {}));
exports.FoldRightHandler = FoldRightHandler;
