/**
 * Служебный класс для общего функционала работы с конвертерами данных из одного типа в другой.
 * @class
 */
export declare class ConversionUtil {
    /**
     * Таблица конвертеров в логический тип.
     */
    static TO_BOOLEAN_MAP: any;
    static TO_BOOLEAN_MAP_$LI$(): any;
    /**
     * Таблица конвертеров в дату.
     */
    static TO_DATETIME_MAP: any;
    static TO_DATETIME_MAP_$LI$(): any;
    /**
     * Таблица конвертеров в числовой тип.
     */
    static TO_NUMBER_MAP: any;
    static TO_NUMBER_MAP_$LI$(): any;
    /**
     * Таблица конвертеров в строковый тип.
     */
    static TO_STRING_MAP: any;
    static TO_STRING_MAP_$LI$(): any;
    constructor();
    /**
     * Возвращает таблицу конвертеров в логический тип.
     *
     * @return {*} таблица конвертеров в логический тип.
     */
    static getToBooleanMap(): any;
    /**
     * Возвращает таблицу конвертеров в дату.
     *
     * @return {*} таблица конвертеров в дату.
     */
    static getToDatetimeMap(): any;
    /**
     * Возвращает таблицу конвертеров в числовой тип.
     *
     * @return {*} таблица конвертеров в числовой тип.
     */
    static getToNumberMap(): any;
    /**
     * Возвращает таблицу конвертеров в строковый тип.
     *
     * @return {*} таблица конвертеров в строковый тип.
     */
    static getToStringMap(): any;
    /**
     * Инициализирует {@link #TO_BOOLEAN_MAP}.
     *
     * @return {*} содержимое {@link #TO_BOOLEAN_MAP}.
     * @private
     */
    static initToBooleanMap(): any;
    /**
     * Инициализирует {@link #TO_DATETIME_MAP}.
     *
     * @return {*} содержимое {@link #TO_DATETIME_MAP}.
     * @private
     */
    static initToDatetimeMap(): any;
    /**
     * Инициализирует {@link #TO_NUMBER_MAP}.
     *
     * @return {*} содержимое {@link #TO_NUMBER_MAP}.
     * @private
     */
    static initToNumberMap(): any;
    /**
     * Инициализирует {@link #TO_STRING_MAP}.
     *
     * @return {*} содержимое {@link #TO_STRING_MAP}.
     * @private
     */
    static initToStringMap(): any;
}
