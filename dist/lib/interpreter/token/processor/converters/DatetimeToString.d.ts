import { AbstractConverter } from './AbstractConverter';
/**
 * Класс преобразования дат в строковые значения.
 * @extends AbstractConverter
 * @class
 */
export declare class DatetimeToString extends AbstractConverter<Date, string> {
    /**
     * Экземпляр класса.
     */
    static INSTANCE: DatetimeToString;
    static INSTANCE_$LI$(): DatetimeToString;
    constructor();
    /**
     * Возвращает экземпляр класса.
     *
     * @return {DatetimeToString} экземпляр класса.
     */
    static getInstance(): DatetimeToString;
    convert$java_util_Date(value: Date): string;
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {Date} value преобразуемое значение.
     *
     * @return {string} полученное значение.
     */
    convert(value?: any): any;
}
