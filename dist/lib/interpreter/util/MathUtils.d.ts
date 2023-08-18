import { Big } from 'big.js';
/**
 * Математические функции.
 * @class
 */
export declare class MathUtils {
    /**
     * Максимальное целое число, которое может использоваться без переполнения на платформе исполнения интерпретатора.
     */
    static MAX_SAFE_INTEGER: number;
    static MAX_SAFE_INTEGER_$LI$(): number;
    /**
     * Единица.
     */
    static ONE: Big;
    static ONE_$LI$(): Big;
    /**
     * Пороговое значение для определения того, что численный метод сошелся.
     */
    static TOLERANCE: Big;
    static TOLERANCE_$LI$(): Big;
    /**
     * Ноль.
     */
    static ZERO: Big;
    static ZERO_$LI$(): Big;
    constructor();
    /**
     * Вычисляем e^x. Расчет оптимизирован относительно обычного ряда Тейлора разбиением на возведение в степень
     * отдельно целой и дробной части.
     *
     * @param {Big} x показатель экспоненты.
     *
     * @return {Big} e^x.
     */
    static exp(x: Big): Big;
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
     * Вычисляет e^x рядом Тейлора.
     *
     * @param {Big} x показатель экспоненты.
     *
     * @return {Big} e^x.
     * @private
     */
    static expTaylor(x: Big): Big;
    /**
     * Возвращает максимальное допустимое целое число в текущей среде исполнения (Java и JavaScript соответственно).
     *
     * @return {number} максимальное допустимое целое число в текущей среде исполнения.
     * @private
     */
    static initMaxSafeInteger(): number;
    /**
     * Пороговое значение при расчетах.
     *
     * @return {Big} пороговое значение при расчетах.
     * @private
     */
    static initTolerance(): Big;
    /**
     * Возводит число в целую степень.
     *
     * @param {Big} x        основание степени.
     * @param {number} exponent показатель степени.
     *
     * @return {Big} результат возведения числа в целую степень.
     * @private
     */
    static intPower(x: Big, exponent: number): Big;
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
    static intRoot(x: Big, index: number): Big;
    /**
     * Вычисляет натуральный логарифм числа методом Ньютона.
     *
     * @param {Big} x число для взятия натурального логарифма.
     *
     * @return {Big} натуральный логарифм числа.
     * @private
     */
    static lnNewton(x: Big): Big;
    /**
     * Возводит число в целую степень. В случае возникновения исключения возвращает {@link null}.
     *
     * @param {Big} x        основание степени.
     * @param {Big} exponent показатель степени.
     *
     * @return {Big} результат возведения числа в целую степень.
     * @private
     */
    static safeIntPower(x: Big, exponent: Big): Big;
}
