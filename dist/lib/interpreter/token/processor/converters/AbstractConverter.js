"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractConverter = void 0;
/**
 * Интерфейс конвертера.
 *
 * @param <F> тип исходных данных.
 * @param <T> целевой тип данных.
 * @class
 */
var AbstractConverter = /** @class */ (function () {
    function AbstractConverter(targetType) {
        if (this.targetType === undefined) {
            this.targetType = null;
        }
        this.targetType = targetType;
    }
    /**
     * Возвращает целевой тип преобразования.
     *
     * @return {string} целевой тип преобразования.
     */
    AbstractConverter.prototype.getTargetType = function () {
        return this.targetType;
    };
    return AbstractConverter;
}());
exports.AbstractConverter = AbstractConverter;
AbstractConverter["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.converters.AbstractConverter";
