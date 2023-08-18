import { AbstractConverter } from './AbstractConverter';
/**
 * Класс преобразования логических значений в строковые.
 * @extends AbstractConverter
 * @class
 */
export declare class BooleanToString extends AbstractConverter<boolean, string> {
    /**
     * Экземпляр класса.
     */
    static INSTANCE: BooleanToString;
    static INSTANCE_$LI$(): BooleanToString;
    constructor();
    /**
     * Возвращает экземпляр класса.
     *
     * @return {BooleanToString} экземпляр класса.
     */
    static getInstance(): BooleanToString;
    convert$java_lang_Boolean(value: boolean): string;
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {boolean} value преобразуемое значение.
     *
     * @return {string} полученное значение.
     */
    convert(value?: any): any;
}
