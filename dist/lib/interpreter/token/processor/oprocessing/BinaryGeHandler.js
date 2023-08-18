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
exports.BinaryGeHandler = void 0;
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var TValues_1 = require("../../TValues");
var StringUtils_1 = require("../../../util/StringUtils");
var AbstractRelativeComparisonOperationHandler_1 = require("./AbstractRelativeComparisonOperationHandler");
/**
 * Обработчик операции сравнения на больше или равно.
 * @extends AbstractRelativeComparisonOperationHandler
 * @class
 */
var BinaryGeHandler = /** @class */ (function (_super) {
    __extends(BinaryGeHandler, _super);
    function BinaryGeHandler(interpreter) {
        return _super.call(this, interpreter, OValues_1.OValues.B_GE) || this;
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
    BinaryGeHandler.prototype.handle = function (token, iContext) {
        var operands = this.getOperands(token.a, iContext);
        var leftOperand = operands[0];
        var rightOperand = operands[1];
        switch ((leftOperand.t)) {
            case TValues_1.TValues.NUMBER:
                var l1 = leftOperand.v;
                var r1 = rightOperand.v;
                return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.BOOLEAN, /* compareTo */ l1.cmp(r1) >= 0);
            case TValues_1.TValues.STRING:
                var l2 = leftOperand.v;
                var r2 = rightOperand.v;
                return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.BOOLEAN, StringUtils_1.StringUtils.compareTo(l2, r2) >= 0);
            default:
                var l3 = leftOperand.v;
                var r3 = rightOperand.v;
                return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.BOOLEAN, l3.getTime() >= r3.getTime());
        }
    };
    return BinaryGeHandler;
}(AbstractRelativeComparisonOperationHandler_1.AbstractRelativeComparisonOperationHandler));
exports.BinaryGeHandler = BinaryGeHandler;
BinaryGeHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.BinaryGeHandler";
