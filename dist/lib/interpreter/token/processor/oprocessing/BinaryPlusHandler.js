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
exports.BinaryPlusHandler = void 0;
var ComputingException_1 = require("../../../exception/ComputingException");
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var TValues_1 = require("../../TValues");
var ConversionUtil_1 = require("../converters/ConversionUtil");
var NoOp_1 = require("../converters/NoOp");
var StringToNumber_1 = require("../converters/StringToNumber");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var CommonUtils_1 = require("../../../util/CommonUtils");
var NumberUtils_1 = require("../../../util/NumberUtils");
var AbstractBinaryOperationTokenHandler_1 = require("./AbstractBinaryOperationTokenHandler");
/**
 * Обработчик операции бинарный плюс.
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
var BinaryPlusHandler = /** @class */ (function (_super) {
    __extends(BinaryPlusHandler, _super);
    function BinaryPlusHandler(interpreter) {
        return _super.call(this, interpreter, OValues_1.OValues.B_PLUS) || this;
    }
    BinaryPlusHandler.AVAILABILITY_MAP_$LI$ = function () { if (BinaryPlusHandler.AVAILABILITY_MAP == null) {
        BinaryPlusHandler.AVAILABILITY_MAP = BinaryPlusHandler.getAvailabilityMap();
    } return BinaryPlusHandler.AVAILABILITY_MAP; };
    /**
     * Инициализирует матрицу применимости операции относительно типов аргументов.
     *
     * @return {*} матрица применимости операции относительно типов аргументов.
     * @private
     */
    /*private*/ BinaryPlusHandler.getAvailabilityMap = function () {
        var map = ({});
        var datetimeMap = ({});
        var objectMap = ({});
        var arrayMap = ({});
        /* put */ (datetimeMap[TValues_1.TValues.NUMBER] = NoOp_1.NoOp.getInstance());
        /* put */ (datetimeMap[TValues_1.TValues.STRING] = StringToNumber_1.StringToNumber.getInstance());
        /* put */ (objectMap[TValues_1.TValues.OBJECT] = NoOp_1.NoOp.getInstance());
        /* put */ (arrayMap[TValues_1.TValues.NUMBER] = NoOp_1.NoOp.getInstance());
        /* put */ (arrayMap[TValues_1.TValues.STRING] = NoOp_1.NoOp.getInstance());
        /* put */ (arrayMap[TValues_1.TValues.DATETIME] = NoOp_1.NoOp.getInstance());
        /* put */ (arrayMap[TValues_1.TValues.BOOLEAN] = NoOp_1.NoOp.getInstance());
        /* put */ (arrayMap[TValues_1.TValues.NULL] = NoOp_1.NoOp.getInstance());
        /* put */ (arrayMap[TValues_1.TValues.OBJECT] = NoOp_1.NoOp.getInstance());
        /* put */ (arrayMap[TValues_1.TValues.ARRAY] = NoOp_1.NoOp.getInstance());
        /* put */ (map[TValues_1.TValues.NUMBER] = ConversionUtil_1.ConversionUtil.getToNumberMap());
        /* put */ (map[TValues_1.TValues.STRING] = ConversionUtil_1.ConversionUtil.getToStringMap());
        /* put */ (map[TValues_1.TValues.DATETIME] = datetimeMap);
        /* put */ (map[TValues_1.TValues.OBJECT] = objectMap);
        /* put */ (map[TValues_1.TValues.ARRAY] = arrayMap);
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
    BinaryPlusHandler.prototype.getConverter = function (leftToken, rightToken) {
        var lValueMap = (CollectionUtils_1.CollectionUtils.get(BinaryPlusHandler.AVAILABILITY_MAP_$LI$(), leftToken.t));
        if (lValueMap != null) {
            return (CollectionUtils_1.CollectionUtils.get(lValueMap, rightToken.t));
        }
        return null;
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
    BinaryPlusHandler.prototype.handle = function (token, iContext) {
        var operands = this.getOperands(token.a, iContext);
        var leftOperand = operands[0];
        var rightOperand = operands[1];
        try {
            switch ((leftOperand.t)) {
                case TValues_1.TValues.NUMBER:
                    var l1 = leftOperand.v;
                    var r1 = rightOperand.v;
                    return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, NumberUtils_1.NumberUtils.plus(l1, r1));
                case TValues_1.TValues.STRING:
                    var l2 = leftOperand.v;
                    var r2 = rightOperand.v;
                    return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.STRING, l2 + r2);
                case TValues_1.TValues.DATETIME:
                    var l3 = leftOperand.v;
                    var r3 = rightOperand.v;
                    var r3String = NumberUtils_1.NumberUtils.getStringRepresentation(r3);
                    return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.DATETIME, new Date(l3.getTime() + new Number(r3String).valueOf()));
                case TValues_1.TValues.OBJECT:
                    var l4 = leftOperand.v;
                    var r4 = rightOperand.v;
                    var result4 = (CommonUtils_1.CommonUtils.deepClone(r4));
                    if (result4 != null) {
                        {
                            var array = /* keySet */ Object.keys(l4);
                            for (var index = 0; index < array.length; index++) {
                                var l4Key = array[index];
                                {
                                    /* put */ (result4[l4Key] = CommonUtils_1.CommonUtils.deepClone((CollectionUtils_1.CollectionUtils.get(l4, l4Key))));
                                }
                            }
                        }
                        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.OBJECT, result4);
                    }
                    throw new ComputingException_1.ComputingException("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \'" + this.operationName + "\' \u0438\u0437-\u0437\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0438 \u043a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.");
                default:
                    var l5 = leftOperand.v;
                    var result5 = (CommonUtils_1.CommonUtils.deepClone(l5));
                    if (result5 != null) {
                        if (rightOperand.v != null && (rightOperand.v instanceof Array)) {
                            {
                                var array = rightOperand.v;
                                for (var index = 0; index < array.length; index++) {
                                    var r5Item = array[index];
                                    {
                                        /* add */ (result5.push(CommonUtils_1.CommonUtils.deepClone(r5Item)) > 0);
                                    }
                                }
                            }
                        }
                        else {
                            /* add */ (result5.push(CommonUtils_1.CommonUtils.deepClone(rightOperand.v)) > 0);
                        }
                        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.ARRAY, result5);
                    }
                    throw new ComputingException_1.ComputingException("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \'" + this.operationName + "\' \u0438\u0437-\u0437\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0438 \u043a\u043b\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u0430.");
            }
        }
        catch (e) {
            throw new ComputingException_1.ComputingException("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \'" + this.operationName + "\'.", e);
        }
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false}, т.к. результатом операции сложения не может быть логическое значение.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    BinaryPlusHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    return BinaryPlusHandler;
}(AbstractBinaryOperationTokenHandler_1.AbstractBinaryOperationTokenHandler));
exports.BinaryPlusHandler = BinaryPlusHandler;
BinaryPlusHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.BinaryPlusHandler";
