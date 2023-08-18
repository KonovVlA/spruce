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
exports.DatetimeToString = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var TValues_1 = require("../../TValues");
var DatetimeUtils_1 = require("../../../util/DatetimeUtils");
var AbstractConverter_1 = require("./AbstractConverter");
/**
 * Класс преобразования дат в строковые значения.
 * @extends AbstractConverter
 * @class
 */
var DatetimeToString = /** @class */ (function (_super) {
    __extends(DatetimeToString, _super);
    function DatetimeToString() {
        return _super.call(this, TValues_1.TValues.STRING) || this;
    }
    DatetimeToString.INSTANCE_$LI$ = function () { if (DatetimeToString.INSTANCE == null) {
        DatetimeToString.INSTANCE = new DatetimeToString();
    } return DatetimeToString.INSTANCE; };
    /**
     * Возвращает экземпляр класса.
     *
     * @return {DatetimeToString} экземпляр класса.
     */
    DatetimeToString.getInstance = function () {
        return DatetimeToString.INSTANCE_$LI$();
    };
    DatetimeToString.prototype.convert$java_util_Date = function (value) {
        return DatetimeUtils_1.DatetimeUtils.asString(value);
    };
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {Date} value преобразуемое значение.
     *
     * @return {string} полученное значение.
     */
    DatetimeToString.prototype.convert = function (value) {
        if (((value != null && value instanceof Date) || value === null)) {
            return this.convert$java_util_Date(value);
        }
        else if (((value != null) || value === null)) {
            throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)');
        }
        else
            throw new Error('invalid overload');
    };
    return DatetimeToString;
}(AbstractConverter_1.AbstractConverter));
exports.DatetimeToString = DatetimeToString;
DatetimeToString["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.converters.DatetimeToString";
