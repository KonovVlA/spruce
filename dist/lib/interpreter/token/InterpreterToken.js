"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpreterToken = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Конструктор.
 *
 * @param {string} t тип значения.
 * @param {*} v значение.
 * @class
 */
var InterpreterToken = /** @class */ (function () {
    function InterpreterToken(t, v) {
        if (this.t === undefined) {
            this.t = null;
        }
        if (this.v === undefined) {
            this.v = null;
        }
        this.t = t;
        this.v = v;
    }
    return InterpreterToken;
}());
exports.InterpreterToken = InterpreterToken;
InterpreterToken["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.InterpreterToken";
