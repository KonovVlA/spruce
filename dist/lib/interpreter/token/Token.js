"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Конструктор.
 *
 * @param {string} t тип токена.
 * @param {string} v значение, хранящееся в токене.
 * @param {ru.sbrf.ufs.prodsel.elengine.token.Token[]} a аргументы токена.
 * @class
 */
var Token = /** @class */ (function () {
    function Token(t, v, a) {
        if (this.a === undefined) {
            this.a = null;
        }
        if (this.t === undefined) {
            this.t = null;
        }
        if (this.v === undefined) {
            this.v = null;
        }
        this.t = t;
        this.v = v;
        this.a = a;
    }
    return Token;
}());
exports.Token = Token;
Token["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.Token";
