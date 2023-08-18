/**
 * Интерфейс конвертера.
 *
 * @param <F> тип исходных данных.
 * @param <T> целевой тип данных.
 * @class
 */
export declare abstract class AbstractConverter<F, T> {
    /**
     * Целевой тип преобразования.
     */
    targetType: string;
    constructor(targetType: string);
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {*} value преобразуемое значение.
     *
     * @return {*} полученное значение.
     *
     * @throws ComputingException в случае ошибки преобразования данных.
     */
    abstract convert(value: F): T;
    /**
     * Возвращает целевой тип преобразования.
     *
     * @return {string} целевой тип преобразования.
     */
    getTargetType(): string;
}
