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
exports.ObjectHandler = void 0;
var ComputingException_1 = require("../../../exception/ComputingException");
var ValidationException_1 = require("../../../exception/ValidationException");
var InterpreterToken_1 = require("../../InterpreterToken");
var OValues_1 = require("../../OValues");
var TValues_1 = require("../../TValues");
var AbstractTokenHandler_1 = require("../AbstractTokenHandler");
var StringUtils_1 = require("../../../util/StringUtils");
/**
 * Обработчик объектов.
 * @extends AbstractTokenHandler
 * @class
 */
var ObjectHandler = /** @class */ (function (_super) {
    __extends(ObjectHandler, _super);
    function ObjectHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат обработки токена.
     */
    ObjectHandler.prototype.handle = function (token, iContext) {
        var object = ({});
        for (var index = 0; index < token.a.length; index++) {
            var fieldDeclarationToken = token.a[index];
            {
                var fieldData = this.interpreter.getTProcessor().interpret(fieldDeclarationToken, iContext).v;
                var key = fieldData[0];
                var value = fieldData[1];
                if ( /* containsKey */object.hasOwnProperty(key)) {
                    throw new ComputingException_1.ComputingException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d \u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u0439\u0441\u044f \u043a\u043b\u044e\u0447 \u043f\u043e\u043b\u044f \'" + key + "\'.");
                }
                /* put */ (object[key] = value);
            }
        }
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.OBJECT, object);
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false}, т.к. выражение представляет собой объект.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    ObjectHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return false;
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    ObjectHandler.prototype.validate = function (token) {
        var args = token.a;
        if (args == null) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432.");
        }
        for (var index = 0; index < args.length; index++) {
            var fieldDeclaration = args[index];
            {
                if (!StringUtils_1.StringUtils.areStringsEqual(fieldDeclaration.t, TValues_1.TValues.OPERATION)) {
                    throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u0441 \u0442\u0438\u043f\u043e\u043c \'" + TValues_1.TValues.getTypeNameOrType(fieldDeclaration.t) + "\'.");
                }
                if (!StringUtils_1.StringUtils.areStringsEqual(fieldDeclaration.v, OValues_1.OValues.B_FIELD)) {
                    throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 " + OValues_1.OValues.getOperationNameOrOperation(fieldDeclaration.v) + ".");
                }
            }
        }
    };
    return ObjectHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.ObjectHandler = ObjectHandler;
ObjectHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.tprocessing.ObjectHandler";
