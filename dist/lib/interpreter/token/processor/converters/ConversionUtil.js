"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionUtil = void 0;
/* Generated from Java with JSweet 3.1.0 - http://www.jsweet.org */
var TValues_1 = require("../../TValues");
/**
 * Служебный класс для общего функционала работы с конвертерами данных из одного типа в другой.
 * @class
 */
var ConversionUtil = /** @class */ (function () {
    function ConversionUtil() {
    }
    ConversionUtil.TO_BOOLEAN_MAP_$LI$ = function () { if (ConversionUtil.TO_BOOLEAN_MAP == null) {
        ConversionUtil.TO_BOOLEAN_MAP = ConversionUtil.initToBooleanMap();
    } return ConversionUtil.TO_BOOLEAN_MAP; };
    ConversionUtil.TO_DATETIME_MAP_$LI$ = function () { if (ConversionUtil.TO_DATETIME_MAP == null) {
        ConversionUtil.TO_DATETIME_MAP = ConversionUtil.initToDatetimeMap();
    } return ConversionUtil.TO_DATETIME_MAP; };
    ConversionUtil.TO_NUMBER_MAP_$LI$ = function () { if (ConversionUtil.TO_NUMBER_MAP == null) {
        ConversionUtil.TO_NUMBER_MAP = ConversionUtil.initToNumberMap();
    } return ConversionUtil.TO_NUMBER_MAP; };
    ConversionUtil.TO_STRING_MAP_$LI$ = function () { if (ConversionUtil.TO_STRING_MAP == null) {
        ConversionUtil.TO_STRING_MAP = ConversionUtil.initToStringMap();
    } return ConversionUtil.TO_STRING_MAP; };
    /**
     * Возвращает таблицу конвертеров в логический тип.
     *
     * @return {*} таблица конвертеров в логический тип.
     */
    ConversionUtil.getToBooleanMap = function () {
        return ConversionUtil.TO_BOOLEAN_MAP_$LI$();
    };
    /**
     * Возвращает таблицу конвертеров в дату.
     *
     * @return {*} таблица конвертеров в дату.
     */
    ConversionUtil.getToDatetimeMap = function () {
        return ConversionUtil.TO_DATETIME_MAP_$LI$();
    };
    /**
     * Возвращает таблицу конвертеров в числовой тип.
     *
     * @return {*} таблица конвертеров в числовой тип.
     */
    ConversionUtil.getToNumberMap = function () {
        return ConversionUtil.TO_NUMBER_MAP_$LI$();
    };
    /**
     * Возвращает таблицу конвертеров в строковый тип.
     *
     * @return {*} таблица конвертеров в строковый тип.
     */
    ConversionUtil.getToStringMap = function () {
        return ConversionUtil.TO_STRING_MAP_$LI$();
    };
    /**
     * Инициализирует {@link #TO_BOOLEAN_MAP}.
     *
     * @return {*} содержимое {@link #TO_BOOLEAN_MAP}.
     * @private
     */
    /*private*/ ConversionUtil.initToBooleanMap = function () {
        var map = ({});
        /* put */ (map[TValues_1.TValues.BOOLEAN] = NoOp_1.NoOp.getInstance());
        /* put */ (map[TValues_1.TValues.STRING] = StringToBoolean_1.StringToBoolean.getInstance());
        return map;
    };
    /**
     * Инициализирует {@link #TO_DATETIME_MAP}.
     *
     * @return {*} содержимое {@link #TO_DATETIME_MAP}.
     * @private
     */
    /*private*/ ConversionUtil.initToDatetimeMap = function () {
        var map = ({});
        /* put */ (map[TValues_1.TValues.DATETIME] = NoOp_1.NoOp.getInstance());
        /* put */ (map[TValues_1.TValues.NUMBER] = NumberToDatetime_1.NumberToDatetime.getInstance());
        /* put */ (map[TValues_1.TValues.STRING] = StringToDatetime_1.StringToDatetime.getInstance());
        return map;
    };
    /**
     * Инициализирует {@link #TO_NUMBER_MAP}.
     *
     * @return {*} содержимое {@link #TO_NUMBER_MAP}.
     * @private
     */
    /*private*/ ConversionUtil.initToNumberMap = function () {
        var map = ({});
        /* put */ (map[TValues_1.TValues.DATETIME] = DatetimeToNumber_1.DatetimeToNumber.getInstance());
        /* put */ (map[TValues_1.TValues.NUMBER] = NoOp_1.NoOp.getInstance());
        /* put */ (map[TValues_1.TValues.STRING] = StringToNumber_1.StringToNumber.getInstance());
        return map;
    };
    /**
     * Инициализирует {@link #TO_STRING_MAP}.
     *
     * @return {*} содержимое {@link #TO_STRING_MAP}.
     * @private
     */
    /*private*/ ConversionUtil.initToStringMap = function () {
        var map = ({});
        /* put */ (map[TValues_1.TValues.BOOLEAN] = BooleanToString_1.BooleanToString.getInstance());
        /* put */ (map[TValues_1.TValues.DATETIME] = DatetimeToString_1.DatetimeToString.getInstance());
        /* put */ (map[TValues_1.TValues.NUMBER] = NumberToString_1.NumberToString.getInstance());
        /* put */ (map[TValues_1.TValues.STRING] = NoOp_1.NoOp.getInstance());
        return map;
    };
    return ConversionUtil;
}());
exports.ConversionUtil = ConversionUtil;
ConversionUtil["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.converters.ConversionUtil";
var NumberToString_1 = require("./NumberToString");
var DatetimeToString_1 = require("./DatetimeToString");
var BooleanToString_1 = require("./BooleanToString");
var StringToNumber_1 = require("./StringToNumber");
var DatetimeToNumber_1 = require("./DatetimeToNumber");
var StringToDatetime_1 = require("./StringToDatetime");
var NumberToDatetime_1 = require("./NumberToDatetime");
var StringToBoolean_1 = require("./StringToBoolean");
var NoOp_1 = require("./NoOp");
