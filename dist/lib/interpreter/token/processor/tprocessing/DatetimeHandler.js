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
exports.DatetimeHandler = void 0;
var ValidationException_1 = require("../../../exception/ValidationException");
var InterpreterToken_1 = require("../../InterpreterToken");
var TValues_1 = require("../../TValues");
var AbstractTokenHandler_1 = require("../AbstractTokenHandler");
var DatetimeUtils_1 = require("../../../util/DatetimeUtils");
var StringUtils_1 = require("../../../util/StringUtils");
/**
 * Обработчик дат.
 * @extends AbstractTokenHandler
 * @class
 */
var DatetimeHandler = /** @class */ (function (_super) {
    __extends(DatetimeHandler, _super);
    function DatetimeHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Поднимает исключение с сообщением о неверном значении в поле значения токена.
     *
     * @param {string} v значение в поле значения токена.
     *
     * @throws ValidationException исключение поднимается всегда.
     * @private
     */
    /*private*/ DatetimeHandler.prototype.throwOnIncorrectDate = function (v) {
        throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u0442\u044b \u0432 \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \'" + v + "\'.");
    };
    /**
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат обработки токена.
     */
    DatetimeHandler.prototype.handle = function (token, iContext) {
        var parsedV = StringUtils_1.StringUtils.splitByRegExp(token.v, "[.:\\s]+");
        var parsedVLength = parsedV.length;
        var dateElements = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(parsedVLength);
        for (var i = 0; i < parsedVLength; i++) {
            {
                dateElements[i] = /* parseInt */ parseInt(parsedV[i]);
            }
            ;
        }
        return new InterpreterToken_1.InterpreterToken(TValues_1.TValues.DATETIME, DatetimeUtils_1.DatetimeUtils.getDateFromParsedArray(dateElements));
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code false}, т.к. выражение представляет собой дату.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    DatetimeHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
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
    DatetimeHandler.prototype.validate = function (token) {
        var v = token.v;
        if (StringUtils_1.StringUtils.isNullOrEmpty(v)) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u0442\u044b \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f.");
        }
        var parsedV = StringUtils_1.StringUtils.splitByRegExp(v, "[.:\\s]+");
        var parsedVLength = parsedV.length;
        if (parsedVLength < 3 || parsedVLength > 7) {
            this.throwOnIncorrectDate(v);
        }
        var dateElements = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(parsedVLength);
        for (var i = 0; i < parsedVLength; i++) {
            {
                try {
                    dateElements[i] = /* parseInt */ parseInt(parsedV[i]);
                }
                catch (nfe) {
                    this.throwOnIncorrectDate(v);
                }
            }
            ;
        }
        if (DatetimeUtils_1.DatetimeUtils.isIncorrectDate(dateElements[2], dateElements[1], dateElements[0])) {
            this.throwOnIncorrectDate(v);
        }
        if (parsedVLength >= 4 && DatetimeUtils_1.DatetimeUtils.isIncorrectHour(dateElements[3])) {
            this.throwOnIncorrectDate(v);
        }
        if (parsedVLength >= 5 && DatetimeUtils_1.DatetimeUtils.isIncorrectMinute(dateElements[4])) {
            this.throwOnIncorrectDate(v);
        }
        if (parsedVLength >= 6 && DatetimeUtils_1.DatetimeUtils.isIncorrectSecond(dateElements[5])) {
            this.throwOnIncorrectDate(v);
        }
        if (parsedVLength === 7 && DatetimeUtils_1.DatetimeUtils.isIncorrectMillisecond(dateElements[6])) {
            this.throwOnIncorrectDate(v);
        }
    };
    return DatetimeHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.DatetimeHandler = DatetimeHandler;
DatetimeHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.tprocessing.DatetimeHandler";
