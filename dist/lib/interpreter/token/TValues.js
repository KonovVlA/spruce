"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TValues = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var CollectionUtils_1 = require("../util/CollectionUtils");
/**
 * Допустимые значения поля {@link Token#t}.
 * @class
 */
var TValues = /** @class */ (function () {
    function TValues() {
    }
    TValues.MINIFIED_TO_FULL_$LI$ = function () { if (TValues.MINIFIED_TO_FULL == null) {
        TValues.MINIFIED_TO_FULL = TValues.generateMinifiedToFull();
    } return TValues.MINIFIED_TO_FULL; };
    /**
     * Возвращает полное наименование типа токена по минифицированному значению либо минифицированное значение, если
     * наименование не обнаружено.
     *
     * @param {string} t минифицированное значение поля {@link Token#t}.
     *
     * @return {string} полное наименование типа токена или минифицированное значение, если наименование отсутствует.
     */
    TValues.getTypeNameOrType = function (t) {
        var typeName = TValues.getTypeName(t);
        return typeName == null ? t : typeName;
    };
    /**
     * Формирует значения {@link #MINIFIED_TO_FULL}.
     *
     * @return {*} значение для инициализации {@link #MINIFIED_TO_FULL}.
     * @private
     */
    /*private*/ TValues.generateMinifiedToFull = function () {
        var map = ({});
        /* put */ (map[TValues.ARRAY] = "array");
        /* put */ (map[TValues.BOOLEAN] = "boolean");
        /* put */ (map[TValues.DATETIME] = "datetime");
        /* put */ (map[TValues.EXTERNAL_ID] = "id");
        /* put */ (map[TValues.FUNCTION] = "function");
        /* put */ (map[TValues.INTERNAL_ID] = "$id");
        /* put */ (map[TValues.NULL] = "null");
        /* put */ (map[TValues.NUMBER] = "number");
        /* put */ (map[TValues.OBJECT] = "object");
        /* put */ (map[TValues.OPERATION] = "operation");
        /* put */ (map[TValues.STRING] = "string");
        return map;
    };
    /**
     * Возвращает полное наименование типа токена по минифицированному значению.
     *
     * @param {string} t минифицированное значение поля {@link Token#t}.
     *
     * @return {string} полное наименование типа токена ({@code null}, если значение отсутствует).
     * @private
     */
    /*private*/ TValues.getTypeName = function (t) {
        return (CollectionUtils_1.CollectionUtils.get(TValues.MINIFIED_TO_FULL_$LI$(), t));
    };
    /**
     * Значение-массив.
     */
    TValues.ARRAY = "a";
    /**
     * Логическое значение.
     */
    TValues.BOOLEAN = "b";
    /**
     * Значение даты.
     */
    TValues.DATETIME = "c";
    /**
     * Идентификатор.
     */
    TValues.EXTERNAL_ID = "d";
    /**
     * Вызов функции (макроса).
     */
    TValues.FUNCTION = "e";
    /**
     * Внутренний идентификатор.
     */
    TValues.INTERNAL_ID = "f";
    /**
     * {@link null}-значение.
     */
    TValues.NULL = "g";
    /**
     * Числовое значение.
     */
    TValues.NUMBER = "h";
    /**
     * Значение-объект.
     */
    TValues.OBJECT = "i";
    /**
     * Операция.
     */
    TValues.OPERATION = "j";
    /**
     * Строковое значение.
     */
    TValues.STRING = "k";
    return TValues;
}());
exports.TValues = TValues;
TValues["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.TValues";
