/**
 * Допустимые значения поля {@link Token#v} в случае значения {@link TValues#OPERATION} поля {@link Token#t}.
 * @class
 */
export declare class OValues {
    /**
     * Логическое "и".
     */
    static B_AND: string;
    /**
     * Доступ к элементу массива по индексу, полю объекта по имени.
     */
    static B_ARRAY_LIKE_ACCESS: string;
    /**
     * Деление.
     */
    static B_DIV: string;
    /**
     * Доступ к полю объекта по идентификатору поля.
     */
    static B_DOT_ACCESS: string;
    /**
     * Сравнение на равенство.
     */
    static B_EQ: string;
    /**
     * Создание поля объекта.
     */
    static B_FIELD: string;
    /**
     * Сравнение на больше или равно.
     */
    static B_GE: string;
    /**
     * Сравнение на больше.
     */
    static B_GT: string;
    /**
     * Сравнение на меньше или равно.
     */
    static B_LE: string;
    /**
     * Сравнение на меньше.
     */
    static B_LT: string;
    /**
     * Бинарный минус.
     */
    static B_MINUS: string;
    /**
     * Умножение.
     */
    static B_MUL: string;
    /**
     * Сравнение на неравенство.
     */
    static B_NEQ: string;
    /**
     * Опциональный доступ к полю объекта по идентификатору поля.
     */
    static B_OPTIONAL_ACCESS: string;
    /**
     * Логическое "или".
     */
    static B_OR: string;
    /**
     * Бинарный плюс.
     */
    static B_PLUS: string;
    /**
     * Унарный минус.
     */
    static U_MINUS: string;
    /**
     * Логическое отрицание.
     */
    static U_NOT: string;
    /**
     * Мапинг минифицированных значений операций к полным.
     */
    static MINIFIED_TO_FULL: any;
    static MINIFIED_TO_FULL_$LI$(): any;
    constructor();
    /**
     * Возвращает полное наименование операции по минифицированному значению либо минифицированное значение, если
     * наименование не обнаружено.
     *
     * @param {string} v минифицированное значение поля {@link Token#v}.
     *
     * @return {string} полное наименование операции или минифицированное значение, если наименование отсутствует.
     */
    static getOperationNameOrOperation(v: string): string;
    /**
     * Формирует значения {@link #MINIFIED_TO_FULL}.
     *
     * @return {*} значение для инициализации {@link #MINIFIED_TO_FULL}.
     * @private
     */
    static generateMinifiedToFull(): any;
    /**
     * Возвращает полное наименование операции по минифицированному значению.
     *
     * @param {string} v минифицированное значение поля {@link Token#v}.
     *
     * @return {string} полное наименование операции ({@code null}, если значение отсутствует).
     * @private
     */
    static getOperationName(v: string): string;
}
