import { Big } from 'big.js';
/**
 * Служебный функционал для работы с числами.
 * @class
 */
export declare class NumberUtils {
    /**
     * Точность при расчетах (хранимое количество знаков).
     */
    static ACCURACY: number;
    constructor();
    /**
     * Округляет число во внутреннем представлении интерпретатора к ближайшему неменьшему целому (0 в 0, 0.1 в 1, 0.5 в
     * 1, -0.1 в 0, -0.5 в 0, -0.6 в 0).
     *
     * @param {Big} value число для округления.
     *
     * @return {Big} результат округления.
     */
    static ceil(value: Big): Big;
    /**
     * Обертка над {@link BigDecimal#divide(BigDecimal, MathContext)} для соблюдения требуемой точности.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} частное чисел.
     */
    static divide(left: Big, right: Big): Big;
    /**
     * Вычисляем e^x.
     *
     * @param {Big} x показатель экспоненты.
     *
     * @return {Big} e^x.
     */
    static exp(x: Big): Big;
    /**
     * Округляет число во внутреннем представлении интерпретатора к ближайшему небольшему целому (0 в 0, 0.1 в 0, 0.5 в
     * 0, -0.1 в -1, -0.5 в -1, -0.6 в -1).
     *
     * @param {Big} value число для округления.
     *
     * @return {Big} результат округления.
     */
    static floor(value: Big): Big;
    /**
     * Возвращает строковое представление числа во внутреннем представлении интерпретатора (необходима, так как в Java
     * при таком преобразовании не теряются незначащие нули в дробной части, а в JS теряются).
     *
     * @param {Big} value число во внутреннем представлении интерпретатора.
     *
     * @return {string} строковое представление числа.
     */
    static getStringRepresentation(value: Big): string;
    /**
     * Проверяет, что строка является представлением целого числа.
     *
     * @param {string} sourceString строка для проверки.
     *
     * @return {boolean} {@code true} в случае положительного результата проверки, {@code false} иначе.
     */
    static isStringInteger(sourceString: string): boolean;
    /**
     * Проверяет, что строка является представлением целого неотрицательного числа.
     *
     * @param {string} sourceString строка для проверки.
     *
     * @return {boolean} {@code true} в случае положительного результата проверки, {@code false} иначе.
     */
    static isStringIntegerGeZero(sourceString: string): boolean;
    /**
     * Проверяет, что строка является представлением числа.
     *
     * @param {string} sourceString строка для проверки.
     *
     * @return {boolean} {@code true} в случае положительного результата проверки, {@code false} иначе.
     */
    static isStringNumber(sourceString: string): boolean;
    /**
     * Проверяет, что строка является представлением неотрицательного числа.
     *
     * @param {string} sourceString строка для проверки.
     *
     * @return {boolean} {@code true} в случае положительного результата проверки, {@code false} иначе.
     */
    static isStringNumberGeZero(sourceString: string): boolean;
    /**
     * Вычисляет натуральный логарифм числа.
     *
     * @param {Big} x число для получения натурального логарифма.
     *
     * @return {Big} натуральный логарифм числа.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    static ln(x: Big): Big;
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
    static log(x: Big, base: Big): Big;
    /**
     * Вычисляет логарифм числа по заданному основанию.
     *
     * @param {Big} x число для получения логарифма.
     *
     * @return {Big} логарифм числа по заданному основанию.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    static log10(x: Big): Big;
    /**
     * Обертка над {@link BigDecimal#subtract(BigDecimal, MathContext)} для соблюдения требуемой точности.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} разность чисел.
     */
    static minus(left: Big, right: Big): Big;
    /**
     * Обертка над {@link BigDecimal#multiply(BigDecimal, MathContext)} для соблюдения требуемой точности.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} произведение чисел.
     */
    static multiply(left: Big, right: Big): Big;
    /**
     * Обертка над {@link BigDecimal#add(BigDecimal, MathContext)} для соблюдения требуемой точности.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} сумма чисел.
     */
    static plus(left: Big, right: Big): Big;
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
    static pow(x: Big, exponent: Big): Big;
    /**
     * В Java не выполняет никаких операций. В JavaScript откатывает значение {@code Big.DP} к переданному в качестве
     * параметра.
     *
     * @param {number} accuracy устанавливаемая точность расчетов.
     */
    static rollbackBigDecimalAccuracy(accuracy: number): void;
    /**
     * Округляет число во внутреннем представлении интерпретатора в соответствии с обычными правилами (0 в 0, 0.1 в 0,
     * 0.5 в 1, -0.1 в 0, -0.5 в 0, -0.6 в -1).
     *
     * @param {Big} value число для округления.
     *
     * @return {Big} результат округления.
     */
    static round(value: Big): Big;
    /**
     * В Java возвращает текущую точность, используемую в расчетах. В JavaScript устанавливает значение {@code Big.DP} в
     * {@link #ACCURACY} и возвращает значение {@code Big.DP} до установки нового значения.
     *
     * @return {number} точность, используемая в расчетах до применения данной функции.
     */
    static setupBigDecimalAccuracy(): number;
    /**
     * Вычисляет квадратный корень числа.
     *
     * @param {Big} x число для получения квадратного корня.
     *
     * @return {Big} квадратный корень числа.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    static sqrt(x: Big): Big;
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
    static toFixed(value: Big, digits: number): Big;
    /**
     * Обертка над {@link BigDecimal#divide(BigDecimal, MathContext)} с точностью по умолчанию.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} частное чисел.
     */
    static divideUnscaled(left: Big, right: Big): Big;
    /**
     * Проверяет, что объект является числом во внутреннем представлении интерпретатора.
     *
     * @param {*} object объект для проверки.
     *
     * @return {boolean} {@code true}, если объект является числом во внутреннем представлении интерпретатора, {@code false}
     * иначе.
     */
    static isBigDecimal(object: any): boolean;
    /**
     * Обертка над {@link BigDecimal#subtract(BigDecimal, MathContext)} с точностью по умолчанию.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} разность чисел.
     */
    static minusUnscaled(left: Big, right: Big): Big;
    /**
     * Обертка над {@link BigDecimal#multiply(BigDecimal, MathContext)} с точностью по умолчанию.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} произведение чисел.
     */
    static multiplyUnscaled(left: Big, right: Big): Big;
    /**
     * Обертка над {@link BigDecimal#add(BigDecimal, MathContext)} с точностью по умолчанию.
     *
     * @param {Big} left  первый аргумент.
     * @param {Big} right второй аргумент.
     *
     * @return {Big} сумма чисел.
     */
    static plusUnscaled(left: Big, right: Big): Big;
    /**
     * Устанавливает итоговую точность значения.
     *
     * @param {Big} value значение.
     *
     * @return {Big} значение с требуемой точностью.
     * @private
     */
    static scale(value: Big): Big;
}
