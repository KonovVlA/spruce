"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Служебный функционал для работы со строками.
 * @class
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * Производит сравнение строк (проверка первого аргумента на {@link null} не производится).
     * <p>
     * Функция добавлена для упрощения генерируемого JSweet кода метода {@link String#equals(Object)}.
     *
     * @param {string} string1 исходная строка.
     * @param {string} string2 строка, с которой производится сравнение.
     *
     * @return {boolean} {@code true} если строки равны, {@code false} иначе.
     */
    StringUtils.areStringsEqual = function (string1, string2) {
        return string1 === string2;
    };
    /**
     * Производит сравнение строк.
     * <p>
     * Функция добавлена для связывания методов {@link String#compareTo(String)} и лексикографического сравнения строк
     * JavaScript.
     *
     * @param {string} string1 первая строка.
     * @param {string} string2 вторая строка.
     *
     * @return {number} {@code 0} в случае равенства строк, число меньше нуля, если 1-я строка меньше второй, число больше нуля
     * иначе.
     */
    StringUtils.compareTo = function (string1, string2) {
        return string1 > string2 ? 1 : (string1 < string2 ? -1 : 0);
    };
    /**
     * Производит конкатенацию строковых представлений данных списка (подразумевается, что список содержит хотя бы один
     * элемент).
     *
     * @param {*[]} sourceList список объектов.
     *
     * @return {string} результат конкатенации строковых представлений данных списка.
     */
    StringUtils.concat = function (sourceList) {
        return sourceList.map(function (value) { return value.toString(); }).join("");
    };
    /**
     * Проверяет, что переданное значение равно {@code null} или является пустой строкой.
     *
     * @param {string} value значение для проверки.
     *
     * @return {boolean} {@code true} если переданное значение равно {@code null} или является пустой строкой, {@code false}
     * иначе.
     */
    StringUtils.isNullOrEmpty = function (value) {
        return value == null || /* isEmpty */ (value.length === 0);
    };
    /**
     * Возвращает индекс последнего вхождения искомой подстроки в исходную строку. Поиск начинается с указанной
     * позиции.
     * <p>
     * Функция добавлена в связи с багом в реализации lastIndexOf в Internet Explorer.
     * <p>
     * {@code "Тестовая строка теста".lastIndexOf("ес", 0) == 17}, а по спецификации и в Java результат {@code -1}.
     *
     * @param {string} sourceString исходная строка.
     * @param {string} searchString искомая подстрока.
     * @param {number} index        позиция начала поиска.
     *
     * @return {number} индекс последнего вхождения искомой подстроки в исходную строку.
     */
    StringUtils.lastIndexOf = function (sourceString, searchString, index) {
        var searchLength = searchString.length;
        var indexByStringLength = sourceString.length - searchLength;
        for (var i = index < indexByStringLength ? index : indexByStringLength; i >= 0; i--) {
            if (sourceString.substr(i, searchLength) === searchString) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Производит проверку строки на предмет соответствия регулярному выражению.
     * <p>
     * Функция добавлена для связывания методов {@link String#matches(String)} и метода {@code test} объекта {@code
     * RegExp} JavaScript.
     *
     * @param {string} sourceString строка для проверки.
     * @param {string} regExp       строка регулярного выражения проверки.
     *
     * @return {boolean} {@code true} если строка соответствует регулярному выражению, {@code false} иначе.
     */
    StringUtils.matchByRegExp = function (sourceString, regExp) {
        return new RegExp(regExp).test(sourceString);
    };
    /**
     * Производит замены символов в строке в соответствии с переданным мапингом.
     *
     * @param {string} sourceString исходная строка.
     * @param {*} map          мапинг, по которому производятся замены (ключ - символ (как строка), значение - строка).
     *
     * @return {string} строка с произведенными заменами.
     */
    StringUtils.replaceUsingMap = function (sourceString, map) {
        var result = "";
        var sz = sourceString.length;
        for (var i = 0; i < sz; i++) {
            var currentSymbol = sourceString.charAt(i);
            var currentReplacement = CollectionUtils_1.CollectionUtils.get(map, currentSymbol);
            result += currentReplacement == null ? currentSymbol : currentReplacement;
        }
        return result;
    };
    /**
     * Производит разбиение строки по регулярному выражению.
     * <p>
     * Функция добавлена, т.к. реализация метода {@link String#split} в Java воспринимает входную строку, как регулярное
     * выражение, а аналогичный метод в JavaScript - как строку, соответственно, ее надо принудительно преобразовывать в
     * {@code RegExp}.
     *
     * @param {string} sourceString строка для разбиения.
     * @param {string} regExp       строка регулярного выражения разбиения.
     *
     * @return {java.lang.String[]} массив строк, на который разбивается строка регулярным выражением.
     */
    StringUtils.splitByRegExp = function (sourceString, regExp) {
        return sourceString.split(new RegExp(regExp));
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
StringUtils["__class"] = "ru.sbrf.ufs.prodsel.elengine.util.StringUtils";
var CollectionUtils_1 = require("./CollectionUtils");
