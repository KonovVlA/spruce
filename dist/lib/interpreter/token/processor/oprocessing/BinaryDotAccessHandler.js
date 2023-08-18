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
exports.BinaryDotAccessHandler = void 0;
var ComputingException_1 = require("../../../exception/ComputingException");
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var TValues_1 = require("../../TValues");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var CommonUtils_1 = require("../../../util/CommonUtils");
var StringUtils_1 = require("../../../util/StringUtils");
var AbstractDotLikeAccessOperationHandler_1 = require("./AbstractDotLikeAccessOperationHandler");
/**
 * Обработчик операции доступа к полю объекта по идентификатору поля.
 * @extends AbstractDotLikeAccessOperationHandler
 * @class
 */
var BinaryDotAccessHandler = /** @class */ (function (_super) {
    __extends(BinaryDotAccessHandler, _super);
    function BinaryDotAccessHandler(interpreter) {
        return _super.call(this, interpreter, OValues_1.OValues.B_DOT_ACCESS) || this;
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
    BinaryDotAccessHandler.prototype.handle = function (token, iContext) {
        var args = token.a;
        var sourceObjectToken = args[0];
        var fieldNameToken = args[1];
        var fieldName = fieldNameToken.v;
        var objectToken = this.interpreter.getTProcessor().interpret(sourceObjectToken, iContext);
        if (!StringUtils_1.StringUtils.areStringsEqual(objectToken.t, TValues_1.TValues.OBJECT)) {
            throw new ComputingException_1.ComputingException("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \'" + this.operationName + "\', \u0442\u0438\u043f \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u043d\u0435\u0432\u0435\u0440\u0435\u043d (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0431\u044a\u0435\u043a\u0442, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \'" + TValues_1.TValues.getTypeNameOrType(objectToken.t) + "\').");
        }
        var object = objectToken.v;
        if (!object.hasOwnProperty(fieldName)) {
            throw new ComputingException_1.ComputingException("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e \'" + this.operationName + "\', \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u043b\u0435 \'" + fieldName + "\'.");
        }
        var value = (CollectionUtils_1.CollectionUtils.get(object, fieldName));
        var valueType = CommonUtils_1.CommonUtils.getType(value);
        return new InterpreterToken_1.InterpreterToken(valueType, value);
    };
    return BinaryDotAccessHandler;
}(AbstractDotLikeAccessOperationHandler_1.AbstractDotLikeAccessOperationHandler));
exports.BinaryDotAccessHandler = BinaryDotAccessHandler;
BinaryDotAccessHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.BinaryDotAccessHandler";
