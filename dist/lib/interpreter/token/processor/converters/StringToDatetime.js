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
exports.StringToDatetime = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var ComputingException_1 = require("../../../exception/ComputingException");
var TValues_1 = require("../../TValues");
var DatetimeUtils_1 = require("../../../util/DatetimeUtils");
var StringUtils_1 = require("../../../util/StringUtils");
var AbstractConverter_1 = require("./AbstractConverter");
/**
 * Класс преобразования строковых значений в даты.
 * @extends AbstractConverter
 * @class
 */
var StringToDatetime = /** @class */ (function (_super) {
    __extends(StringToDatetime, _super);
    function StringToDatetime() {
        return _super.call(this, TValues_1.TValues.DATETIME) || this;
    }
    StringToDatetime.INSTANCE_$LI$ = function () { if (StringToDatetime.INSTANCE == null) {
        StringToDatetime.INSTANCE = new StringToDatetime();
    } return StringToDatetime.INSTANCE; };
    /**
     * Возвращает экземпляр класса.
     *
     * @return {StringToDatetime} экземпляр класса.
     */
    StringToDatetime.getInstance = function () {
        return StringToDatetime.INSTANCE_$LI$();
    };
    /**
     * Поднимает исключение с сообщением о неверном значении в поле значения токена.
     *
     * @param {string} v значение в поле значения токена.
     *
     * @throws ComputingException исключение поднимается всегда.
     * @private
     */
    /*private*/ StringToDatetime.prototype.throwOnIncorrectDate = function (v) {
        throw new ComputingException_1.ComputingException("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0434\u0430\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \'" + v + "\'.");
    };
    StringToDatetime.prototype.convert$java_lang_String = function (value) {
        if (StringUtils_1.StringUtils.isNullOrEmpty(value)) {
            throw new ComputingException_1.ComputingException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u0442\u044b \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f.");
        }
        var parsedV = StringUtils_1.StringUtils.splitByRegExp(value, "[.:\\s]+");
        var parsedVLength = parsedV.length;
        if (parsedVLength < 3 || parsedVLength > 7) {
            this.throwOnIncorrectDate(value);
        }
        var dateElements = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(parsedVLength);
        for (var i = 0; i < parsedVLength; i++) {
            {
                try {
                    dateElements[i] = /* parseInt */ parseInt(parsedV[i]);
                }
                catch (nfe) {
                    this.throwOnIncorrectDate(value);
                }
            }
            ;
        }
        if (DatetimeUtils_1.DatetimeUtils.isIncorrectDate(dateElements[2], dateElements[1], dateElements[0])) {
            this.throwOnIncorrectDate(value);
        }
        if (parsedVLength >= 4 && DatetimeUtils_1.DatetimeUtils.isIncorrectHour(dateElements[3])) {
            this.throwOnIncorrectDate(value);
        }
        if (parsedVLength >= 5 && DatetimeUtils_1.DatetimeUtils.isIncorrectMinute(dateElements[4])) {
            this.throwOnIncorrectDate(value);
        }
        if (parsedVLength >= 6 && DatetimeUtils_1.DatetimeUtils.isIncorrectSecond(dateElements[5])) {
            this.throwOnIncorrectDate(value);
        }
        if (parsedVLength === 7 && DatetimeUtils_1.DatetimeUtils.isIncorrectMillisecond(dateElements[6])) {
            this.throwOnIncorrectDate(value);
        }
        return DatetimeUtils_1.DatetimeUtils.getDateFromParsedArray(dateElements);
    };
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {string} value преобразуемое значение.
     *
     * @return {Date} полученное значение.
     *
     * @throws ComputingException в случае ошибки преобразования данных.
     */
    StringToDatetime.prototype.convert = function (value) {
        if (((typeof value === 'string') || value === null)) {
            return this.convert$java_lang_String(value);
        }
        else if (((value != null) || value === null)) {
            throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)');
        }
        else
            throw new Error('invalid overload');
    };
    return StringToDatetime;
}(AbstractConverter_1.AbstractConverter));
exports.StringToDatetime = StringToDatetime;
StringToDatetime["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.converters.StringToDatetime";
