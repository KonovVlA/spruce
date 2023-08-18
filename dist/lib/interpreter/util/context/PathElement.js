"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathElement = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Элемент пути в контексте.
 * @class
 */
var PathElement = /** @class */ (function () {
    function PathElement(type, value) {
        if (this.type === undefined) {
            this.type = null;
        }
        if (this.value === undefined) {
            this.value = null;
        }
        this.type = type;
        this.value = value;
    }
    /**
     * Возвращает тип элемента пути.
     *
     * @return {PathElementTypeEnum} тип элемента пути.
     */
    PathElement.prototype.getType = function () {
        return this.type;
    };
    /**
     * Возвращает значение элемента пути.
     *
     * @return {string} значение элемента пути.
     */
    PathElement.prototype.getValue = function () {
        return this.value;
    };
    /**
     *
     * @return {string}
     */
    PathElement.prototype.toString = function () {
        if (this.type != null) {
            switch ((this.type)) {
                case PathElementTypeEnum_1.PathElementTypeEnum.ID:
                    return "." + this.value;
                case PathElementTypeEnum_1.PathElementTypeEnum.INDEX:
                    return "[" + this.value + "]";
                case PathElementTypeEnum_1.PathElementTypeEnum.Q_KEY:
                    return "[\'" + this.value + "\']";
                case PathElementTypeEnum_1.PathElementTypeEnum.DQ_KEY:
                    return "[\"" + this.value + "\"]";
            }
        }
        return "";
    };
    return PathElement;
}());
exports.PathElement = PathElement;
PathElement["__class"] = "ru.sbrf.ufs.prodsel.elengine.util.context.PathElement";
var PathElementTypeEnum_1 = require("./PathElementTypeEnum");
