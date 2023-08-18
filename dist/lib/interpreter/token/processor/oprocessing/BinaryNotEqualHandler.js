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
exports.BinaryNotEqualHandler = void 0;
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var TValues_1 = require("../../TValues");
var AbstractDirectComparisonOperationHandler_1 = require("./AbstractDirectComparisonOperationHandler");
/**
 * Обработчик операции сравнения на неравно.
 * @extends AbstractDirectComparisonOperationHandler
 * @class
 */
var BinaryNotEqualHandler = /** @class */ (function (_super) {
    __extends(BinaryNotEqualHandler, _super);
    function BinaryNotEqualHandler(interpreter) {
        return _super.call(this, interpreter, OValues_1.OValues.B_NEQ) || this;
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
    BinaryNotEqualHandler.prototype.handle = function (token, iContext) {
        var operands = this.getOperands(token.a, iContext);
        var leftOperand = operands[0];
        var rightOperand = operands[1];
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.BOOLEAN, !AbstractDirectComparisonOperationHandler_1.AbstractDirectComparisonOperationHandler.areEqual(leftOperand.v, rightOperand.v, leftOperand.t));
    };
    return BinaryNotEqualHandler;
}(AbstractDirectComparisonOperationHandler_1.AbstractDirectComparisonOperationHandler));
exports.BinaryNotEqualHandler = BinaryNotEqualHandler;
BinaryNotEqualHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.BinaryNotEqualHandler";
