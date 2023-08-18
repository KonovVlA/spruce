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
exports.ValidationException = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var ELEngineException_1 = require("./ELEngineException");
/**
 * Конструктор.
 *
 * @param {string} message сообщение об ошибке.
 * @class
 * @extends ELEngineException
 */
var ValidationException = /** @class */ (function (_super) {
    __extends(ValidationException, _super);
    function ValidationException(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, ValidationException.prototype);
        return _this;
    }
    return ValidationException;
}(ELEngineException_1.ELEngineException));
exports.ValidationException = ValidationException;
ValidationException["__class"] = "ru.sbrf.ufs.prodsel.elengine.exception.ValidationException";
