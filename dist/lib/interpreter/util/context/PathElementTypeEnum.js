"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathElementTypeEnum = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Типы элементов пути контекста.
 * @enum
 * @property {PathElementTypeEnum} ID
 * Обращение по идентификатору.
 * @property {PathElementTypeEnum} INDEX
 * Обращение по индексу массива.
 * @property {PathElementTypeEnum} Q_KEY
 * Обращение по строковому ключу заключенного в одинарные кавычки.
 * @property {PathElementTypeEnum} DQ_KEY
 * Обращение по строковому ключу заключенного в двойные кавычки.
 * @class
 */
var PathElementTypeEnum;
(function (PathElementTypeEnum) {
    /**
     * Обращение по идентификатору.
     */
    PathElementTypeEnum[PathElementTypeEnum["ID"] = 0] = "ID";
    /**
     * Обращение по индексу массива.
     */
    PathElementTypeEnum[PathElementTypeEnum["INDEX"] = 1] = "INDEX";
    /**
     * Обращение по строковому ключу заключенного в одинарные кавычки.
     */
    PathElementTypeEnum[PathElementTypeEnum["Q_KEY"] = 2] = "Q_KEY";
    /**
     * Обращение по строковому ключу заключенного в двойные кавычки.
     */
    PathElementTypeEnum[PathElementTypeEnum["DQ_KEY"] = 3] = "DQ_KEY";
})(PathElementTypeEnum = exports.PathElementTypeEnum || (exports.PathElementTypeEnum = {}));
