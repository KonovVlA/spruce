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
exports.IsObjectTypeCheckHandler = void 0;
var TValues_1 = require("../../../TValues");
var AbstractTypeCheckHandler_1 = require("./AbstractTypeCheckHandler");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractTypeCheckHandler
 */
var IsObjectTypeCheckHandler = /** @class */ (function (_super) {
    __extends(IsObjectTypeCheckHandler, _super);
    function IsObjectTypeCheckHandler(interpreter) {
        return _super.call(this, interpreter, TValues_1.TValues.OBJECT) || this;
    }
    return IsObjectTypeCheckHandler;
}(AbstractTypeCheckHandler_1.AbstractTypeCheckHandler));
exports.IsObjectTypeCheckHandler = IsObjectTypeCheckHandler;
IsObjectTypeCheckHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.typecheck.IsObjectTypeCheckHandler";
