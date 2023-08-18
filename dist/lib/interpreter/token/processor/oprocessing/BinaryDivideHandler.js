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
exports.BinaryDivideHandler = void 0;
var ComputingException_1 = require("../../../exception/ComputingException");
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var TValues_1 = require("../../TValues");
var NumberUtils_1 = require("../../../util/NumberUtils");
var AbstractMultiplicativeOperationTokenHandler_1 = require("./AbstractMultiplicativeOperationTokenHandler");
/**
 * Обработчик операции деления.
 * @extends AbstractMultiplicativeOperationTokenHandler
 * @class
 */
var BinaryDivideHandler = /** @class */ (function (_super) {
    __extends(BinaryDivideHandler, _super);
    function BinaryDivideHandler(interpreter) {
        return _super.call(this, interpreter, OValues_1.OValues.B_DIV) || this;
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
    BinaryDivideHandler.prototype.handle = function (token, iContext) {
        var operands = this.getOperands(token.a, iContext);
        var leftOperand = operands[0];
        var rightOperand = operands[1];
        var l1 = leftOperand.v;
        var r1 = rightOperand.v;
        try {
            return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.NUMBER, NumberUtils_1.NumberUtils.divide(l1, r1));
        }
        catch (e) {
            throw new ComputingException_1.ComputingException("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \'" + this.operationName + "\'.", e);
        }
    };
    return BinaryDivideHandler;
}(AbstractMultiplicativeOperationTokenHandler_1.AbstractMultiplicativeOperationTokenHandler));
exports.BinaryDivideHandler = BinaryDivideHandler;
BinaryDivideHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.BinaryDivideHandler";
