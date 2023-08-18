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
exports.AbstractAggregateHandler = void 0;
var ComputingException_1 = require("../../../../exception/ComputingException");
var TValues_1 = require("../../../TValues");
var AbstractTokenHandler_1 = require("../../AbstractTokenHandler");
var StringUtils_1 = require("../../../../util/StringUtils");
/**
 * Абстрактный класс обработчика агрегатной функции.
 * @extends AbstractTokenHandler
 * @class
 */
var AbstractAggregateHandler = /** @class */ (function (_super) {
    __extends(AbstractAggregateHandler, _super);
    function AbstractAggregateHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Проверяет токен внутреннего идентификатора и возвращает имя внутренней переменной.
     *
     * @param {Token} token           токен вызова агрегатной функции.
     * @param {Token} internalIdToken токен внутреннего идентификатора.
     *
     * @return {string} имя внутренней переменной из токена.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    AbstractAggregateHandler.prototype.getInternalVariableName = function (token, internalIdToken) {
        if (internalIdToken == null) {
            throw new ComputingException_1.ComputingException("\u041f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0442\u043e\u043a\u0435\u043d.");
        }
        if (!StringUtils_1.StringUtils.areStringsEqual(internalIdToken.t, TValues_1.TValues.INTERNAL_ID)) {
            throw new ComputingException_1.ComputingException("\u041f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(internalIdToken.t) + "\').");
        }
        if (internalIdToken.v == null) {
            throw new ComputingException_1.ComputingException("\u041f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u0438\u043c\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439.");
        }
        if (!StringUtils_1.StringUtils.matchByRegExp(internalIdToken.v, "^\\$[a-zA-Z0-9_]+$")) {
            throw new ComputingException_1.ComputingException("\u041f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0438\u043c\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \'" + internalIdToken.v + "\'.");
        }
        return internalIdToken.v;
    };
    /**
     * Проверяет токен массива внутренних идентификаторов и возвращает имена внутренних переменных.
     *
     * @param {Token} token  токен вызова агрегатной функции.
     * @param {number} number ожидаемое количество внутренних идентификаторов в массиве.
     *
     * @return {java.lang.String[]} массив имен внутренних переменных.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    AbstractAggregateHandler.prototype.getInternalVariableNames = function (token, number) {
        var args = token.a;
        var iVars = args[1];
        if (iVars == null) {
            throw new ComputingException_1.ComputingException("\u041f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d \u043c\u0430\u0441\u0441\u0438\u0432 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445.");
        }
        if (!StringUtils_1.StringUtils.areStringsEqual(iVars.t, TValues_1.TValues.ARRAY)) {
            throw new ComputingException_1.ComputingException("\u041f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0442\u0438\u043f 2-\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043d\u0435\u0432\u0435\u0440\u0435\u043d (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(iVars.t) + "\').");
        }
        if (iVars.a == null) {
            throw new ComputingException_1.ComputingException("\u041f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d \u043c\u0430\u0441\u0441\u0438\u0432 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445.");
        }
        var iVarNames = iVars.a;
        if (iVarNames.length !== number) {
            throw new ComputingException_1.ComputingException("\u041f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0434\u043b\u0438\u043d\u0430 \u043c\u0430\u0441\u0441\u0438\u0432 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043d\u0435\u0432\u0435\u0440\u043d\u0430 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f " + number + ", \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + iVarNames.length + ").");
        }
        var variables = (function (s) { var a = []; while (s-- > 0)
            a.push(null); return a; })(number);
        var variableSet = ([]);
        for (var i = 0; i < number; i++) {
            {
                var currentName = this.getInternalVariableName(token, iVarNames[i]);
                if ( /* contains */(variableSet.indexOf((currentName)) >= 0)) {
                    throw new ComputingException_1.ComputingException("\u041f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u043d\u0430 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442 (\u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \'" + currentName + "\').");
                }
                /* add */ (function (s, e) { if (s.indexOf(e) == -1) {
                    s.push(e);
                    return true;
                }
                else {
                    return false;
                } })(variableSet, currentName);
                variables[i] = currentName;
            }
            ;
        }
        return variables;
    };
    return AbstractAggregateHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.AbstractAggregateHandler = AbstractAggregateHandler;
AbstractAggregateHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.AbstractAggregateHandler";
(function (AbstractAggregateHandler) {
    /**
     * Абстрактный класс реализации выполнения основных действий функции {@link #handle(Token, List)}.
     * @class
     */
    var AbstractAggregateHandleRunner = /** @class */ (function () {
        function AbstractAggregateHandleRunner(__parent, args, iContext) {
            this.__parent = __parent;
            if (this.aggregateCallContext === undefined) {
                this.aggregateCallContext = null;
            }
            if (this.args === undefined) {
                this.args = null;
            }
            if (this.arrayExecution === undefined) {
                this.arrayExecution = false;
            }
            if (this.expression === undefined) {
                this.expression = null;
            }
            if (this.iContext === undefined) {
                this.iContext = null;
            }
            if (this.iteratingData === undefined) {
                this.iteratingData = null;
            }
            if (this.keyOfElement === undefined) {
                this.keyOfElement = null;
            }
            if (this.keyOfIndex === undefined) {
                this.keyOfIndex = null;
            }
            if (this.sz === undefined) {
                this.sz = 0;
            }
            this.iContext = iContext;
            this.args = args;
            this.iteratingData = args[0];
            this.arrayExecution = (this.iteratingData != null && (this.iteratingData instanceof Array));
            this.sz = this.getIteratingDataSize();
            var variables = args[1];
            this.keyOfIndex = variables[0];
            this.keyOfElement = variables[1];
            this.expression = args[2];
            this.aggregateCallContext = ({});
        }
        /**
         * Возвращает элемент итерируемых данных по индексу.
         *
         * @param {number} index индекс элемента, который необходимо вернуть.
         *
         * @return {*} элемент итерируемых данных по индексу.
         */
        AbstractAggregateHandleRunner.prototype.getIteratingDataElement = function (index) {
            return this.arrayExecution ? /* get */ this.iteratingData[index] : this.iteratingData.substring(index, index + 1);
        };
        /**
         * Возвращает размер итерируемых данных.
         *
         * @return {number} размер итерируемых данных.
         */
        AbstractAggregateHandleRunner.prototype.getIteratingDataSize = function () {
            return this.arrayExecution ? /* size */ this.iteratingData.length : this.iteratingData.length;
        };
        return AbstractAggregateHandleRunner;
    }());
    AbstractAggregateHandler.AbstractAggregateHandleRunner = AbstractAggregateHandleRunner;
    AbstractAggregateHandleRunner["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.AbstractAggregateHandler.AbstractAggregateHandleRunner";
})(AbstractAggregateHandler = exports.AbstractAggregateHandler || (exports.AbstractAggregateHandler = {}));
exports.AbstractAggregateHandler = AbstractAggregateHandler;
