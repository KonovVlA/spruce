"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUtils = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var TValues_1 = require("../token/TValues");
/**
 * Общий служебный функционал.
 * @class
 */
var CommonUtils = /** @class */ (function () {
    function CommonUtils() {
    }
    /**
     * Производит глубокое клонирование объекта интерпретатора.
     *
     * @param {*} source исходный объект.
     * @param <T>    тип исходного объекта.
     *
     * @return {*} объект-клон.
     */
    CommonUtils.deepClone = function (source) {
        if (source != null && (source instanceof Array)) {
            var sourceList = source;
            var destinationList = ([]);
            for (var index = 0; index < sourceList.length; index++) {
                var sourceListItem = sourceList[index];
                {
                    /* add */ (destinationList.push(CommonUtils.deepClone(sourceListItem)) > 0);
                }
            }
            return destinationList;
        }
        else if ((typeof source === 'boolean') || (source != null && source instanceof Date) || NumberUtils_1.NumberUtils.isBigDecimal(source) || (typeof source === 'string')) {
            return source;
        }
        else if (source != null && (source instanceof Object)) {
            var sourceMap = source;
            var destinationMap = ({});
            {
                var array = /* keySet */ Object.keys(sourceMap);
                for (var index = 0; index < array.length; index++) {
                    var key = array[index];
                    {
                        /* put */ (destinationMap[key] = CommonUtils.deepClone((CollectionUtils_1.CollectionUtils.get(sourceMap, key))));
                    }
                }
            }
            return destinationMap;
        }
        return null;
    };
    /**
     * Возвращает тип данных внутреннего представления интерпретатора по значению.
     *
     * @param {*} value значение для получения типа.
     *
     * @return {string} тип данных внутреннего представления интерпретатора по значению.
     */
    CommonUtils.getType = function (value) {
        if (value != null && (value instanceof Array)) {
            return TValues_1.TValues.ARRAY;
        }
        else if (typeof value === 'boolean') {
            return TValues_1.TValues.BOOLEAN;
        }
        else if (value != null && value instanceof Date) {
            return TValues_1.TValues.DATETIME;
        }
        else if (NumberUtils_1.NumberUtils.isBigDecimal(value)) {
            return TValues_1.TValues.NUMBER;
        }
        else if (value != null && (value instanceof Object)) {
            return TValues_1.TValues.OBJECT;
        }
        else if (typeof value === 'string') {
            return TValues_1.TValues.STRING;
        }
        return TValues_1.TValues.NULL;
    };
    return CommonUtils;
}());
exports.CommonUtils = CommonUtils;
CommonUtils["__class"] = "ru.sbrf.ufs.prodsel.elengine.util.CommonUtils";
var CollectionUtils_1 = require("./CollectionUtils");
var NumberUtils_1 = require("./NumberUtils");
