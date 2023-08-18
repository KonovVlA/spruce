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
exports.AbstractThreeArgAggregateHandler = void 0;
var big_js_1 = require("big.js");
var ComputingException_1 = require("../../../../exception/ComputingException");
var ValidationException_1 = require("../../../../exception/ValidationException");
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var CommonUtils_1 = require("../../../../util/CommonUtils");
var StringUtils_1 = require("../../../../util/StringUtils");
var AbstractAggregateHandler_1 = require("./AbstractAggregateHandler");
/**
 * Абстрактный класс обработчика агрегатной функции трех аргументов (массив/строка, 2 внутренние переменные,
 * выражение).
 * @extends AbstractAggregateHandler
 * @class
 */
var AbstractThreeArgAggregateHandler = /** @class */ (function (_super) {
    __extends(AbstractThreeArgAggregateHandler, _super);
    function AbstractThreeArgAggregateHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Вычисляет значения аргументов вызова агрегатной функции (массив/строка - вычисляется, имена переменных -
     * выделяются из входного массива, выражение - остается без изменений).
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
    AbstractThreeArgAggregateHandler.prototype.getArguments = function (token, iContext) {
        var variables = this.getInternalVariableNames(token, 2);
        var arrayToken = this.interpreter.getTProcessor().interpret(token.a[0], iContext);
        var arrayTokenType = arrayToken.t;
        if (!(StringUtils_1.StringUtils.areStringsEqual(arrayTokenType, TValues_1.TValues.ARRAY) || StringUtils_1.StringUtils.areStringsEqual(arrayTokenType, TValues_1.TValues.STRING))) {
            throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f 1-\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u043b\u0438 \u0441\u0442\u0440\u043e\u043a\u0430, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(arrayTokenType) + "\').");
        }
        return [arrayToken.v, variables, token.a[2]];
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
    AbstractThreeArgAggregateHandler.prototype.handle = function (token, iContext) {
        var result = this.getThreeArgAggregateHandleRunner(this.getArguments(token, iContext), iContext).run();
        return new InterpreterToken_1.InterpreterToken(CommonUtils_1.CommonUtils.getType(result), result);
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractThreeArgAggregateHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength !== 3) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 3, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    return AbstractThreeArgAggregateHandler;
}(AbstractAggregateHandler_1.AbstractAggregateHandler));
exports.AbstractThreeArgAggregateHandler = AbstractThreeArgAggregateHandler;
AbstractThreeArgAggregateHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.AbstractThreeArgAggregateHandler";
(function (AbstractThreeArgAggregateHandler) {
    /**
     * Абстрактный класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * @extends AbstractAggregateHandler.AbstractAggregateHandleRunner
     * @class
     */
    var AbstractThreeArgAggregateHandleRunner = /** @class */ (function (_super) {
        __extends(AbstractThreeArgAggregateHandleRunner, _super);
        function AbstractThreeArgAggregateHandleRunner(__parent, args, iContext) {
            var _this = _super.call(this, __parent, args, iContext) || this;
            _this.__parent = __parent;
            return _this;
        }
        /**
         * Выполняет вычисление значения функции.
         *
         * @return {*} значение функции.
         *
         * @throws ValidationException в случае обнаружения ошибки в данных токена.
         * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
         */
        AbstractThreeArgAggregateHandleRunner.prototype.run = function () {
            /* add */ (this.iContext.push(this.aggregateCallContext) > 0);
            try {
                var result = this.getInitialValueOfResult();
                for (var i = 0; this.shouldContinueLoop(i, result); i++) {
                    {
                        var currentElement = this.getIteratingDataElement(i);
                        /* put */ (this.aggregateCallContext[this.keyOfIndex] = new big_js_1.Big(i));
                        /* put */ (this.aggregateCallContext[this.keyOfElement] = currentElement);
                        result = this.runIteration(result, currentElement, i);
                    }
                    ;
                }
                return result;
            }
            finally {
                /* remove */ this.iContext.splice(/* size */ this.iContext.length - 1, 1)[0];
            }
        };
        return AbstractThreeArgAggregateHandleRunner;
    }(AbstractAggregateHandler_1.AbstractAggregateHandler.AbstractAggregateHandleRunner));
    AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner = AbstractThreeArgAggregateHandleRunner;
    AbstractThreeArgAggregateHandleRunner["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.AbstractThreeArgAggregateHandler.AbstractThreeArgAggregateHandleRunner";
})(AbstractThreeArgAggregateHandler = exports.AbstractThreeArgAggregateHandler || (exports.AbstractThreeArgAggregateHandler = {}));
exports.AbstractThreeArgAggregateHandler = AbstractThreeArgAggregateHandler;
