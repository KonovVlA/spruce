import { AbstractConverter } from './AbstractConverter';
/**
 * Класс преобразования строковых значений в даты.
 * @extends AbstractConverter
 * @class
 */
export declare class StringToDatetime extends AbstractConverter<string, Date> {
    /**
     * Экземпляр класса.
     */
    static INSTANCE: StringToDatetime;
    static INSTANCE_$LI$(): StringToDatetime;
    constructor();
    /**
     * Возвращает экземпляр класса.
     *
     * @return {StringToDatetime} экземпляр класса.
     */
    static getInstance(): StringToDatetime;
    /**
     * Поднимает исключение с сообщением о неверном значении в поле значения токена.
     *
     * @param {string} v значение в поле значения токена.
     *
     * @throws ComputingException исключение поднимается всегда.
     * @private
     */
    throwOnIncorrectDate(v: string): void;
    convert$java_lang_String(value: string): Date;
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {string} value преобразуемое значение.
     *
     * @return {Date} полученное значение.
     *
     * @throws ComputingException в случае ошибки преобразования данных.
     */
    convert(value?: any): any;
}
