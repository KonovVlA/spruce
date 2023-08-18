import { Big } from 'big.js';
import { AbstractConverter } from './AbstractConverter';
/**
 * Класс преобразования числовых значений в даты.
 * @extends AbstractConverter
 * @class
 */
export declare class NumberToDatetime extends AbstractConverter<Big, Date> {
    /**
     * Экземпляр класса.
     */
    static INSTANCE: NumberToDatetime;
    static INSTANCE_$LI$(): NumberToDatetime;
    constructor();
    /**
     * Возвращает экземпляр класса.
     *
     * @return {NumberToDatetime} экземпляр класса.
     */
    static getInstance(): NumberToDatetime;
    convert$java_math_BigDecimal(value: Big): Date;
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {Big} value преобразуемое значение.
     *
     * @return {Date} полученное значение.
     *
     * @throws ComputingException в случае ошибки преобразования данных.
     */
    convert(value?: any): any;
}
