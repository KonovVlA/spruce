"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
var big_js_1 = require("big.js");
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var ComputingException_1 = require("../exception/ComputingException");
/**
 * Математические функции.
 * @class
 */
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.MAX_SAFE_INTEGER_$LI$ = function () { if (MathUtils.MAX_SAFE_INTEGER == null) {
        MathUtils.MAX_SAFE_INTEGER = MathUtils.initMaxSafeInteger();
    } return MathUtils.MAX_SAFE_INTEGER; };
    MathUtils.ONE_$LI$ = function () { if (MathUtils.ONE == null) {
        MathUtils.ONE = new big_js_1.Big("1");
    } return MathUtils.ONE; };
    MathUtils.TOLERANCE_$LI$ = function () { if (MathUtils.TOLERANCE == null) {
        MathUtils.TOLERANCE = MathUtils.initTolerance();
    } return MathUtils.TOLERANCE; };
    MathUtils.ZERO_$LI$ = function () { if (MathUtils.ZERO == null) {
        MathUtils.ZERO = new big_js_1.Big("0");
    } return MathUtils.ZERO; };
    /**
     * Вычисляем e^x. Расчет оптимизирован относительно обычного ряда Тейлора разбиением на возведение в степень
     * отдельно целой и дробной части.
     *
     * @param {Big} x показатель экспоненты.
     *
     * @return {Big} e^x.
     */
    MathUtils.exp = function (x) {
        if ( /* compareTo */x.cmp(MathUtils.ZERO_$LI$()) === 0) {
            return MathUtils.ONE_$LI$();
        }
        else if ( /* compareTo */x.cmp(MathUtils.ZERO_$LI$()) < 0) {
            return NumberUtils_1.NumberUtils.divideUnscaled(MathUtils.ONE_$LI$(), MathUtils.exp(/* negate */ x.times(new big_js_1.Big("-1"))));
        }
        var xWhole = NumberUtils_1.NumberUtils.floor(x);
        if ( /* compareTo */xWhole.cmp(MathUtils.ZERO_$LI$()) === 0) {
            return MathUtils.expTaylor(x);
        }
        var xFraction = NumberUtils_1.NumberUtils.minusUnscaled(x, xWhole);
        var z = NumberUtils_1.NumberUtils.plusUnscaled(MathUtils.ONE_$LI$(), NumberUtils_1.NumberUtils.divideUnscaled(xFraction, xWhole));
        var t = MathUtils.expTaylor(z);
        var maxLong = new big_js_1.Big(MathUtils.MAX_SAFE_INTEGER_$LI$());
        var result = MathUtils.ONE_$LI$();
        while (( /* compareTo */xWhole.cmp(maxLong) >= 0)) {
            {
                result = NumberUtils_1.NumberUtils.multiplyUnscaled(result, MathUtils.intPower(t, MathUtils.MAX_SAFE_INTEGER_$LI$()));
                xWhole = NumberUtils_1.NumberUtils.minusUnscaled(xWhole, maxLong);
            }
        }
        ;
        return NumberUtils_1.NumberUtils.multiplyUnscaled(result, MathUtils.intPower(t, new Number(NumberUtils_1.NumberUtils.getStringRepresentation(xWhole)).valueOf()));
    };
    /**
     * Вычисляет натуральный логарифм числа. Вычисление оптимизировано, т.к. метод Ньютона медленно сходится для больших
     * чисел.
     *
     * @param {Big} x число для получения натурального логарифма.
     *
     * @return {Big} натуральный логарифм числа.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    MathUtils.ln = function (x) {
        if ( /* compareTo */x.cmp(MathUtils.ZERO_$LI$()) <= 0) {
            throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f ln \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0430, \u0442.\u043a. \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 <= 0");
        }
        var magnitude = NumberUtils_1.NumberUtils.getStringRepresentation(NumberUtils_1.NumberUtils.floor(x)).length;
        if (magnitude < 3) {
            return MathUtils.lnNewton(x);
        }
        else {
            var root = MathUtils.intRoot(x, magnitude);
            var lnRoot = MathUtils.lnNewton(root);
            return NumberUtils_1.NumberUtils.multiplyUnscaled(new big_js_1.Big(magnitude), lnRoot);
        }
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
    MathUtils.log = function (x, base) {
        if ( /* compareTo */base.cmp(MathUtils.ZERO_$LI$()) <= 0 || /* compareTo */ base.cmp(MathUtils.ONE_$LI$()) === 0) {
            throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f log \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0430, \u0442.\u043a. 2-\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \'" + base + "\'.");
        }
        try {
            return NumberUtils_1.NumberUtils.divideUnscaled(MathUtils.ln(x), MathUtils.ln(base));
        }
        catch (ce) {
            throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f log \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0430, \u0442.\u043a. \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 ln(" + x + ") \u0438\u043b\u0438 ln(" + base + ").", ce);
        }
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
    MathUtils.log10 = function (x) {
        try {
            return MathUtils.log(x, new big_js_1.Big("10"));
        }
        catch (ce) {
            throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f log10 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0430, \u0442.\u043a. \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 log(" + x + ", 10).", ce);
        }
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
    MathUtils.pow = function (x, exponent) {
        try {
            if (NumberUtils_1.NumberUtils.isStringInteger(NumberUtils_1.NumberUtils.getStringRepresentation(exponent))) {
                var result = MathUtils.safeIntPower(x, exponent);
                if (result != null) {
                    return result;
                }
            }
            return MathUtils.exp(NumberUtils_1.NumberUtils.multiplyUnscaled(MathUtils.ln(x), exponent));
        }
        catch (ce) {
            throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f pow \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0430, \u0442.\u043a. \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 ln(" + x + ").", ce);
        }
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
    MathUtils.sqrt = function (x) {
        try {
            return MathUtils.intRoot(x, 2);
        }
        catch (ce) {
            throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f sqrt \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0430, \u0442.\u043a. \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 intRoot(" + x + ", 2).", ce);
        }
    };
    /**
     * Вычисляет e^x рядом Тейлора.
     *
     * @param {Big} x показатель экспоненты.
     *
     * @return {Big} e^x.
     * @private
     */
    /*private*/ MathUtils.expTaylor = function (x) {
        var factorial = MathUtils.ONE_$LI$();
        var xPower = x;
        var sumPrev;
        var sum = NumberUtils_1.NumberUtils.plusUnscaled(x, MathUtils.ONE_$LI$());
        var i = 2;
        do {
            {
                xPower = NumberUtils_1.NumberUtils.multiplyUnscaled(xPower, x);
                factorial = NumberUtils_1.NumberUtils.multiplyUnscaled(factorial, new big_js_1.Big(i));
                var term = NumberUtils_1.NumberUtils.divideUnscaled(xPower, factorial);
                sumPrev = sum;
                sum = NumberUtils_1.NumberUtils.plusUnscaled(sum, term);
                ++i;
            }
        } while (( /* compareTo */sum.cmp(sumPrev) !== 0));
        return sum;
    };
    /**
     * Возвращает максимальное допустимое целое число в текущей среде исполнения (Java и JavaScript соответственно).
     *
     * @return {number} максимальное допустимое целое число в текущей среде исполнения.
     * @private
     */
    /*private*/ MathUtils.initMaxSafeInteger = function () {
        return 9007199254740991;
    };
    /**
     * Пороговое значение при расчетах.
     *
     * @return {Big} пороговое значение при расчетах.
     * @private
     */
    /*private*/ MathUtils.initTolerance = function () {
        return new big_js_1.Big("5e-" + (MathConstants_1.MathConstants.MAX_FRACTION_DIGITS + 1));
    };
    /**
     * Возводит число в целую степень.
     *
     * @param {Big} x        основание степени.
     * @param {number} exponent показатель степени.
     *
     * @return {Big} результат возведения числа в целую степень.
     * @private
     */
    /*private*/ MathUtils.intPower = function (x, exponent) {
        var iX = x;
        var iExponent = exponent;
        if (iExponent < 0) {
            return NumberUtils_1.NumberUtils.divideUnscaled(MathUtils.ONE_$LI$(), MathUtils.intPower(iX, -iExponent));
        }
        var power = MathUtils.ONE_$LI$();
        while ((iExponent > 0)) {
            {
                if ((iExponent & 1) === 1) {
                    power = NumberUtils_1.NumberUtils.multiplyUnscaled(power, iX);
                }
                iX = NumberUtils_1.NumberUtils.multiplyUnscaled(iX, iX);
                iExponent >>= 1;
            }
        }
        ;
        return power;
    };
    /**
     * Вычисляет корень целой степени из числа.
     *
     * @param {Big} x     основание для взятия корня.
     * @param {number} index показатель.
     *
     * @return {Big} корень целой степени из числа.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     * @private
     */
    /*private*/ MathUtils.intRoot = function (x, index) {
        var iX = x;
        if ( /* compareTo */iX.cmp(MathUtils.ZERO_$LI$()) < 0) {
            throw new ComputingException_1.ComputingException("\u0424\u0443\u043d\u043a\u0446\u0438\u044f intRoot \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0430, \u0442.\u043a. \u043f\u0435\u0440\u0432\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043c\u0435\u043d\u044c\u0448\u0435 0.");
        }
        if ( /* compareTo */iX.cmp(MathUtils.ZERO_$LI$()) === 0) {
            return iX;
        }
        var bIndex = new big_js_1.Big(index);
        var im1 = new big_js_1.Big(index - 1);
        var xPrev;
        iX = NumberUtils_1.NumberUtils.divideUnscaled(iX, bIndex);
        do {
            {
                var xToIm1 = MathUtils.intPower(iX, index - 1);
                var xToI = NumberUtils_1.NumberUtils.multiplyUnscaled(iX, xToIm1);
                var numerator = NumberUtils_1.NumberUtils.plusUnscaled(x, NumberUtils_1.NumberUtils.multiplyUnscaled(im1, xToI));
                var denominator = NumberUtils_1.NumberUtils.multiplyUnscaled(bIndex, xToIm1);
                xPrev = iX;
                iX = NumberUtils_1.NumberUtils.divideUnscaled(numerator, denominator);
            }
        } while (( /* compareTo */ /* abs */NumberUtils_1.NumberUtils.minusUnscaled(iX, xPrev).abs().cmp(MathUtils.TOLERANCE_$LI$()) > 0));
        return iX;
    };
    /**
     * Вычисляет натуральный логарифм числа методом Ньютона.
     *
     * @param {Big} x число для взятия натурального логарифма.
     *
     * @return {Big} натуральный логарифм числа.
     * @private
     */
    /*private*/ MathUtils.lnNewton = function (x) {
        var iX = x;
        var term;
        do {
            {
                var eToX = MathUtils.exp(iX);
                term = NumberUtils_1.NumberUtils.divideUnscaled(NumberUtils_1.NumberUtils.minusUnscaled(eToX, x), eToX);
                iX = NumberUtils_1.NumberUtils.minusUnscaled(iX, term);
            }
        } while (( /* compareTo */term.cmp(MathUtils.TOLERANCE_$LI$()) > 0));
        return iX;
    };
    /**
     * Возводит число в целую степень. В случае возникновения исключения возвращает {@link null}.
     *
     * @param {Big} x        основание степени.
     * @param {Big} exponent показатель степени.
     *
     * @return {Big} результат возведения числа в целую степень.
     * @private
     */
    /*private*/ MathUtils.safeIntPower = function (x, exponent) {
        try {
            return MathUtils.intPower(x, new Number(NumberUtils_1.NumberUtils.getStringRepresentation(exponent)).valueOf());
        }
        catch (e) {
            return null;
        }
    };
    return MathUtils;
}());
exports.MathUtils = MathUtils;
MathUtils["__class"] = "ru.sbrf.ufs.prodsel.elengine.util.MathUtils";
var MathConstants_1 = require("./MathConstants");
var NumberUtils_1 = require("./NumberUtils");
