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
exports.SortHandler = void 0;
var big_js_1 = require("big.js");
var ComputingException_1 = require("../../../../exception/ComputingException");
var RuntimeComputingException_1 = require("../../../../exception/RuntimeComputingException");
var ValidationException_1 = require("../../../../exception/ValidationException");
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var CollectionUtils_1 = require("../../../../util/CollectionUtils");
var CommonUtils_1 = require("../../../../util/CommonUtils");
var StringUtils_1 = require("../../../../util/StringUtils");
var AbstractAggregateHandler_1 = require("./AbstractAggregateHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractAggregateHandler
 */
var SortHandler = /** @class */ (function (_super) {
    __extends(SortHandler, _super);
    function SortHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    SortHandler.AVAILABLE_SIMPLE_TYPES_$LI$ = function () { if (SortHandler.AVAILABLE_SIMPLE_TYPES == null) {
        SortHandler.AVAILABLE_SIMPLE_TYPES = SortHandler.initAvailableSimpleTypes();
    } return SortHandler.AVAILABLE_SIMPLE_TYPES; };
    SortHandler.AVAILABLE_COMPARATORS_$LI$ = function () { if (SortHandler.AVAILABLE_COMPARATORS == null) {
        SortHandler.AVAILABLE_COMPARATORS = SortHandler.initAvailableComparators();
    } return SortHandler.AVAILABLE_COMPARATORS; };
    /**
     * Инициализирует матрицу доступных компараторов простых типов.
     *
     * @return {*} матрица доступных компараторов простых типов.
     * @private
     */
    SortHandler.initAvailableComparators = function () {
        var result = ({});
        /* put */ (result[TValues_1.TValues.DATETIME + "_" + SortHandler.ORDER_ASC] = new SortHandler.DatetimeAscComparator());
        /* put */ (result[TValues_1.TValues.DATETIME + "_" + SortHandler.ORDER_DESC] = new SortHandler.DatetimeDescComparator());
        /* put */ (result[TValues_1.TValues.NUMBER + "_" + SortHandler.ORDER_ASC] = new SortHandler.NumberAscComparator());
        /* put */ (result[TValues_1.TValues.NUMBER + "_" + SortHandler.ORDER_DESC] = new SortHandler.NumberDescComparator());
        /* put */ (result[TValues_1.TValues.STRING + "_" + SortHandler.ORDER_ASC] = new SortHandler.StringAscComparator());
        /* put */ (result[TValues_1.TValues.STRING + "_" + SortHandler.ORDER_DESC] = new SortHandler.StringDescComparator());
        return result;
    };
    /**
     * Инициализирует массив доступных простых типов для сортировки.
     *
     * @return {string[]} массив доступных простых типов для сортировки.
     * @private
     */
    SortHandler.initAvailableSimpleTypes = function () {
        var result = ([]);
        /* add */ (result.push(TValues_1.TValues.STRING) > 0);
        /* add */ (result.push(TValues_1.TValues.NUMBER) > 0);
        /* add */ (result.push(TValues_1.TValues.DATETIME) > 0);
        return result;
    };
    /**
     * Вычисляет значения аргументов вызова агрегатной функции.
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
    SortHandler.prototype.getArguments = function (token, iContext) {
        var arrayToken = this.interpreter.getTProcessor().interpret(token.a[0], iContext);
        if (!StringUtils_1.StringUtils.areStringsEqual(arrayToken.t, TValues_1.TValues.ARRAY)) {
            throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(arrayToken.t) + "\').");
        }
        var array = arrayToken.v;
        if (token.a.length <= 2) {
            var sz = array.length;
            if (sz > 0) {
                var baseType = CommonUtils_1.CommonUtils.getType(/* get */ array[0]);
                if (!(SortHandler.AVAILABLE_SIMPLE_TYPES_$LI$().indexOf((baseType)) >= 0)) {
                    throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043f\u0435\u0440\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0434\u0430\u0442\u0430, \u0447\u0438\u0441\u043b\u043e \u0438\u043b\u0438 \u0441\u0442\u0440\u043e\u043a\u0430, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(baseType) + "\').");
                }
                for (var i = 1; i < sz; i++) {
                    {
                        var currentElementType = CommonUtils_1.CommonUtils.getType(/* get */ array[i]);
                        if (!StringUtils_1.StringUtils.areStringsEqual(currentElementType, baseType)) {
                            throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 " + i + "-\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \'" + TValues_1.TValues.getTypeNameOrType(baseType) + "\', \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(currentElementType) + "\').");
                        }
                    }
                    ;
                }
            }
            var order = void 0;
            if (token.a.length === 2) {
                var orderToken = this.interpreter.getTProcessor().interpret(token.a[1], iContext);
                if (!StringUtils_1.StringUtils.areStringsEqual(orderToken.t, TValues_1.TValues.STRING)) {
                    throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u0438\u043f (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(orderToken.t) + "\').");
                }
                order = orderToken.v.toLowerCase();
                if (!(StringUtils_1.StringUtils.areStringsEqual(order, SortHandler.ORDER_ASC) || StringUtils_1.StringUtils.areStringsEqual(order, SortHandler.ORDER_DESC))) {
                    throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c (\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + orderToken.v + "\').");
                }
            }
            else {
                order = SortHandler.ORDER_ASC;
            }
            return [array, order];
        }
        return [array, this.getInternalVariableNames(token, 2), token.a[2]];
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
    SortHandler.prototype.handle = function (token, iContext) {
        var args = this.getArguments(token, iContext);
        var array = (CommonUtils_1.CommonUtils.deepClone(args[0]));
        if (array != null && !(array.length == 0)) {
            if (args.length === 2) {
                /* sort */ (function (l, c) { if (c.compare)
                    l.sort(function (e1, e2) { return c.compare(e1, e2); });
                else
                    l.sort(c); })(array, CollectionUtils_1.CollectionUtils.get(SortHandler.AVAILABLE_COMPARATORS_$LI$(), CommonUtils_1.CommonUtils.getType(/* get */ array[0]) + "_" + args[1]));
            }
            else {
                var variables = args[1];
                /* add */ (iContext.push({}) > 0);
                try {
                    /* sort */ (function (l, c) { if (c.compare)
                        l.sort(function (e1, e2) { return c.compare(e1, e2); });
                    else
                        l.sort(c); })(array, new SortHandler.ExpressionComparator(this.interpreter, iContext, variables[0], variables[1], args[2]));
                }
                catch (rce) {
                    throw new ComputingException_1.ComputingException(rce.message, null);
                }
                finally {
                    /* remove */ iContext.splice(/* size */ iContext.length - 1, 1)[0];
                }
            }
        }
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.ARRAY, array);
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false} т.к. данная функция может вернуть только массив.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    SortHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
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
    SortHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength < 1 || argsLength > 3) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0442 1 \u0434\u043e 3, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    /**
     * Сортировка по возрастанию.
     */
    SortHandler.ORDER_ASC = "asc";
    /**
     * Сортировка по убыванию.
     */
    SortHandler.ORDER_DESC = "desc";
    return SortHandler;
}(AbstractAggregateHandler_1.AbstractAggregateHandler));
exports.SortHandler = SortHandler;
SortHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.SortHandler";
(function (SortHandler) {
    /**
     * Компаратор даты по возрастанию.
     * @class
     */
    var DatetimeAscComparator = /** @class */ (function () {
        function DatetimeAscComparator() {
        }
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        DatetimeAscComparator.prototype.compare = function (o1, o2) {
            var t1 = o1.getTime();
            var t2 = o2.getTime();
            return t1 > t2 ? 1 : t1 < t2 ? -1 : 0;
        };
        /**
         * Serial version UID.
         */
        DatetimeAscComparator.serialVersionUID = 5057166394249368804;
        return DatetimeAscComparator;
    }());
    SortHandler.DatetimeAscComparator = DatetimeAscComparator;
    DatetimeAscComparator["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.SortHandler.DatetimeAscComparator";
    /**
     * Компаратор даты по убыванию.
     * @class
     */
    var DatetimeDescComparator = /** @class */ (function () {
        function DatetimeDescComparator() {
        }
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        DatetimeDescComparator.prototype.compare = function (o1, o2) {
            var t1 = o1.getTime();
            var t2 = o2.getTime();
            return t1 > t2 ? -1 : t1 < t2 ? 1 : 0;
        };
        /**
         * Serial version UID.
         */
        DatetimeDescComparator.serialVersionUID = 4933109224932689700;
        return DatetimeDescComparator;
    }());
    SortHandler.DatetimeDescComparator = DatetimeDescComparator;
    DatetimeDescComparator["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.SortHandler.DatetimeDescComparator";
    /**
     * Компаратор на основе вычисляемого интерпретатором выражения.
     * @class
     */
    var ExpressionComparator = /** @class */ (function () {
        function ExpressionComparator(interpreter, iContext, leftName, rightName, expression) {
            if (this.aggregateCallContext === undefined) {
                this.aggregateCallContext = null;
            }
            if (this.expression === undefined) {
                this.expression = null;
            }
            if (this.iContext === undefined) {
                this.iContext = null;
            }
            if (this.interpreter === undefined) {
                this.interpreter = null;
            }
            if (this.leftName === undefined) {
                this.leftName = null;
            }
            if (this.rightName === undefined) {
                this.rightName = null;
            }
            this.interpreter = interpreter;
            this.iContext = iContext;
            this.aggregateCallContext = /* get */ iContext[ /* size */iContext.length - 1];
            this.leftName = leftName;
            this.rightName = rightName;
            this.expression = expression;
        }
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        ExpressionComparator.prototype.compare = function (o1, o2) {
            /* put */ (this.aggregateCallContext[this.leftName] = o1);
            /* put */ (this.aggregateCallContext[this.rightName] = o2);
            try {
                var cmpResult = this.interpreter.getTProcessor().interpret(this.expression, this.iContext);
                if (!StringUtils_1.StringUtils.areStringsEqual(cmpResult.t, TValues_1.TValues.NUMBER)) {
                    throw new ComputingException_1.ComputingException("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \'" + o1 + "\' \u0438 \'" + o2 + "\' \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0442\u0438\u043f (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u0447\u0438\u0441\u043b\u043e, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(cmpResult.t) + "\').");
                }
                return /* compareTo */ cmpResult.v.cmp(new big_js_1.Big("0"));
            }
            catch (e) {
                throw new RuntimeComputingException_1.RuntimeComputingException("\u041f\u0440\u0438 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0438 \'" + o1 + "\' \u0438 \'" + o2 + "\' \u0432 \u0445\u043e\u0434\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.", e);
            }
        };
        /**
         * Serial version UID.
         */
        ExpressionComparator.serialVersionUID = 6392828058232938877;
        return ExpressionComparator;
    }());
    SortHandler.ExpressionComparator = ExpressionComparator;
    ExpressionComparator["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.SortHandler.ExpressionComparator";
    /**
     * Компаратор числа по возрастанию.
     * @class
     */
    var NumberAscComparator = /** @class */ (function () {
        function NumberAscComparator() {
        }
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        NumberAscComparator.prototype.compare = function (o1, o2) {
            return /* compareTo */ o1.cmp(o2);
        };
        /**
         * Serial version UID.
         */
        NumberAscComparator.serialVersionUID = 4615808461480612359;
        return NumberAscComparator;
    }());
    SortHandler.NumberAscComparator = NumberAscComparator;
    NumberAscComparator["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.SortHandler.NumberAscComparator";
    /**
     * Компаратор числа по убыванию.
     * @class
     */
    var NumberDescComparator = /** @class */ (function () {
        function NumberDescComparator() {
        }
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        NumberDescComparator.prototype.compare = function (o1, o2) {
            return /* compareTo */ o2.cmp(o1);
        };
        /**
         * Serial version UID.
         */
        NumberDescComparator.serialVersionUID = 2207843390962101742;
        return NumberDescComparator;
    }());
    SortHandler.NumberDescComparator = NumberDescComparator;
    NumberDescComparator["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.SortHandler.NumberDescComparator";
    /**
     * Компаратор строки по возрастанию.
     * @class
     */
    var StringAscComparator = /** @class */ (function () {
        function StringAscComparator() {
        }
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        StringAscComparator.prototype.compare = function (o1, o2) {
            return StringUtils_1.StringUtils.compareTo(o1, o2);
        };
        /**
         * Serial version UID.
         */
        StringAscComparator.serialVersionUID = 8085053492149628928;
        return StringAscComparator;
    }());
    SortHandler.StringAscComparator = StringAscComparator;
    StringAscComparator["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.SortHandler.StringAscComparator";
    /**
     * Компаратор строки по убыванию.
     * @class
     */
    var StringDescComparator = /** @class */ (function () {
        function StringDescComparator() {
        }
        /**
         *
         * @param {*} o1
         * @param {*} o2
         * @return {number}
         */
        StringDescComparator.prototype.compare = function (o1, o2) {
            return StringUtils_1.StringUtils.compareTo(o2, o1);
        };
        /**
         * Serial version UID.
         */
        StringDescComparator.serialVersionUID = 2827128907856521112;
        return StringDescComparator;
    }());
    SortHandler.StringDescComparator = StringDescComparator;
    StringDescComparator["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.aggregate.SortHandler.StringDescComparator";
})(SortHandler = exports.SortHandler || (exports.SortHandler = {}));
exports.SortHandler = SortHandler;
