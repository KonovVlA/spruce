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
exports.AbstractTwoArgsDatetimeHandler = void 0;
var ValidationException_1 = require("../../../../exception/ValidationException");
var AbstractTokenHandler_1 = require("../../AbstractTokenHandler");
/**
 * Абстрактный класс обработчика функции работы с датой-временем с двумя аргументами.
 * @extends AbstractTokenHandler
 * @class
 */
var AbstractTwoArgsDatetimeHandler = /** @class */ (function (_super) {
    __extends(AbstractTwoArgsDatetimeHandler, _super);
    function AbstractTwoArgsDatetimeHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    AbstractTwoArgsDatetimeHandler.prototype.validate = function (token) {
        var argsLength = token.a.length;
        if (argsLength !== 2) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\' \u043c\u0430\u0441\u0441\u0438\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0434\u043b\u0438\u043d\u0443 (\u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f 2, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e " + argsLength + ").");
        }
    };
    return AbstractTwoArgsDatetimeHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.AbstractTwoArgsDatetimeHandler = AbstractTwoArgsDatetimeHandler;
AbstractTwoArgsDatetimeHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.datetime.AbstractTwoArgsDatetimeHandler";
