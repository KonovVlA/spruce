import { Big } from 'big.js';
import { AbstractConverter } from './AbstractConverter';
/**
 * Класс преобразования числовых значений в строковые.
 * @extends AbstractConverter
 * @class
 */
export declare class NumberToString extends AbstractConverter<Big, string> {
    /**
     * Экземпляр класса.
     */
    static INSTANCE: NumberToString;
    static INSTANCE_$LI$(): NumberToString;
    constructor();
    /**
     * Возвращает экземпляр класса.
     *
     * @return {NumberToString} экземпляр класса.
     */
    static getInstance(): NumberToString;
    convert$java_math_BigDecimal(value: Big): string;
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {Big} value преобразуемое значение.
     *
     * @return {string} полученное значение.
     */
    convert(value?: any): any;
}
