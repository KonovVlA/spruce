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
exports.FoldLeftHandler = void 0;
var AbstractFoldHandler_1 = require("./AbstractFoldHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractFoldHandler
 */
var FoldLeftHandler = /** @class */ (function (_super) {
    __extends(FoldLeftHandler, _super);
    function FoldLeftHandler(interpreter) {
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
    FoldLeftHandler.prototype.getFoldHandleRunner = function (args, iContext) {
        return new FoldLeftHandler.FoldLeftHandleRunner(this, args, iContext);
    };
    return FoldLeftHandler;
}(AbstractFoldHandler_1.AbstractFoldHandler));
exports.FoldLeftHandler = FoldLeftHandler;
FoldLeftHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.FoldLeftHandler";
(function (FoldLeftHandler) {
    /**
     * Класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * @extends AbstractFoldHandler.AbstractFoldHandleRunner
     * @class
     */
    var FoldLeftHandleRunner = /** @class */ (function (_super) {
        __extends(FoldLeftHandleRunner, _super);
        function FoldLeftHandleRunner(__parent, args, iContext) {
            var _this = _super.call(this, __parent, args, iContext) || this;
            _this.__parent = __parent;
            return _this;
        }
        /**
         * Возвращает начальное значение переменной цикла в {@link #run()}.
         *
         * @return {number} начальное значение переменной цикла в {@link #run()}.
         */
        FoldLeftHandleRunner.prototype.getInitialValueOfLoopVariable = function () {
            return this.withInitial ? 0 : 1;
        };
        /**
         * Возвращает значение, которым инициализируется стартовое значение для агрегации.
         *
         * @return {*} значение, которым инициализируется стартовое значение для агрегации.
         */
        FoldLeftHandleRunner.prototype.getInitialValueOfResult = function () {
            return this.withInitial ? this.args[3] : this.getIteratingDataElement(0);
        };
        /**
         * Возвращает следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {number} следующее значение переменной цикла в {@link #run()}, основанное на текущем значении.
         */
        FoldLeftHandleRunner.prototype.getNextValueOfLoopVariable = function (i) {
            return i + 1;
        };
        /**
         * Проверяет, что цикл в {@link #run()} должен быть продолжен.
         *
         * @param {number} i текущее значение переменной цикла в {@link #run()}.
         *
         * @return {boolean} {@code true} в случае необходимости продолжения цикла в {@link #run()}, {@code false} иначе.
         */
        FoldLeftHandleRunner.prototype.shouldContinueLoop = function (i) {
            return i < this.sz;
        };
        return FoldLeftHandleRunner;
    }(AbstractFoldHandler_1.AbstractFoldHandler.AbstractFoldHandleRunner));
    FoldLeftHandler.FoldLeftHandleRunner = FoldLeftHandleRunner;
    FoldLeftHandleRunner["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.FoldLeftHandler.FoldLeftHandleRunner";
})(FoldLeftHandler = exports.FoldLeftHandler || (exports.FoldLeftHandler = {}));
exports.FoldLeftHandler = FoldLeftHandler;
