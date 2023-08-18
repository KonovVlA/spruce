"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberUtils = void 0;
var big_js_1 = require("big.js");
/**
 * Служебный функционал для работы с числами.
 * @class
 */
var NumberUtils = /** @class */ (function () {
    function NumberUtils() {
    }
    /**
     * Округляет число во внутреннем представлении интерпретатора к ближайшему неменьшему целому (0 в 0, 0.1 в 1, 0.5 в
     * 1, -0.1 в 0, -0.5 в 0, -0.6 в 0).
     *
     * @param {Big} value число для округления.
     *
     * @return {Big} результат округления.
     */
    NumberUtils.ceil = function (value) {
        return value.cmp('0') >= 0 ? value.round(0, 3) : value.round(0, 0);
    };
    /**
     * Обертка над {@link BigDecimal#divide(BigDecimal, MathContext)} для соблюдения требуемой точности.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} частное чисел.
     */
    NumberUtils.divide = function (left, right) {
        return NumberUtils.scale(/* divide */ left.div(right));
    };
    /**
     * Вычисляем e^x.
     *
     * @param {Big} x показатель экспоненты.
     *
     * @return {Big} e^x.
     */
    NumberUtils.exp = function (x) {
        return NumberUtils.scale(MathUtils_1.MathUtils.exp(x));
    };
    /**
     * Округляет число во внутреннем представлении интерпретатора к ближайшему небольшему целому (0 в 0, 0.1 в 0, 0.5 в
     * 0, -0.1 в -1, -0.5 в -1, -0.6 в -1).
     *
     * @param {Big} value число для округления.
     *
     * @return {Big} результат округления.
     */
    NumberUtils.floor = function (value) {
        return value.cmp('0') >= 0 ? value.round(0, 0) : value.round(0, 3);
    };
    /**
     * Возвращает строковое представление числа во внутреннем представлении интерпретатора (необходима, так как в Java
     * при таком преобразовании не теряются незначащие нули в дробной части, а в JS теряются).
     *
     * @param {Big} value число во внутреннем представлении интерпретатора.
     *
     * @return {string} строковое представление числа.
     */
    NumberUtils.getStringRepresentation = function (value) {
        var stringRepresentation = value.toString();
        var plainRepresentation = stringRepresentation.indexOf('e') === -1 && stringRepresentation.indexOf('E') === -1;
        var indexOfDot = stringRepresentation.indexOf('.');
        if ( /* compareTo */value.cmp(new big_js_1.Big("0")) === 0) {
            return "0";
        }
        if (plainRepresentation && indexOfDot > -1) {
            var i = stringRepresentation.length - 1;
            while (((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(stringRepresentation.charAt(i)) == '0'.charCodeAt(0))) {
                {
                    i--;
                }
            }
            ;
            return stringRepresentation.substring(0, i === indexOfDot ? i : i + 1);
        }
        return stringRepresentation;
    };
    /**
     * Проверяет, что строка является представлением целого числа.
     *
     * @param {string} sourceString строка для проверки.
     *
     * @return {boolean} {@code true} в случае положительного результата проверки, {@code false} иначе.
     */
    NumberUtils.isStringInteger = function (sourceString) {
        return StringUtils_1.StringUtils.matchByRegExp(sourceString, "^-?\\d+(\\.0+)?$");
    };
    /**
     * Проверяет, что строка является представлением целого неотрицательного числа.
     *
     * @param {string} sourceString строка для проверки.
     *
     * @return {boolean} {@code true} в случае положительного результата проверки, {@code false} иначе.
     */
    NumberUtils.isStringIntegerGeZero = function (sourceString) {
        return StringUtils_1.StringUtils.matchByRegExp(sourceString, "^\\d+(\\.0+)?$");
    };
    /**
     * Проверяет, что строка является представлением числа.
     *
     * @param {string} sourceString строка для проверки.
     *
     * @return {boolean} {@code true} в случае положительного результата проверки, {@code false} иначе.
     */
    NumberUtils.isStringNumber = function (sourceString) {
        return StringUtils_1.StringUtils.matchByRegExp(sourceString, "^-?\\d+(\\.\\d+)?([eE][+-]?\\d+)?$");
    };
    /**
     * Проверяет, что строка является представлением неотрицательного числа.
     *
     * @param {string} sourceString строка для проверки.
     *
     * @return {boolean} {@code true} в случае положительного результата проверки, {@code false} иначе.
     */
    NumberUtils.isStringNumberGeZero = function (sourceString) {
        return StringUtils_1.StringUtils.matchByRegExp(sourceString, "^\\d+(\\.\\d+)?([eE][+-]?\\d+)?$");
    };
    /**
     * Вычисляет натуральный логарифм числа.
     *
     * @param {Big} x число для получения натурального логарифма.
     *
     * @return {Big} натуральный логарифм числа.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    NumberUtils.ln = function (x) {
        return NumberUtils.scale(MathUtils_1.MathUtils.ln(x));
    };
    /**
     * Вычисляет логарифм числа по заданному основанию.
     *
     * @param {Big} x    число для получения логарифма.
     * @param {Big} base основание логарифма.
     *
     * @return {Big} логарифм числа по заданному основанию.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    NumberUtils.log = function (x, base) {
        return NumberUtils.scale(MathUtils_1.MathUtils.log(x, base));
    };
    /**
     * Вычисляет логарифм числа по заданному основанию.
     *
     * @param {Big} x число для получения логарифма.
     *
     * @return {Big} логарифм числа по заданному основанию.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    NumberUtils.log10 = function (x) {
        return NumberUtils.scale(MathUtils_1.MathUtils.log10(x));
    };
    /**
     * Обертка над {@link BigDecimal#subtract(BigDecimal, MathContext)} для соблюдения требуемой точности.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} разность чисел.
     */
    NumberUtils.minus = function (left, right) {
        return NumberUtils.scale(/* subtract */ left.minus(right));
    };
    /**
     * Обертка над {@link BigDecimal#multiply(BigDecimal, MathContext)} для соблюдения требуемой точности.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} произведение чисел.
     */
    NumberUtils.multiply = function (left, right) {
        return NumberUtils.scale(/* multiply */ left.times(right));
    };
    /**
     * Обертка над {@link BigDecimal#add(BigDecimal, MathContext)} для соблюдения требуемой точности.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} сумма чисел.
     */
    NumberUtils.plus = function (left, right) {
        return NumberUtils.scale(/* add */ left.plus(right));
    };
    /**
     * Возводит число в заданную степень. Функция определена только для неотрицательного числа.
     *
     * @param {Big} x        число для возведения в степень.
     * @param {Big} exponent степень.
     *
     * @return {Big} число в заданной степени.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    NumberUtils.pow = function (x, exponent) {
        return NumberUtils.scale(MathUtils_1.MathUtils.pow(x, exponent));
    };
    /**
     * В Java не выполняет никаких операций. В JavaScript откатывает значение {@code Big.DP} к переданному в качестве
     * параметра.
     *
     * @param {number} accuracy устанавливаемая точность расчетов.
     */
    NumberUtils.rollbackBigDecimalAccuracy = function (accuracy) {
        big_js_1.Big.DP = accuracy;
    };
    /**
     * Округляет число во внутреннем представлении интерпретатора в соответствии с обычными правилами (0 в 0, 0.1 в 0,
     * 0.5 в 1, -0.1 в 0, -0.5 в 0, -0.6 в -1).
     *
     * @param {Big} value число для округления.
     *
     * @return {Big} результат округления.
     */
    NumberUtils.round = function (value) {
        return NumberUtils.toFixed(value, 0);
    };
    /**
     * В Java возвращает текущую точность, используемую в расчетах. В JavaScript устанавливает значение {@code Big.DP} в
     * {@link #ACCURACY} и возвращает значение {@code Big.DP} до установки нового значения.
     *
     * @return {number} точность, используемая в расчетах до применения данной функции.
     */
    NumberUtils.setupBigDecimalAccuracy = function () {
        var temp = big_js_1.Big.DP;
        big_js_1.Big.DP = NumberUtils.ACCURACY;
        return temp;
    };
    /**
     * Вычисляет квадратный корень числа.
     *
     * @param {Big} x число для получения квадратного корня.
     *
     * @return {Big} квадратный корень числа.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    NumberUtils.sqrt = function (x) {
        return NumberUtils.scale(MathUtils_1.MathUtils.sqrt(x));
    };
    /**
     * Округляет значение до заданного количества знаков после запятой.
     * <p>
     * В Java-реализации в зависимости от знака числа производится соответствующее округление ({@link
     * RoundingMode#HALF_UP}, {@link RoundingMode#HALF_DOWN}).
     * <p>
     * В JavaScript-реализации используются режимы округления Big, в котором режим 1 соответствует HALF_UP, а режим
     * HALF_DOWN отсутствует. Поэтому для неотрицательных чисел используется режим HALF_UP, для остальных, аналогично
     * реализации Big, производится необходимое округление.
     *
     * @param {Big} value  значение.
     * @param {number} digits требуемая точность.
     *
     * @return {Big} значение, округленное до заданного количества знаков после запятой.
     */
    NumberUtils.toFixed = function (value, digits) {
        if (value.cmp('0') >= 0) {
            return value.round(digits, 1); // неотрицательные числа округляем обычным способом
        }
        else {
            var x = new big_js_1.Big(value); // клонируем исходное число
            var xc = x.c; // массив цифр
            var i = x.e + digits + 1; // индекс 1-й цифры, исключаемой из результата
            var more = xc[i] > 5 || (xc[i] === 5 && typeof xc[i + 1] === 'number'); // нужно увеличить модуль числа?
            if (i < 1 || !xc[0]) { // имеющихся цифр недостаточно
                if (more) { // при усечении в исходном массиве остаются только нули, но последний надо сделать 1
                    x.e = -digits;
                    x.c = [1];
                }
                else {
                    x.c = [x.e = 0]; // ноль
                }
            }
            else {
                xc.length = i--; // удаляем ненужные цифры
                if (more) { // если требуется округление по модулю вверх, производим его
                    for (; ++xc[i] > 9;) {
                        xc[i] = 0;
                        if (!i--) {
                            ++x.e;
                            xc.unshift(1);
                        }
                    }
                }
                for (i = xc.length; !xc[--i]; xc.pop())
                    ; // удаляем ведущие нули
            }
            return x;
        }
    };
    /**
     * Обертка над {@link BigDecimal#divide(BigDecimal, MathContext)} с точностью по умолчанию.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} частное чисел.
     */
    NumberUtils.divideUnscaled = function (left, right) {
        return /* divide */ left.div(right);
    };
    /**
     * Проверяет, что объект является числом во внутреннем представлении интерпретатора.
     *
     * @param {*} object объект для проверки.
     *
     * @return {boolean} {@code true}, если объект является числом во внутреннем представлении интерпретатора, {@code false}
     * иначе.
     */
    NumberUtils.isBigDecimal = function (object) {
        return !!object && typeof object.constructor === 'function' && typeof object.constructor.DP !== 'undefined' && typeof object.constructor.RM !== 'undefined';
    };
    /**
     * Обертка над {@link BigDecimal#subtract(BigDecimal, MathContext)} с точностью по умолчанию.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} разность чисел.
     */
    NumberUtils.minusUnscaled = function (left, right) {
        return /* subtract */ left.minus(right);
    };
    /**
     * Обертка над {@link BigDecimal#multiply(BigDecimal, MathContext)} с точностью по умолчанию.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} произведение чисел.
     */
    NumberUtils.multiplyUnscaled = function (left, right) {
        return /* multiply */ left.times(right);
    };
    /**
     * Обертка над {@link BigDecimal#add(BigDecimal, MathContext)} с точностью по умолчанию.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} сумма чисел.
     */
    NumberUtils.plusUnscaled = function (left, right) {
        return /* add */ left.plus(right);
    };
    /**
     * Устанавливает итоговую точность значения.
     *
     * @param {Big} value значение.
     *
     * @return {Big} значение с требуемой точностью.
     * @private
     */
    /*private*/ NumberUtils.scale = function (value) {
        return NumberUtils.toFixed(value, MathConstants_1.MathConstants.MAX_FRACTION_DIGITS);
    };
    /**
     * Точность при расчетах (хранимое количество знаков).
     */
    NumberUtils.ACCURACY = 40;
    return NumberUtils;
}());
exports.NumberUtils = NumberUtils;
NumberUtils["__class"] = "ru.sbrf.ufs.prodsel.elengine.util.NumberUtils";
var MathConstants_1 = require("./MathConstants");
var StringUtils_1 = require("./StringUtils");
var MathUtils_1 = require("./MathUtils");
