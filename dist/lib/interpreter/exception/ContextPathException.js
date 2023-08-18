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
exports.ContextPathException = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var ELEngineException_1 = require("./ELEngineException");
/**
 * Конструктор.
 *
 * @param {string} message сообщение об ошибке.
 * @param {Error} cause   причина ошибки.
 * @class
 * @extends ELEngineException
 */
var ContextPathException = /** @class */ (function (_super) {
    __extends(ContextPathException, _super);
    function ContextPathException(message, cause) {
        var _this = this;
        if (((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof Error) || cause === null)) {
            var __args = arguments;
            _this = _super.call(this, message, cause) || this;
        }
        else if (((typeof message === 'string') || message === null) && cause === undefined) {
            var __args = arguments;
            _this = _super.call(this, message) || this;
        }
        else
            throw new Error('invalid overload');
        return _this;
    }
    return ContextPathException;
}(ELEngineException_1.ELEngineException));
exports.ContextPathException = ContextPathException;
ContextPathException["__class"] = "ru.sbrf.ufs.prodsel.elengine.exception.ContextPathException";
