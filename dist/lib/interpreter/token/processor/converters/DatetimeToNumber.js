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
exports.DatetimeToNumber = void 0;
var big_js_1 = require("big.js");
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var TValues_1 = require("../../TValues");
var AbstractConverter_1 = require("./AbstractConverter");
/**
 * Класс преобразования дат в числа.
 * @extends AbstractConverter
 * @class
 */
var DatetimeToNumber = /** @class */ (function (_super) {
    __extends(DatetimeToNumber, _super);
    function DatetimeToNumber() {
        return _super.call(this, TValues_1.TValues.NUMBER) || this;
    }
    DatetimeToNumber.INSTANCE_$LI$ = function () { if (DatetimeToNumber.INSTANCE == null) {
        DatetimeToNumber.INSTANCE = new DatetimeToNumber();
    } return DatetimeToNumber.INSTANCE; };
    /**
     * Возвращает экземпляр класса.
     *
     * @return {DatetimeToNumber} экземпляр класса.
     */
    DatetimeToNumber.getInstance = function () {
        return DatetimeToNumber.INSTANCE_$LI$();
    };
    DatetimeToNumber.prototype.convert$java_util_Date = function (value) {
        return new big_js_1.Big(value.getTime());
    };
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {Date} value преобразуемое значение.
     *
     * @return {Big} полученное значение.
     */
    DatetimeToNumber.prototype.convert = function (value) {
        if (((value != null && value instanceof Date) || value === null)) {
            return this.convert$java_util_Date(value);
        }
        else if (((value != null) || value === null)) {
            throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)');
        }
        else
            throw new Error('invalid overload');
    };
    return DatetimeToNumber;
}(AbstractConverter_1.AbstractConverter));
exports.DatetimeToNumber = DatetimeToNumber;
DatetimeToNumber["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.converters.DatetimeToNumber";
