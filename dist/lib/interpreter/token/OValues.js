"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OValues = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var CollectionUtils_1 = require("../util/CollectionUtils");
/**
 * Допустимые значения поля {@link Token#v} в случае значения {@link TValues#OPERATION} поля {@link Token#t}.
 * @class
 */
var OValues = /** @class */ (function () {
    function OValues() {
    }
    OValues.MINIFIED_TO_FULL_$LI$ = function () { if (OValues.MINIFIED_TO_FULL == null) {
        OValues.MINIFIED_TO_FULL = OValues.generateMinifiedToFull();
    } return OValues.MINIFIED_TO_FULL; };
    /**
     * Возвращает полное наименование операции по минифицированному значению либо минифицированное значение, если
     * наименование не обнаружено.
     *
     * @param {string} v минифицированное значение поля {@link Token#v}.
     *
     * @return {string} полное наименование операции или минифицированное значение, если наименование отсутствует.
     */
    OValues.getOperationNameOrOperation = function (v) {
        var operationName = OValues.getOperationName(v);
        return operationName == null ? v : operationName;
    };
    /**
     * Формирует значения {@link #MINIFIED_TO_FULL}.
     *
     * @return {*} значение для инициализации {@link #MINIFIED_TO_FULL}.
     * @private
     */
    /*private*/ OValues.generateMinifiedToFull = function () {
        var map = ({});
        /* put */ (map[OValues.B_AND] = "&");
        /* put */ (map[OValues.B_ARRAY_LIKE_ACCESS] = "[]");
        /* put */ (map[OValues.B_DIV] = "/");
        /* put */ (map[OValues.B_DOT_ACCESS] = ".");
        /* put */ (map[OValues.B_OPTIONAL_ACCESS] = "?");
        /* put */ (map[OValues.B_EQ] = "=");
        /* put */ (map[OValues.B_FIELD] = ":");
        /* put */ (map[OValues.B_GE] = ">=");
        /* put */ (map[OValues.B_GT] = ">");
        /* put */ (map[OValues.B_LE] = "<=");
        /* put */ (map[OValues.B_LT] = "<");
        /* put */ (map[OValues.B_MINUS] = "-");
        /* put */ (map[OValues.B_MUL] = "*");
        /* put */ (map[OValues.B_NEQ] = "<>");
        /* put */ (map[OValues.B_OR] = "|");
        /* put */ (map[OValues.B_PLUS] = "+");
        /* put */ (map[OValues.U_MINUS] = "u-");
        /* put */ (map[OValues.U_NOT] = "u!");
        return map;
    };
    /**
     * Возвращает полное наименование операции по минифицированному значению.
     *
     * @param {string} v минифицированное значение поля {@link Token#v}.
     *
     * @return {string} полное наименование операции ({@code null}, если значение отсутствует).
     * @private
     */
    /*private*/ OValues.getOperationName = function (v) {
        return (CollectionUtils_1.CollectionUtils.get(OValues.MINIFIED_TO_FULL_$LI$(), v));
    };
    /**
     * Логическое "и".
     */
    OValues.B_AND = "e";
    /**
     * Доступ к элементу массива по индексу, полю объекта по имени.
     */
    OValues.B_ARRAY_LIKE_ACCESS = "q";
    /**
     * Деление.
     */
    OValues.B_DIV = "d";
    /**
     * Доступ к полю объекта по идентификатору поля.
     */
    OValues.B_DOT_ACCESS = "p";
    /**
     * Сравнение на равенство.
     */
    OValues.B_EQ = "g";
    /**
     * Создание поля объекта.
     */
    OValues.B_FIELD = "o";
    /**
     * Сравнение на больше или равно.
     */
    OValues.B_GE = "l";
    /**
     * Сравнение на больше.
     */
    OValues.B_GT = "j";
    /**
     * Сравнение на меньше или равно.
     */
    OValues.B_LE = "k";
    /**
     * Сравнение на меньше.
     */
    OValues.B_LT = "i";
    /**
     * Бинарный минус.
     */
    OValues.B_MINUS = "b";
    /**
     * Умножение.
     */
    OValues.B_MUL = "c";
    /**
     * Сравнение на неравенство.
     */
    OValues.B_NEQ = "h";
    /**
     * Опциональный доступ к полю объекта по идентификатору поля.
     */
    OValues.B_OPTIONAL_ACCESS = "r";
    /**
     * Логическое "или".
     */
    OValues.B_OR = "f";
    /**
     * Бинарный плюс.
     */
    OValues.B_PLUS = "a";
    /**
     * Унарный минус.
     */
    OValues.U_MINUS = "m";
    /**
     * Логическое отрицание.
     */
    OValues.U_NOT = "n";
    return OValues;
}());
exports.OValues = OValues;
OValues["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.OValues";
