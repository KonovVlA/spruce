import { AbstractConverter } from './AbstractConverter';
export declare class StringToBoolean extends AbstractConverter<string, boolean> {
    /**
     * Экземпляр класса.
     */
    static INSTANCE: StringToBoolean;
    static INSTANCE_$LI$(): StringToBoolean;
    constructor();
    /**
     * Возвращает экземпляр класса.
     *
     * @return {StringToBoolean} экземпляр класса.
     */
    static getInstance(): StringToBoolean;
    convert$java_lang_String(value: string): boolean;
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {string} value преобразуемое значение.
     *
     * @return {boolean} полученное значение.
     *
     * @throws ComputingException в случае ошибки преобразования данных.
     */
    convert(value?: any): any;
}
