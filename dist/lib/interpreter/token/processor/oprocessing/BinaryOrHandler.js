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
exports.BinaryOrHandler = void 0;
var ComputingException_1 = require("../../../exception/ComputingException");
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var TValues_1 = require("../../TValues");
var AbstractBinaryLogicOperationHandler_1 = require("./AbstractBinaryLogicOperationHandler");
/**
 * Обработчик операции логическое или.
 * @extends AbstractBinaryLogicOperationHandler
 * @class
 */
var BinaryOrHandler = /** @class */ (function (_super) {
    __extends(BinaryOrHandler, _super);
    function BinaryOrHandler(interpreter) {
        return _super.call(this, interpreter, OValues_1.OValues.B_OR) || this;
    }
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
    BinaryOrHandler.prototype.handle = function (token, iContext) {
        var args = token.a;
        var leftOperand = this.interpreter.getTProcessor().interpret(args[0], iContext);
        if (this.isAvailableForLeftToken(leftOperand)) {
            if (leftOperand.v) {
                return leftOperand;
            }
            var rightOperand = this.interpreter.getTProcessor().interpret(args[1], iContext);
            var converter = this.getConverter(leftOperand, rightOperand);
            if (converter == null) {
                throw new ComputingException_1.ComputingException("\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \'" + this.operationName + "\' \u043d\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u0430 \u043a \u0442\u0438\u043f\u0430\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \'" + TValues_1.TValues.getTypeNameOrType(leftOperand.t) + "\' \u0438 \'" + TValues_1.TValues.getTypeNameOrType(rightOperand.t) + "\'.");
            }
            var converterTargetType = converter.getTargetType();
            return new InterpreterToken_1.InterpreterToken(converterTargetType != null ? converterTargetType : rightOperand.t, converter.convert(rightOperand.v));
        }
        throw new ComputingException_1.ComputingException("\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \'" + this.operationName + "\' \u043d\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u0430 \u043a \u043b\u0435\u0432\u043e\u043c\u0443 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443 \u0442\u0438\u043f\u0430 \'" + TValues_1.TValues.getTypeNameOrType(leftOperand.t) + "\'.");
    };
    return BinaryOrHandler;
}(AbstractBinaryLogicOperationHandler_1.AbstractBinaryLogicOperationHandler));
exports.BinaryOrHandler = BinaryOrHandler;
BinaryOrHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.BinaryOrHandler";
