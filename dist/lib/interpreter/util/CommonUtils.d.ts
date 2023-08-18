/**
 * Общий служебный функционал.
 * @class
 */
export declare class CommonUtils {
    constructor();
    /**
     * Производит глубокое клонирование объекта интерпретатора.
     *
     * @param {*} source исходный объект.
     * @param <T>    тип исходного объекта.
     *
     * @return {*} объект-клон.
     */
    static deepClone<T>(source: T): T;
    /**
     * Возвращает тип данных внутреннего представления интерпретатора по значению.
     *
     * @param {*} value значение для получения типа.
     *
     * @return {string} тип данных внутреннего представления интерпретатора по значению.
     */
    static getType(value: any): string;
}
