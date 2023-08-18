"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionUtils = void 0;
var big_js_1 = require("big.js");
/**
 * Служебный функционал для работы с коллекциями.
 * @class
 */
var CollectionUtils = /** @class */ (function () {
    function CollectionUtils() {
    }
    /**
     * Производит глубокое клонирование данных с преобразованием к типам внутреннего представления интерпретатора для
     * безопасного использования при расчетах.
     * <p>
     * В зависимости от типа объекта выполняется следующее:
     * <p>
     * для экземпляров {@link Collection} (массивов) производится копирование всех данных в новый {@link ArrayList}
     * (массив) с рекурсивным вызовом для них этой же функции;
     * <p>
     * для экземпляров {@link Boolean}, {@link String}, а также проходящих проверку {@link
     * NumberUtils#isBigDecimal(Object)}, производится перенос значения без клонирования;
     * <p>
     * для экземпляров, проходящих проверку {@link #isLikeDate(Object)}, устанавливается значение, полученное
     * выполнением {@link #toDate(Object)};
     * <p>
     * для экземпляров {@link Number} производится порождение соответствующего экземпляра {@link BigDecimal};
     * <p>
     * для экземпляров {@link Map} производится копирование всех пар ключ-значение в новый {@link HashMap} с рекурсивным
     * вызовом для значений этой же функции;
     * <p>
     * для экземпляров, проходящих проверку {@link #isLikeMap(Object)}, устанавливается значение, полученное выполнением
     * {@link #toMap(Object)}.
     *
     * @param {*} source исходный объект.
     *
     * @return {*} объект-клон.
     *
     * @throws ComputingException в случае ошибки преобразования.
     */
    CollectionUtils.deepCloneWithTypeConversion = function (source) {
        if (source != null && (source instanceof Array)) {
            var sourceList = source;
            var destinationList = ([]);
            for (var index = 0; index < sourceList.length; index++) {
                var sourceListItem = sourceList[index];
                {
                    /* add */ (destinationList.push(CollectionUtils.deepCloneWithTypeConversion(sourceListItem)) > 0);
                }
            }
            return destinationList;
        }
        else if ((typeof source === 'boolean') || NumberUtils_1.NumberUtils.isBigDecimal(source) || (typeof source === 'string')) {
            return source;
        }
        else if (CollectionUtils.isLikeDate(source)) {
            return CollectionUtils.toDate(source);
        }
        else if (typeof source === 'number') {
            return new big_js_1.Big(source.toString());
        }
        else if (source != null && (source instanceof Object)) {
            var sourceMap = source;
            var destinationMap = ({});
            {
                var array = /* keySet */ Object.keys(sourceMap);
                for (var index = 0; index < array.length; index++) {
                    var key = array[index];
                    {
                        /* put */ (destinationMap[key] = CollectionUtils.deepCloneWithTypeConversion((CollectionUtils.get(sourceMap, key))));
                    }
                }
            }
            return destinationMap;
        }
        else if (CollectionUtils.isLikeMap(source)) {
            return CollectionUtils.toMap(source);
        }
        return null;
    };
    /**
     * Извлекает элемент из ассоциативного массива.
     * <p>
     * Функция добавлена, т.к. соответствующий функционал JSweet неправильно обрабатывает null-подобные элементы ({@code
     * false}, {@code 0}).
     *
     * @param {*} map ассоциативный массив.
     * @param {string} key ключ.
     * @param <T> тип значения.
     *
     * @return {*} элемент ассоциативного массива по заданному ключу.
     */
    CollectionUtils.get = function (map, key) {
        return map.hasOwnProperty(key) ? map[key] : null;
    };
    /**
     * Добавляет элементы в коллекцию.
     * <p>
     * Функция добавлена для реализации отсутствующего функционала JSweet.
     *
     * @param {*[]} collection коллекция.
     * @param {T[]} elements   добавляемые элементы.
     * @param <T>        тип элемента коллекции.
     * @return {*[]}
     */
    CollectionUtils.addAll = function (collection) {
        var elements = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            elements[_i - 1] = arguments[_i];
        }
        return collection.concat(elements);
    };
    /**
     * Проверяет, что объект может быть использован в интерпретаторе как дата (является экземпляром {@link Date}, {@link
     * Calendar}, {@link XMLGregorianCalendar}).
     *
     * @param {*} value значение для проверки.
     *
     * @return {boolean} {@code true} если объект может использоваться интерпретатором как дата, {@code false} иначе.
     * @private
     */
    /*private*/ CollectionUtils.isLikeDate = function (value) {
        return value instanceof Date;
    };
    /**
     * В Java проверяет, что объект должен быть специальным образом преобразован в Map полей-значений (для этого
     * достаточно проверить, что он не равен {@code null}). В TypeScript/JavaScript всегда возвращает {@code false},
     * т.к. прямая проверка {@code instanceof Object} в вызывающей функции выполняется раньше, а в ее блоке выполняется
     * универсальное преобразование в Object.
     *
     * @param {*} value значение для проверки.
     * @param <T>   тип значения.
     *
     * @return {boolean} {@code true} если объект, должен специальным образом преобразован в Map, {@code false} иначе.
     * @private
     */
    /*private*/ CollectionUtils.isLikeMap = function (value) {
        return false;
    };
    /**
     * Возвращает дату во внутреннем представлении интерпретатора для совместимых типов (совместимость можно
     * предварительно проконтролировать вызовом {@link #isLikeDate(Object)}).
     *
     * @param {*} value значение.
     *
     * @return {Date} дата во внутреннем представлении интерпретатора или {@code null} для несовместимых с преобразованием
     * значений.
     * @private
     */
    /*private*/ CollectionUtils.toDate = function (value) {
        return value;
    };
    /**
     * В Java конвертирует объект в Map (объект должен удовлетворять требованиям JavaBeans). В TypeScript/JavaScript
     * всегда возвращает {@code null}, т.к. прямая проверка {@code instanceof Object} в вызывающей функции выполняется
     * раньше, а в ее блоке выполняется универсальное преобразование в Object.
     *
     * @param {*} value значение для преобразования.
     *
     * @return {*} в Java возвращает конвертированный в Map объект, в TypeScript/JavaScript возвращает {@code null}.
     *
     * @throws ComputingException в случае ошибки преобразования.
     * @private
     */
    /*private*/ CollectionUtils.toMap = function (value) {
        return null;
    };
    return CollectionUtils;
}());
exports.CollectionUtils = CollectionUtils;
CollectionUtils["__class"] = "ru.sbrf.ufs.prodsel.elengine.util.CollectionUtils";
var NumberUtils_1 = require("./NumberUtils");
