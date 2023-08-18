import { AbstractConverter } from './AbstractConverter';
/**
 * Заглушка для возврата значения без преобразования.
 * @extends AbstractConverter
 * @class
 */
export declare class NoOp extends AbstractConverter<any, any> {
    /**
     * Экземпляр класса.
     */
    static INSTANCE: NoOp;
    static INSTANCE_$LI$(): NoOp;
    constructor();
    /**
     * Возвращает экземпляр класса.
     *
     * @return {NoOp} экземпляр класса.
     */
    static getInstance(): NoOp;
    /**
     * Преобразует данные из одного типа в другой.
     *
     * @param {*} value преобразуемое значение.
     *
     * @return {*} полученное значение.
     */
    convert(value: any): any;
}
