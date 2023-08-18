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
exports.StringToNumber = void 0;
var big_js_1 = require("big.js");
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var ComputingException_1 = require("../../../exception/ComputingException");
var TValues_1 = require("../../TValues");
var NumberUtils_1 = require("../../../util/NumberUtils");
var AbstractConverter_1 = require("./AbstractConverter");
/**
 * Класс преобразования строк в числа.
 * @extends AbstractConverter
 * @class
 */
var StringToNumber = /** @class */ (function (_super) {
    __extends(StringToNumber, _super);
    function StringToNumber() {
        return _super.call(this, TValues_1.TValues.NUMBER) || this;
    }
    StringToNumber.INSTANCE_$LI$ = function () { if (StringToNumber.INSTANCE == null) {
        StringToNumber.INSTANCE = new StringToNumber();
    } return StringToNumber.INSTANCE; };
    /**
     * Возвращает экземпляр класса.
     *
     * @return {StringToNumber} экземпляр класса.
     */
    StringToNumber.getInstance = function () {
        return StringToNumber.INSTANCE_$LI$();
    };
    StringToNumber.prototype.convert$java_lang_String = function (value) {
        try {
            if (NumberUtils_1.NumberUtils.isStringNumber(value)) {
                return new big_js_1.Big(value);
            }
            throw new ComputingException_1.ComputingException("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \'" + value + "\' \u043a \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u043c\u0443 \u0442\u0438\u043f\u0443.");
        }
        catch (nfe) {
            throw new ComputingException_1.ComputingException("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \'" + value + "\' \u043a \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u043c\u0443 \u0442\u0438\u043f\u0443.", nfe);
        }
    };
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {string} value преобразуемое значение.
     *
     * @return {Big} полученное значение.
     *
     * @throws ComputingException в случае ошибки преобразования данных.
     */
    StringToNumber.prototype.convert = function (value) {
        if (((typeof value === 'string') || value === null)) {
            return this.convert$java_lang_String(value);
        }
        else if (((value != null) || value === null)) {
            throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)');
        }
        else
            throw new Error('invalid overload');
    };
    return StringToNumber;
}(AbstractConverter_1.AbstractConverter));
exports.StringToNumber = StringToNumber;
StringToNumber["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.converters.StringToNumber";
