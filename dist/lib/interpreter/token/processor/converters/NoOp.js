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
exports.NoOp = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var AbstractConverter_1 = require("./AbstractConverter");
/**
 * Заглушка для возврата значения без преобразования.
 * @extends AbstractConverter
 * @class
 */
var NoOp = /** @class */ (function (_super) {
    __extends(NoOp, _super);
    function NoOp() {
        return _super.call(this, null) || this;
    }
    NoOp.INSTANCE_$LI$ = function () { if (NoOp.INSTANCE == null) {
        NoOp.INSTANCE = new NoOp();
    } return NoOp.INSTANCE; };
    /**
     * Возвращает экземпляр класса.
     *
     * @return {NoOp} экземпляр класса.
     */
    NoOp.getInstance = function () {
        return NoOp.INSTANCE_$LI$();
    };
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {*} value преобразуемое значение.
     *
     * @return {*} полученное значение.
     */
    NoOp.prototype.convert = function (value) {
        return value;
    };
    return NoOp;
}(AbstractConverter_1.AbstractConverter));
exports.NoOp = NoOp;
NoOp["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.converters.NoOp";
