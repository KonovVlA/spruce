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
exports.NumberToString = void 0;
var big_js_1 = require("big.js");
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var TValues_1 = require("../../TValues");
var NumberUtils_1 = require("../../../util/NumberUtils");
var AbstractConverter_1 = require("./AbstractConverter");
/**
 * Класс преобразования числовых значений в строковые.
 * @extends AbstractConverter
 * @class
 */
var NumberToString = /** @class */ (function (_super) {
    __extends(NumberToString, _super);
    function NumberToString() {
        return _super.call(this, TValues_1.TValues.STRING) || this;
    }
    NumberToString.INSTANCE_$LI$ = function () { if (NumberToString.INSTANCE == null) {
        NumberToString.INSTANCE = new NumberToString();
    } return NumberToString.INSTANCE; };
    /**
     * Возвращает экземпляр класса.
     *
     * @return {NumberToString} экземпляр класса.
     */
    NumberToString.getInstance = function () {
        return NumberToString.INSTANCE_$LI$();
    };
    NumberToString.prototype.convert$java_math_BigDecimal = function (value) {
        return NumberUtils_1.NumberUtils.getStringRepresentation(value);
    };
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {Big} value преобразуемое значение.
     *
     * @return {string} полученное значение.
     */
    NumberToString.prototype.convert = function (value) {
        if (((value != null && value instanceof big_js_1.Big) || value === null)) {
            return this.convert$java_math_BigDecimal(value);
        }
        else if (((value != null) || value === null)) {
            throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)');
        }
        else
            throw new Error('invalid overload');
    };
    return NumberToString;
}(AbstractConverter_1.AbstractConverter));
exports.NumberToString = NumberToString;
NumberToString["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.converters.NumberToString";
