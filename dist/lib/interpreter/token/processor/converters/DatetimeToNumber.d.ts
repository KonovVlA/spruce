import { Big } from 'big.js';
import { AbstractConverter } from './AbstractConverter';
/**
 * Класс преобразования дат в числа.
 * @extends AbstractConverter
 * @class
 */
export declare class DatetimeToNumber extends AbstractConverter<Date, Big> {
    /**
     * Экземпляр класса.
     */
    static INSTANCE: DatetimeToNumber;
    static INSTANCE_$LI$(): DatetimeToNumber;
    constructor();
    /**
     * Возвращает экземпляр класса.
     *
     * @return {DatetimeToNumber} экземпляр класса.
     */
    static getInstance(): DatetimeToNumber;
    convert$java_util_Date(value: Date): Big;
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {Date} value преобразуемое значение.
     *
     * @return {Big} полученное значение.
     */
    convert(value?: any): any;
}
