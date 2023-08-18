/**
 * Допустимые значения поля {@link Token#t}.
 * @class
 */
export declare class TValues {
    /**
     * Значение-массив.
     */
    static ARRAY: string;
    /**
     * Логическое значение.
     */
    static BOOLEAN: string;
    /**
     * Значение даты.
     */
    static DATETIME: string;
    /**
     * Идентификатор.
     */
    static EXTERNAL_ID: string;
    /**
     * Вызов функции (макроса).
     */
    static FUNCTION: string;
    /**
     * Внутренний идентификатор.
     */
    static INTERNAL_ID: string;
    /**
     * {@link null}-значение.
     */
    static NULL: string;
    /**
     * Числовое значение.
     */
    static NUMBER: string;
    /**
     * Значение-объект.
     */
    static OBJECT: string;
    /**
     * Операция.
     */
    static OPERATION: string;
    /**
     * Строковое значение.
     */
    static STRING: string;
    /**
     * Мапинг минифицированных значений типов к полным.
     */
    static MINIFIED_TO_FULL: any;
    static MINIFIED_TO_FULL_$LI$(): any;
    constructor();
    /**
     * Возвращает полное наименование типа токена по минифицированному значению либо минифицированное значение, если
     * наименование не обнаружено.
     *
     * @param {string} t минифицированное значение поля {@link Token#t}.
     *
     * @return {string} полное наименование типа токена или минифицированное значение, если наименование отсутствует.
     */
    static getTypeNameOrType(t: string): string;
    /**
     * Формирует значения {@link #MINIFIED_TO_FULL}.
     *
     * @return {*} значение для инициализации {@link #MINIFIED_TO_FULL}.
     * @private
     */
    static generateMinifiedToFull(): any;
    /**
     * Возвращает полное наименование типа токена по минифицированному значению.
     *
     * @param {string} t минифицированное значение поля {@link Token#t}.
     *
     * @return {string} полное наименование типа токена ({@code null}, если значение отсутствует).
     * @private
     */
    static getTypeName(t: string): string;
}
