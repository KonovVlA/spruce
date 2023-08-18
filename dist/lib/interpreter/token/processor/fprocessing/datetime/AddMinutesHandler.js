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
exports.AddMinutesHandler = void 0;
var InterpreterToken_1 = require("../../../InterpreterToken");
var TValues_1 = require("../../../TValues");
var DatetimeUtils_1 = require("../../../../util/DatetimeUtils");
var AbstractAddToDateFieldHandler_1 = require("./AbstractAddToDateFieldHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractAddToDateFieldHandler
 */
var AddMinutesHandler = /** @class */ (function (_super) {
    __extends(AddMinutesHandler, _super);
    function AddMinutesHandler(interpreter) {
        return _super.call(this, interpreter) || this;
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
    AddMinutesHandler.prototype.handle = function (token, iContext) {
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.DATETIME, DatetimeUtils_1.DatetimeUtils.addMinutes(this.getDateArgumentValue(token, iContext), this.getNumberArgumentValue(token, iContext)));
    };
    return AddMinutesHandler;
}(AbstractAddToDateFieldHandler_1.AbstractAddToDateFieldHandler));
exports.AddMinutesHandler = AddMinutesHandler;
AddMinutesHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.datetime.AddMinutesHandler";
