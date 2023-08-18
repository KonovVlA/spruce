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
exports.RuntimeComputingException = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Конструктор.
 *
 * @param {string} message сообщение об ошибке.
 * @param {Error} cause   причина ошибки.
 * @class
 * @extends Error
 */
var RuntimeComputingException = /** @class */ (function (_super) {
    __extends(RuntimeComputingException, _super);
    function RuntimeComputingException(message, cause) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        Object.setPrototypeOf(_this, RuntimeComputingException.prototype);
        return _this;
    }
    return RuntimeComputingException;
}(Error));
exports.RuntimeComputingException = RuntimeComputingException;
RuntimeComputingException["__class"] = "ru.sbrf.ufs.prodsel.elengine.exception.RuntimeComputingException";
