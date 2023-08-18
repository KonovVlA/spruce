/**
 * Служебный функционал для работы с датами.
 * @class
 */
export declare class DatetimeUtils {
    /**
     * Номера месяцев с 30 днями.
     */
    static MONTHS_30: Array<number>;
    static MONTHS_30_$LI$(): Array<number>;
    /**
     * Номера месяцев с 31 днем.
     */
    static MONTHS_31: Array<number>;
    static MONTHS_31_$LI$(): Array<number>;
    constructor();
    /**
     * Добавляет к дате указанное количество дней.
     *
     * @param {Date} date дата для изменения.
     * @param {number} days количество дней для добавления.
     *
     * @return {Date} измененная дата.
     */
    static addDays(date: Date, days: number): Date;
    /**
     * Добавляет к дате указанное количество часов.
     *
     * @param {Date} date  дата для изменения.
     * @param {number} hours количество часов для добавления.
     *
     * @return {Date} измененная дата.
     */
    static addHours(date: Date, hours: number): Date;
    /**
     * Добавляет к дате указанное количество минут.
     *
     * @param {Date} date    дата для изменения.
     * @param {number} minutes количество минут для добавления.
     *
     * @return {Date} измененная дата.
     */
    static addMinutes(date: Date, minutes: number): Date;
    /**
     * Добавляет к дате указанное количество месяцев.
     *
     * @param {Date} date   дата для изменения.
     * @param {number} months количество месяцев для добавления.
     *
     * @return {Date} измененная дата.
     */
    static addMonths(date: Date, months: number): Date;
    /**
     * Добавляет к дате указанное количество лет.
     *
     * @param {Date} date  дата для изменения.
     * @param {number} years количество лет для добавления.
     *
     * @return {Date} измененная дата.
     */
    static addYears(date: Date, years: number): Date;
    /**
     * Возвращает дату в установленном формате.
     *
     * @param {Date} date дата.
     *
     * @return {string} дата в установленном формате.
     */
    static asString(date: Date): string;
    static getDate$java_util_Date(date: Date): Date;
    /**
     * Возвращает дату исходя из наполнения входного массива числами.
     *
     * @param {int[]} date элементы даты.
     *
     * @return {Date} дата.
     */
    static getDateFromParsedArray(date: number[]): Date;
    /**
     * Проверяет корректность даты.
     *
     * @param {number} year  год.
     * @param {number} month месяц.
     * @param {number} day   день месяца.
     *
     * @return {boolean} {@code true} в случае корректной даты, {@code false} иначе.
     */
    static isIncorrectDate(year: number, month: number, day: number): boolean;
    /**
     * Проверяет корректность часа.
     *
     * @param {number} hour час.
     *
     * @return {boolean} {@code true} в случае корректности часа, {@code false} иначе.
     */
    static isIncorrectHour(hour: number): boolean;
    /**
     * Проверяет корректность миллисекунды.
     *
     * @param {number} millisecond миллисекунда.
     *
     * @return {boolean} {@code true} в случае корректности миллисекунды, {@code false} иначе.
     */
    static isIncorrectMillisecond(millisecond: number): boolean;
    /**
     * Проверяет корректность минуты.
     *
     * @param {number} minute минута.
     *
     * @return {boolean} {@code true} в случае корректности минуты, {@code false} иначе.
     */
    static isIncorrectMinute(minute: number): boolean;
    /**
     * Проверяет корректность секунды.
     *
     * @param {number} second секунда.
     *
     * @return {boolean} {@code true} в случае корректности секунды, {@code false} иначе.
     */
    static isIncorrectSecond(second: number): boolean;
    /**
     * Добавляет ведущие нули до требуемой длины строки.
     *
     * @param {number} value  исходное значение.
     * @param {number} digits количество цифр в записи.
     *
     * @return {string} строка с необходимым числом ведущих нулей перед значением.
     * @private
     */
    static addLeadingZeros(value: number, digits: number): string;
    static getDate$int$int$int(year: number, month: number, day: number): Date;
    static getDate$int$int$int$int(year: number, month: number, day: number, hour: number): Date;
    static getDate$int$int$int$int$int(year: number, month: number, day: number, hour: number, minute: number): Date;
    static getDate$int$int$int$int$int$int(year: number, month: number, day: number, hour: number, minute: number, second: number): Date;
    static getDate$int$int$int$int$int$int$int(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number): Date;
    /**
     * Возвращает дату.
     *
     * @param {number} year        год.
     * @param {number} month       месяц (нумеруются с 0 до 11).
     * @param {number} day         день месяца.
     * @param {number} hour        час (нумеруются с 0 до 23).
     * @param {number} minute      минута.
     * @param {number} second      секунда.
     * @param {number} millisecond миллисекунда.
     *
     * @return {Date} дата.
     * @private
     */
    static getDate(year?: any, month?: any, day?: any, hour?: any, minute?: any, second?: any, millisecond?: any): Date;
    /**
     * Возвращает количество дней от начала месяца.
     *
     * @param {Date} date дата.
     *
     * @return {number} количество дней от начала месяца.
     * @private
     */
    static getDay(date: Date): number;
    /**
     * Возвращает час.
     *
     * @param {Date} date дата.
     *
     * @return {number} час.
     * @private
     */
    static getHour(date: Date): number;
    /**
     * Возвращает минуту.
     *
     * @param {Date} date дата.
     *
     * @return {number} минута.
     * @private
     */
    static getMinute(date: Date): number;
    /**
     * Возвращает месяц (январь - 1).
     *
     * @param {Date} date дата.
     *
     * @return {number} месяц (январь - 1).
     * @private
     */
    static getMonth(date: Date): number;
    /**
     * Возвращает год.
     *
     * @param {Date} date дата.
     *
     * @return {number} год.
     * @private
     */
    static getYear(date: Date): number;
    /**
     * Создает множество номеров месяцев.
     *
     * @param {java.lang.Integer[]} indices индексы месяцев.
     *
     * @return {number[]} множество номеров месяцев.
     * @private
     */
    static initMonthSet(...indices: number[]): Array<number>;
}
