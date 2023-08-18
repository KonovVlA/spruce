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
exports.BinaryArrayLikeAccessHandler = void 0;
var big_js_1 = require("big.js");
var ComputingException_1 = require("../../../exception/ComputingException");
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var TValues_1 = require("../../TValues");
var ConversionUtil_1 = require("../converters/ConversionUtil");
var NoOp_1 = require("../converters/NoOp");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var CommonUtils_1 = require("../../../util/CommonUtils");
var NumberUtils_1 = require("../../../util/NumberUtils");
var AbstractBinaryOperationTokenHandler_1 = require("./AbstractBinaryOperationTokenHandler");
/**
 * Обработчик операции доступа к элементу массива по индексу, полю объекта по имени.
 * @extends AbstractBinaryOperationTokenHandler
 * @class
 */
var BinaryArrayLikeAccessHandler = /** @class */ (function (_super) {
    __extends(BinaryArrayLikeAccessHandler, _super);
    function BinaryArrayLikeAccessHandler(interpreter) {
        return _super.call(this, interpreter, OValues_1.OValues.B_ARRAY_LIKE_ACCESS) || this;
    }
    BinaryArrayLikeAccessHandler.AVAILABILITY_MAP_$LI$ = function () { if (BinaryArrayLikeAccessHandler.AVAILABILITY_MAP == null) {
        BinaryArrayLikeAccessHandler.AVAILABILITY_MAP = BinaryArrayLikeAccessHandler.getAvailabilityMap();
    } return BinaryArrayLikeAccessHandler.AVAILABILITY_MAP; };
    /**
     * Инициализирует матрицу применимости операции относительно типов аргументов.
     *
     * @return {*} матрица применимости операции относительно типов аргументов.
     * @private
     */
    /*private*/ BinaryArrayLikeAccessHandler.getAvailabilityMap = function () {
        var map = ({});
        var arrayMap = ({});
        var stringMap = ({});
        /* put */ (arrayMap[TValues_1.TValues.NUMBER] = NoOp_1.NoOp.getInstance());
        /* put */ (stringMap[TValues_1.TValues.NUMBER] = NoOp_1.NoOp.getInstance());
        /* put */ (map[TValues_1.TValues.OBJECT] = ConversionUtil_1.ConversionUtil.getToStringMap());
        /* put */ (map[TValues_1.TValues.ARRAY] = arrayMap);
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
    BinaryArrayLikeAccessHandler.prototype.getConverter = function (leftToken, rightToken) {
        var lValueMap = (CollectionUtils_1.CollectionUtils.get(BinaryArrayLikeAccessHandler.AVAILABILITY_MAP_$LI$(), leftToken.t));
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
    BinaryArrayLikeAccessHandler.prototype.handle = function (token, iContext) {
        var operands = this.getOperands(token.a, iContext);
        var leftOperand = operands[0];
        var rightOperand = operands[1];
        switch ((leftOperand.t)) {
            case TValues_1.TValues.OBJECT:
                if (rightOperand.v == null || /* isEmpty */ (rightOperand.v.length === 0)) {
                    throw new ComputingException_1.ComputingException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + this.operationName + "\' \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430.");
                }
                var l1 = leftOperand.v;
                var r1 = rightOperand.v;
                if (!l1.hasOwnProperty(r1)) {
                    throw new ComputingException_1.ComputingException("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \'" + this.operationName + "\', \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u043b\u0435 \'" + r1 + "\'.");
                }
                var value1 = (CollectionUtils_1.CollectionUtils.get(l1, r1));
                var value1Type = CommonUtils_1.CommonUtils.getType(value1);
                return new InterpreterToken_1.InterpreterToken(value1Type, value1);
            case TValues_1.TValues.ARRAY:
                var l2 = leftOperand.v;
                var r2 = rightOperand.v;
                var r2String = NumberUtils_1.NumberUtils.getStringRepresentation(r2);
                if (!NumberUtils_1.NumberUtils.isStringIntegerGeZero(r2String) || /* compareTo */ r2.cmp(new big_js_1.Big("0")) < 0) {
                    throw new ComputingException_1.ComputingException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + this.operationName + "\' \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \'" + r2String + "\'.");
                }
                if ( /* compareTo */r2.cmp(new big_js_1.Big(/* size */ l2.length)) >= 0) {
                    throw new ComputingException_1.ComputingException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + this.operationName + "\' \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0430 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \'" + r2String + "\' \u0432\u044b\u0445\u043e\u0434\u0438\u0442 \u0437\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0443 \u043c\u0430\u0441\u0441\u0438\u0432\u0430.");
                }
                var value2 = l2[ /* parseInt */parseInt(r2String)];
                var value2Type = CommonUtils_1.CommonUtils.getType(value2);
                return new InterpreterToken_1.InterpreterToken(value2Type, value2);
            default:
                var l3 = leftOperand.v;
                var r3 = rightOperand.v;
                var r3String = NumberUtils_1.NumberUtils.getStringRepresentation(r3);
                if (!NumberUtils_1.NumberUtils.isStringIntegerGeZero(r3String) || /* compareTo */ r3.cmp(new big_js_1.Big("0")) < 0) {
                    throw new ComputingException_1.ComputingException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + this.operationName + "\' \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043e \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 \'" + r3String + "\'.");
                }
                if ( /* compareTo */r3.cmp(new big_js_1.Big(l3.length)) >= 0) {
                    throw new ComputingException_1.ComputingException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + this.operationName + "\' \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 \'" + r3String + "\' \u0432\u044b\u0445\u043e\u0434\u0438\u0442 \u0437\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0443 \u0441\u0442\u0440\u043e\u043a\u0438.");
                }
                var value3 = l3.substring(/* parseInt */ parseInt(r3String), /* parseInt */ parseInt(r3String) + 1);
                var value3Type = CommonUtils_1.CommonUtils.getType(value3);
                return new InterpreterToken_1.InterpreterToken(value3Type, value3);
        }
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true}, т.к. результатом взятия элемента массива/поля объекта может быть значение произвольного
     * типа.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    BinaryArrayLikeAccessHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return true;
    };
    return BinaryArrayLikeAccessHandler;
}(AbstractBinaryOperationTokenHandler_1.AbstractBinaryOperationTokenHandler));
exports.BinaryArrayLikeAccessHandler = BinaryArrayLikeAccessHandler;
BinaryArrayLikeAccessHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.BinaryArrayLikeAccessHandler";
