import { Big } from 'big.js';
import { AbstractConverter } from './AbstractConverter';
/**
 * Класс преобразования строк в числа.
 * @extends AbstractConverter
 * @class
 */
export declare class StringToNumber extends AbstractConverter<string, Big> {
    /**
     * Экземпляр класса.
     */
    static INSTANCE: StringToNumber;
    static INSTANCE_$LI$(): StringToNumber;
    constructor();
    /**
     * Возвращает экземпляр класса.
     *
     * @return {StringToNumber} экземпляр класса.
     */
    static getInstance(): StringToNumber;
    convert$java_lang_String(value: string): Big;
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {string} value преобразуемое значение.
     *
     * @return {Big} полученное значение.
     *
     * @throws ComputingException в случае ошибки преобразования данных.
     */
    convert(value?: any): any;
}
