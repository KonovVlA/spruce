"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatetimeUtils = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
/**
 * Служебный функционал для работы с датами.
 * @class
 */
var DatetimeUtils = /** @class */ (function () {
    function DatetimeUtils() {
    }
    DatetimeUtils.MONTHS_30_$LI$ = function () { if (DatetimeUtils.MONTHS_30 == null) {
        DatetimeUtils.MONTHS_30 = DatetimeUtils.initMonthSet(4, 6, 9, 11);
    } return DatetimeUtils.MONTHS_30; };
    DatetimeUtils.MONTHS_31_$LI$ = function () { if (DatetimeUtils.MONTHS_31 == null) {
        DatetimeUtils.MONTHS_31 = DatetimeUtils.initMonthSet(1, 3, 5, 7, 8, 10, 12);
    } return DatetimeUtils.MONTHS_31; };
    /**
     * Добавляет к дате указанное количество дней.
     *
     * @param {Date} date дата для изменения.
     * @param {number} days количество дней для добавления.
     *
     * @return {Date} измененная дата.
     */
    DatetimeUtils.addDays = function (date, days) {
        var result = new Date(date);
        result.setDate(date.getDate() + days);
        return result;
    };
    /**
     * Добавляет к дате указанное количество часов.
     *
     * @param {Date} date  дата для изменения.
     * @param {number} hours количество часов для добавления.
     *
     * @return {Date} измененная дата.
     */
    DatetimeUtils.addHours = function (date, hours) {
        var result = new Date(date);
        result.setHours(date.getHours() + hours);
        return result;
    };
    /**
     * Добавляет к дате указанное количество минут.
     *
     * @param {Date} date    дата для изменения.
     * @param {number} minutes количество минут для добавления.
     *
     * @return {Date} измененная дата.
     */
    DatetimeUtils.addMinutes = function (date, minutes) {
        var result = new Date(date);
        result.setMinutes(date.getMinutes() + minutes);
        return result;
    };
    /**
     * Добавляет к дате указанное количество месяцев.
     *
     * @param {Date} date   дата для изменения.
     * @param {number} months количество месяцев для добавления.
     *
     * @return {Date} измененная дата.
     */
    DatetimeUtils.addMonths = function (date, months) {
        var y = date.getFullYear(); /* имеющийся год */
        var m = date.getMonth(); /* имеющийся месяц (январь - 0) */
        var d = date.getDate(); /* имеющийся день */
        var hh24 = date.getHours(); /* имеющиеся часы */
        var mm = date.getMinutes(); /* имеющиеся минуты */
        var ss = date.getSeconds(); /* имеющиеся секунды */
        var sss = date.getMilliseconds(); /* имеющиеся миллисекунды */
        var mShiftFull = m + months; /* сдвиг в месяцах относительно начала года */
        var yShift = Math.floor(mShiftFull / 12); /* сдвиг года */
        var yResult = y + yShift; /* год результата */
        var mResult = ((mShiftFull % 12) + 12) % 12; /* месяц результата */
        var lastDayOfResultMonth = new Date(yResult, mResult + 1, 0).getDate();
        var dResult = d <= lastDayOfResultMonth ? d : lastDayOfResultMonth; /* день результата */
        return new Date(yResult, mResult, dResult, hh24, mm, ss, sss);
    };
    /**
     * Добавляет к дате указанное количество лет.
     *
     * @param {Date} date  дата для изменения.
     * @param {number} years количество лет для добавления.
     *
     * @return {Date} измененная дата.
     */
    DatetimeUtils.addYears = function (date, years) {
        var y = date.getFullYear(); /* имеющийся год */
        var m = date.getMonth(); /* имеющийся месяц (январь - 0) */
        var d = date.getDate(); /* имеющийся день */
        var hh24 = date.getHours(); /* имеющиеся часы */
        var mm = date.getMinutes(); /* имеющиеся минуты */
        var ss = date.getSeconds(); /* имеющиеся секунды */
        var sss = date.getMilliseconds(); /* имеющиеся миллисекунды */
        var yResult = y + years; /* год результата */
        var lastDayOfResultMonth = new Date(yResult, m + 1, 0).getDate();
        var dResult = d <= lastDayOfResultMonth ? d : lastDayOfResultMonth; /* день результата */
        return new Date(yResult, m, dResult, hh24, mm, ss, sss);
    };
    /**
     * Возвращает дату в установленном формате.
     *
     * @param {Date} date дата.
     *
     * @return {string} дата в установленном формате.
     */
    DatetimeUtils.asString = function (date) {
        return DatetimeUtils.addLeadingZeros(DatetimeUtils.getDay(date), 2) + "." + DatetimeUtils.addLeadingZeros(DatetimeUtils.getMonth(date), 2) + "." + DatetimeUtils.addLeadingZeros(DatetimeUtils.getYear(date), 4) + " " + DatetimeUtils.addLeadingZeros(DatetimeUtils.getHour(date), 2) + ":" + DatetimeUtils.addLeadingZeros(DatetimeUtils.getMinute(date), 2);
    };
    DatetimeUtils.getDate$java_util_Date = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };
    /**
     * Возвращает дату исходя из наполнения входного массива числами.
     *
     * @param {int[]} date элементы даты.
     *
     * @return {Date} дата.
     */
    DatetimeUtils.getDateFromParsedArray = function (date) {
        switch ((date.length)) {
            case 3:
                return DatetimeUtils.getDate$int$int$int(date[2], date[1] - 1, date[0]);
            case 4:
                return DatetimeUtils.getDate$int$int$int$int(date[2], date[1] - 1, date[0], date[3]);
            case 5:
                return DatetimeUtils.getDate$int$int$int$int$int(date[2], date[1] - 1, date[0], date[3], date[4]);
            case 6:
                return DatetimeUtils.getDate$int$int$int$int$int$int(date[2], date[1] - 1, date[0], date[3], date[4], date[5]);
            default:
                return DatetimeUtils.getDate$int$int$int$int$int$int$int(date[2], date[1] - 1, date[0], date[3], date[4], date[5], date[6]);
        }
    };
    /**
     * Проверяет корректность даты.
     *
     * @param {number} year  год.
     * @param {number} month месяц.
     * @param {number} day   день месяца.
     *
     * @return {boolean} {@code true} в случае корректной даты, {@code false} иначе.
     */
    DatetimeUtils.isIncorrectDate = function (year, month, day) {
        if (month < 1 || month > 12 || day <= 0) {
            return true;
        }
        if ( /* contains */(DatetimeUtils.MONTHS_31_$LI$().indexOf((month)) >= 0)) {
            if (day > 31) {
                return true;
            }
        }
        else if ( /* contains */(DatetimeUtils.MONTHS_30_$LI$().indexOf((month)) >= 0)) {
            if (day > 30) {
                return true;
            }
        }
        else {
            if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                return day > 29;
            }
            else {
                return day > 28;
            }
        }
        return false;
    };
    /**
     * Проверяет корректность часа.
     *
     * @param {number} hour час.
     *
     * @return {boolean} {@code true} в случае корректности часа, {@code false} иначе.
     */
    DatetimeUtils.isIncorrectHour = function (hour) {
        return hour < 0 || hour > 23;
    };
    /**
     * Проверяет корректность миллисекунды.
     *
     * @param {number} millisecond миллисекунда.
     *
     * @return {boolean} {@code true} в случае корректности миллисекунды, {@code false} иначе.
     */
    DatetimeUtils.isIncorrectMillisecond = function (millisecond) {
        return millisecond < 0 || millisecond > 999;
    };
    /**
     * Проверяет корректность минуты.
     *
     * @param {number} minute минута.
     *
     * @return {boolean} {@code true} в случае корректности минуты, {@code false} иначе.
     */
    DatetimeUtils.isIncorrectMinute = function (minute) {
        return minute < 0 || minute > 59;
    };
    /**
     * Проверяет корректность секунды.
     *
     * @param {number} second секунда.
     *
     * @return {boolean} {@code true} в случае корректности секунды, {@code false} иначе.
     */
    DatetimeUtils.isIncorrectSecond = function (second) {
        return DatetimeUtils.isIncorrectMinute(second);
    };
    /**
     * Добавляет ведущие нули до требуемой длины строки.
     *
     * @param {number} value  исходное значение.
     * @param {number} digits количество цифр в записи.
     *
     * @return {string} строка с необходимым числом ведущих нулей перед значением.
     * @private
     */
    /*private*/ DatetimeUtils.addLeadingZeros = function (value, digits) {
        var result = value.toString();
        var sz = result.length;
        while ((sz < digits)) {
            {
                result = "0" + value;
                sz++;
            }
        }
        ;
        return result;
    };
    /*private*/ DatetimeUtils.getDate$int$int$int = function (year, month, day) {
        return new Date(year, month, day);
    };
    /*private*/ DatetimeUtils.getDate$int$int$int$int = function (year, month, day, hour) {
        return new Date(year, month, day, hour);
    };
    /*private*/ DatetimeUtils.getDate$int$int$int$int$int = function (year, month, day, hour, minute) {
        return new Date(year, month, day, hour, minute);
    };
    /*private*/ DatetimeUtils.getDate$int$int$int$int$int$int = function (year, month, day, hour, minute, second) {
        return new Date(year, month, day, hour, minute, second);
    };
    DatetimeUtils.getDate$int$int$int$int$int$int$int = function (year, month, day, hour, minute, second, millisecond) {
        return new Date(year, month, day, hour, minute, second, millisecond);
    };
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
    DatetimeUtils.getDate = function (year, month, day, hour, minute, second, millisecond) {
        if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof day === 'number') || day === null) && ((typeof hour === 'number') || hour === null) && ((typeof minute === 'number') || minute === null) && ((typeof second === 'number') || second === null) && ((typeof millisecond === 'number') || millisecond === null)) {
            return DatetimeUtils.getDate$int$int$int$int$int$int$int(year, month, day, hour, minute, second, millisecond);
        }
        else if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof day === 'number') || day === null) && ((typeof hour === 'number') || hour === null) && ((typeof minute === 'number') || minute === null) && ((typeof second === 'number') || second === null) && millisecond === undefined) {
            return DatetimeUtils.getDate$int$int$int$int$int$int(year, month, day, hour, minute, second);
        }
        else if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof day === 'number') || day === null) && ((typeof hour === 'number') || hour === null) && ((typeof minute === 'number') || minute === null) && second === undefined && millisecond === undefined) {
            return DatetimeUtils.getDate$int$int$int$int$int(year, month, day, hour, minute);
        }
        else if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof day === 'number') || day === null) && ((typeof hour === 'number') || hour === null) && minute === undefined && second === undefined && millisecond === undefined) {
            return DatetimeUtils.getDate$int$int$int$int(year, month, day, hour);
        }
        else if (((typeof year === 'number') || year === null) && ((typeof month === 'number') || month === null) && ((typeof day === 'number') || day === null) && hour === undefined && minute === undefined && second === undefined && millisecond === undefined) {
            return DatetimeUtils.getDate$int$int$int(year, month, day);
        }
        else if (((year != null && year instanceof Date) || year === null) && month === undefined && day === undefined && hour === undefined && minute === undefined && second === undefined && millisecond === undefined) {
            return DatetimeUtils.getDate$java_util_Date(year);
        }
        else
            throw new Error('invalid overload');
    };
    /**
     * Возвращает количество дней от начала месяца.
     *
     * @param {Date} date дата.
     *
     * @return {number} количество дней от начала месяца.
     * @private
     */
    /*private*/ DatetimeUtils.getDay = function (date) {
        return date.getDate();
    };
    /**
     * Возвращает час.
     *
     * @param {Date} date дата.
     *
     * @return {number} час.
     * @private
     */
    /*private*/ DatetimeUtils.getHour = function (date) {
        return date.getHours();
    };
    /**
     * Возвращает минуту.
     *
     * @param {Date} date дата.
     *
     * @return {number} минута.
     * @private
     */
    /*private*/ DatetimeUtils.getMinute = function (date) {
        return date.getMinutes();
    };
    /**
     * Возвращает месяц (январь - 1).
     *
     * @param {Date} date дата.
     *
     * @return {number} месяц (январь - 1).
     * @private
     */
    /*private*/ DatetimeUtils.getMonth = function (date) {
        return date.getMonth() + 1;
    };
    /**
     * Возвращает год.
     *
     * @param {Date} date дата.
     *
     * @return {number} год.
     * @private
     */
    /*private*/ DatetimeUtils.getYear = function (date) {
        return date.getFullYear();
    };
    /**
     * Создает множество номеров месяцев.
     *
     * @param {java.lang.Integer[]} indices индексы месяцев.
     *
     * @return {number[]} множество номеров месяцев.
     * @private
     */
    /*private*/ DatetimeUtils.initMonthSet = function () {
        var indices = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            indices[_i] = arguments[_i];
        }
        return CollectionUtils_1.CollectionUtils.addAll.apply(CollectionUtils_1.CollectionUtils, __spreadArray([([])], indices, false));
    };
    return DatetimeUtils;
}());
exports.DatetimeUtils = DatetimeUtils;
DatetimeUtils["__class"] = "ru.sbrf.ufs.prodsel.elengine.util.DatetimeUtils";
var CollectionUtils_1 = require("./CollectionUtils");
