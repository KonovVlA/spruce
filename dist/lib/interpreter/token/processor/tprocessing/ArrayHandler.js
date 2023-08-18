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
exports.ArrayHandler = void 0;
var ValidationException_1 = require("../../../exception/ValidationException");
var InterpreterToken_1 = require("../../InterpreterToken");
var TValues_1 = require("../../TValues");
var AbstractTokenHandler_1 = require("../AbstractTokenHandler");
/**
 * Обработчик массивов.
 * @extends AbstractTokenHandler
 * @class
 */
var ArrayHandler = /** @class */ (function (_super) {
    __extends(ArrayHandler, _super);
    function ArrayHandler(interpreter) {
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
    ArrayHandler.prototype.handle = function (token, iContext) {
        var array = ([]);
        for (var index = 0; index < token.a.length; index++) {
            var arrayElementToken = token.a[index];
            {
                /* add */ (array.push(this.interpreter.getTProcessor().interpret(arrayElementToken, iContext).v) > 0);
            }
        }
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.ARRAY, array);
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false}, т.к. выражение представляет собой массив.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    ArrayHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
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
    ArrayHandler.prototype.validate = function (token) {
        if (token.a == null) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432.");
        }
    };
    return ArrayHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.ArrayHandler = ArrayHandler;
ArrayHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.tprocessing.ArrayHandler";
