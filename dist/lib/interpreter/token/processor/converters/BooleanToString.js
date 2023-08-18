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
exports.BooleanToString = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var TValues_1 = require("../../TValues");
var AbstractConverter_1 = require("./AbstractConverter");
/**
 * Класс преобразования логических значений в строковые.
 * @extends AbstractConverter
 * @class
 */
var BooleanToString = /** @class */ (function (_super) {
    __extends(BooleanToString, _super);
    function BooleanToString() {
        return _super.call(this, TValues_1.TValues.STRING) || this;
    }
    BooleanToString.INSTANCE_$LI$ = function () { if (BooleanToString.INSTANCE == null) {
        BooleanToString.INSTANCE = new BooleanToString();
    } return BooleanToString.INSTANCE; };
    /**
     * Возвращает экземпляр класса.
     *
     * @return {BooleanToString} экземпляр класса.
     */
    BooleanToString.getInstance = function () {
        return BooleanToString.INSTANCE_$LI$();
    };
    BooleanToString.prototype.convert$java_lang_Boolean = function (value) {
        return value.toString();
    };
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {boolean} value преобразуемое значение.
     *
     * @return {string} полученное значение.
     */
    BooleanToString.prototype.convert = function (value) {
        if (((typeof value === 'boolean') || value === null)) {
            return this.convert$java_lang_Boolean(value);
        }
        else if (((value != null) || value === null)) {
            throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)');
        }
        else
            throw new Error('invalid overload');
    };
    return BooleanToString;
}(AbstractConverter_1.AbstractConverter));
exports.BooleanToString = BooleanToString;
BooleanToString["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.converters.BooleanToString";
