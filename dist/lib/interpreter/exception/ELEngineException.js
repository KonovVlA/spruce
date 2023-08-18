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
exports.ELEngineException = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Исключение, возникшее в ходе интерпретации выражения.
 * @extends Error
 * @class
 */
var ELEngineException = /** @class */ (function (_super) {
    __extends(ELEngineException, _super);
    function ELEngineException(message, cause) {
        var _this = this;
        if (((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof Error) || cause === null)) {
            var __args = arguments;
            _this = _super.call(this, message) || this;
            _this.message = message;
        }
        else if (((typeof message === 'string') || message === null) && cause === undefined) {
            var __args = arguments;
            _this = _super.call(this, message) || this;
            _this.message = message;
        }
        else
            throw new Error('invalid overload');
        return _this;
    }
    return ELEngineException;
}(Error));
exports.ELEngineException = ELEngineException;
ELEngineException["__class"] = "ru.sbrf.ufs.prodsel.elengine.exception.ELEngineException";
