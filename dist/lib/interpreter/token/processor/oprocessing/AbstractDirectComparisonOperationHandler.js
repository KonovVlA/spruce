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
exports.AbstractDirectComparisonOperationHandler = void 0;
var TValues_1 = require("../../TValues");
var BooleanToString_1 = require("../converters/BooleanToString");
var DatetimeToNumber_1 = require("../converters/DatetimeToNumber");
var DatetimeToString_1 = require("../converters/DatetimeToString");
var NoOp_1 = require("../converters/NoOp");
var NumberToDatetime_1 = require("../converters/NumberToDatetime");
var NumberToString_1 = require("../converters/NumberToString");
var StringToBoolean_1 = require("../converters/StringToBoolean");
var StringToDatetime_1 = require("../converters/StringToDatetime");
var StringToNumber_1 = require("../converters/StringToNumber");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var CommonUtils_1 = require("../../../util/CommonUtils");
var StringUtils_1 = require("../../../util/StringUtils");
var AbstractBinaryOperationTokenHandler_1 = require("./AbstractBinaryOperationTokenHandler");
/**
 * Класс обработчика операции сравнения на равно/неравно.
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
var AbstractDirectComparisonOperationHandler = /** @class */ (function (_super) {
    __extends(AbstractDirectComparisonOperationHandler, _super);
    function AbstractDirectComparisonOperationHandler(interpreter, operation) {
        return _super.call(this, interpreter, operation) || this;
    }
    AbstractDirectComparisonOperationHandler.AVAILABILITY_MAP_$LI$ = function () { if (AbstractDirectComparisonOperationHandler.AVAILABILITY_MAP == null) {
        AbstractDirectComparisonOperationHandler.AVAILABILITY_MAP = AbstractDirectComparisonOperationHandler.getAvailabilityMap();
    } return AbstractDirectComparisonOperationHandler.AVAILABILITY_MAP; };
    /**
     * Проверяет, что два значения во внутреннем представлении интерпретатора равны. Оба значения должны быть приведены
     * к одному типу, передаваемому в качестве аргумента.
     *
     * @param {*} leftValue  левый аргумент операции сравнения.
     * @param {*} rightValue правый аргумент операции сравнения.
     * @param {string} type       тип операндов.
     *
     * @return {boolean} {@code true} в случае равенства, {@code false} иначе.
     */
    AbstractDirectComparisonOperationHandler.areEqual = function (leftValue, rightValue, type) {
        if (leftValue == null || rightValue == null) {
            return leftValue === rightValue;
        }
        switch ((type)) {
            case TValues_1.TValues.NUMBER:
                var l1 = leftValue;
                var r1 = rightValue;
                return /* compareTo */ l1.cmp(r1) === 0;
            case TValues_1.TValues.STRING:
                var l2 = leftValue;
                var r2 = rightValue;
                return StringUtils_1.StringUtils.areStringsEqual(l2, r2);
            case TValues_1.TValues.BOOLEAN:
                var l3 = leftValue;
                var r3 = rightValue;
                return l3 === r3;
            case TValues_1.TValues.DATETIME:
                var l4 = leftValue;
                var r4 = rightValue;
                return l4.getTime() === r4.getTime();
            case TValues_1.TValues.OBJECT:
                var l5 = leftValue;
                var r5 = rightValue;
                var leftKeys = Object.keys(l5);
                var rightKeys = Object.keys(r5);
                if ( /* size */leftKeys.length === /* size */ rightKeys.length) {
                    for (var index = 0; index < leftKeys.length; index++) {
                        var key = leftKeys[index];
                        {
                            if (!(rightKeys.indexOf((key)) >= 0)) {
                                return false;
                            }
                        }
                    }
                    for (var index = 0; index < leftKeys.length; index++) {
                        var key = leftKeys[index];
                        {
                            var comparisonOperands = AbstractDirectComparisonOperationHandler.getComparisonOperands((CollectionUtils_1.CollectionUtils.get(l5, key)), (CollectionUtils_1.CollectionUtils.get(r5, key)));
                            if (comparisonOperands != null) {
                                if (!AbstractDirectComparisonOperationHandler.areEqual(comparisonOperands[0], comparisonOperands[1], comparisonOperands[2])) {
                                    return false;
                                }
                            }
                            else {
                                return false;
                            }
                        }
                    }
                    return true;
                }
                return false;
            default:
                var l6 = leftValue;
                var r6 = rightValue;
                var sz = l6.length;
                if (sz === /* size */ r6.length) {
                    for (var i = 0; i < sz; i++) {
                        {
                            var comparisonOperands = AbstractDirectComparisonOperationHandler.getComparisonOperands(/* get */ l6[i], /* get */ r6[i]);
                            if (comparisonOperands != null) {
                                if (!AbstractDirectComparisonOperationHandler.areEqual(comparisonOperands[0], comparisonOperands[1], comparisonOperands[2])) {
                                    return false;
                                }
                            }
                            else {
                                return false;
                            }
                        }
                        ;
                    }
                    return true;
                }
                return false;
        }
    };
    /**
     * Возвращает операнды, подготовленные к выполнению сравнения на равенство/неравенство.
     *
     * @param {*} leftValue  левый операнд.
     * @param {*} rightValue правый операнд.
     *
     * @return {java.lang.Object[]} массив из левого и правого операндов и типа операндов, если входные значения сравнимы, {@code null}
     * иначе.
     */
    AbstractDirectComparisonOperationHandler.getComparisonOperands = function (leftValue, rightValue) {
        var leftType = CommonUtils_1.CommonUtils.getType(leftValue);
        var rightType = CommonUtils_1.CommonUtils.getType(rightValue);
        try {
            var converter = (CollectionUtils_1.CollectionUtils.get((CollectionUtils_1.CollectionUtils.get(AbstractDirectComparisonOperationHandler.AVAILABILITY_MAP_$LI$(), leftType)), rightType));
            return [leftValue, converter.convert(rightValue), leftType];
        }
        catch (e) {
            return null;
        }
    };
    /**
     * Инициализирует матрицу применимости операции относительно типов аргументов.
     *
     * @return {*} матрица применимости операции относительно типов аргументов.
     * @private
     */
    /*private*/ AbstractDirectComparisonOperationHandler.getAvailabilityMap = function () {
        var map = ({});
        var arrayMap = ({});
        var booleanMap = ({});
        var datetimeMap = ({});
        var nullMap = ({});
        var numberMap = ({});
        var objectMap = ({});
        var stringMap = ({});
        /* put */ (arrayMap[TValues_1.TValues.ARRAY] = NoOp_1.NoOp.getInstance());
        /* put */ (arrayMap[TValues_1.TValues.NULL] = NoOp_1.NoOp.getInstance());
        /* put */ (booleanMap[TValues_1.TValues.BOOLEAN] = NoOp_1.NoOp.getInstance());
        /* put */ (booleanMap[TValues_1.TValues.NULL] = NoOp_1.NoOp.getInstance());
        /* put */ (booleanMap[TValues_1.TValues.STRING] = StringToBoolean_1.StringToBoolean.getInstance());
        /* put */ (datetimeMap[TValues_1.TValues.DATETIME] = NoOp_1.NoOp.getInstance());
        /* put */ (datetimeMap[TValues_1.TValues.NULL] = NoOp_1.NoOp.getInstance());
        /* put */ (datetimeMap[TValues_1.TValues.NUMBER] = NumberToDatetime_1.NumberToDatetime.getInstance());
        /* put */ (datetimeMap[TValues_1.TValues.STRING] = StringToDatetime_1.StringToDatetime.getInstance());
        /* put */ (nullMap[TValues_1.TValues.NULL] = NoOp_1.NoOp.getInstance());
        /* put */ (nullMap[TValues_1.TValues.NUMBER] = NoOp_1.NoOp.getInstance());
        /* put */ (nullMap[TValues_1.TValues.STRING] = NoOp_1.NoOp.getInstance());
        /* put */ (nullMap[TValues_1.TValues.BOOLEAN] = NoOp_1.NoOp.getInstance());
        /* put */ (nullMap[TValues_1.TValues.DATETIME] = NoOp_1.NoOp.getInstance());
        /* put */ (nullMap[TValues_1.TValues.ARRAY] = NoOp_1.NoOp.getInstance());
        /* put */ (nullMap[TValues_1.TValues.OBJECT] = NoOp_1.NoOp.getInstance());
        /* put */ (numberMap[TValues_1.TValues.NUMBER] = NoOp_1.NoOp.getInstance());
        /* put */ (numberMap[TValues_1.TValues.NULL] = NoOp_1.NoOp.getInstance());
        /* put */ (numberMap[TValues_1.TValues.STRING] = StringToNumber_1.StringToNumber.getInstance());
        /* put */ (numberMap[TValues_1.TValues.DATETIME] = DatetimeToNumber_1.DatetimeToNumber.getInstance());
        /* put */ (objectMap[TValues_1.TValues.OBJECT] = NoOp_1.NoOp.getInstance());
        /* put */ (objectMap[TValues_1.TValues.NULL] = NoOp_1.NoOp.getInstance());
        /* put */ (stringMap[TValues_1.TValues.STRING] = NoOp_1.NoOp.getInstance());
        /* put */ (stringMap[TValues_1.TValues.NULL] = NoOp_1.NoOp.getInstance());
        /* put */ (stringMap[TValues_1.TValues.NUMBER] = NumberToString_1.NumberToString.getInstance());
        /* put */ (stringMap[TValues_1.TValues.BOOLEAN] = BooleanToString_1.BooleanToString.getInstance());
        /* put */ (stringMap[TValues_1.TValues.DATETIME] = DatetimeToString_1.DatetimeToString.getInstance());
        /* put */ (map[TValues_1.TValues.ARRAY] = arrayMap);
        /* put */ (map[TValues_1.TValues.BOOLEAN] = booleanMap);
        /* put */ (map[TValues_1.TValues.DATETIME] = datetimeMap);
        /* put */ (map[TValues_1.TValues.NULL] = nullMap);
        /* put */ (map[TValues_1.TValues.NUMBER] = numberMap);
        /* put */ (map[TValues_1.TValues.OBJECT] = objectMap);
        /* put */ (map[TValues_1.TValues.STRING] = stringMap);
        return map;
    };
    /**
     * Проверяет доступность операции относительно типов аргументов и возвращает соответствующий конвертер правого
     * аргумента.
     *
     * @param {InterpreterToken} leftToken  левый аргумент.
     * @param {InterpreterToken} rightToken правый аргумент.
     *
     * @return {AbstractConverter} конвертер правого аргумента.
     */
    AbstractDirectComparisonOperationHandler.prototype.getConverter = function (leftToken, rightToken) {
        return (CollectionUtils_1.CollectionUtils.get((CollectionUtils_1.CollectionUtils.get(AbstractDirectComparisonOperationHandler.AVAILABILITY_MAP_$LI$(), leftToken.t)), rightToken.t));
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true}, т.к. результатом сравнения на равно/неравно может быть только логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractDirectComparisonOperationHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return true;
    };
    return AbstractDirectComparisonOperationHandler;
}(AbstractBinaryOperationTokenHandler_1.AbstractBinaryOperationTokenHandler));
exports.AbstractDirectComparisonOperationHandler = AbstractDirectComparisonOperationHandler;
AbstractDirectComparisonOperationHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.AbstractDirectComparisonOperationHandler";
