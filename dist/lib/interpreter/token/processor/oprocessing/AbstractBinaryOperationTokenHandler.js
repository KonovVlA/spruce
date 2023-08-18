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
exports.AbstractBinaryOperationTokenHandler = void 0;
var ComputingException_1 = require("../../../exception/ComputingException");
var ValidationException_1 = require("../../../exception/ValidationException");
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var TValues_1 = require("../../TValues");
var AbstractTokenHandler_1 = require("../AbstractTokenHandler");
/**
 * Абстрактный класс обработчика токена бинарной операции.
 * @extends AbstractTokenHandler
 * @class
 */
var AbstractBinaryOperationTokenHandler = /** @class */ (function (_super) {
    __extends(AbstractBinaryOperationTokenHandler, _super);
    function AbstractBinaryOperationTokenHandler(interpreter, operation) {
        var _this = _super.call(this, interpreter) || this;
        if (_this.operationName === undefined) {
            _this.operationName = null;
        }
        _this.operationName = OValues_1.OValues.getOperationNameOrOperation(operation);
        return _this;
    }
    /**
     * Возвращает правый операнд, приведенный по типу в соответствие с первым операндом и типом операции.
     *
     * @param {ru.sbrf.ufs.prodsel.elengine.token.Token[]} args     аргументы токена.
     * @param {*[]} iContext внутренний контекст интерпретатора.
     *
     * @return {ru.sbrf.ufs.prodsel.elengine.token.InterpreterToken[]} правый операнд, приведенный по типу в соответствие с первым операндом и типом операции.
     *
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractBinaryOperationTokenHandler.prototype.getOperands = function (args, iContext) {
        var leftOperand = this.interpreter.getTProcessor().interpret(args[0], iContext);
        var rightOperand = this.interpreter.getTProcessor().interpret(args[1], iContext);
        var converter = this.getConverter(leftOperand, rightOperand);
        if (converter == null) {
            throw new ComputingException_1.ComputingException("\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \'" + this.operationName + "\' \u043d\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u0430 \u043a \u0442\u0438\u043f\u0430\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \'" + TValues_1.TValues.getTypeNameOrType(leftOperand.t) + "\' \u0438 \'" + TValues_1.TValues.getTypeNameOrType(rightOperand.t) + "\'.");
        }
        var converterTargetType = converter.getTargetType();
        var rightOperandConverted = new InterpreterToken_1.InterpreterToken(converterTargetType != null ? converterTargetType : rightOperand.t, converter.convert(rightOperand.v));
        return [leftOperand, rightOperandConverted];
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractBinaryOperationTokenHandler.prototype.validate = function (token) {
        var args = token.a;
        if (args == null) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + this.operationName + "\' \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432.");
        }
        if (args.length !== 2) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + this.operationName + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 2, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + args.length + ").");
        }
    };
    return AbstractBinaryOperationTokenHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.AbstractBinaryOperationTokenHandler = AbstractBinaryOperationTokenHandler;
AbstractBinaryOperationTokenHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.AbstractBinaryOperationTokenHandler";
