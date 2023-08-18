"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FProcessor = void 0;
var FValues_1 = require("../../FValues");
var AbstractTokenProcessor_1 = require("../AbstractTokenProcessor");
var FilterHandler_1 = require("./aggregate/FilterHandler");
var FindHandler_1 = require("./aggregate/FindHandler");
var FoldLeftHandler_1 = require("./aggregate/FoldLeftHandler");
var FoldRightHandler_1 = require("./aggregate/FoldRightHandler");
var ForHandler_1 = require("./aggregate/ForHandler");
var IndexOfHandler_1 = require("./aggregate/IndexOfHandler");
var LastIndexOfHandler_1 = require("./aggregate/LastIndexOfHandler");
var MapHandler_1 = require("./aggregate/MapHandler");
var SortHandler_1 = require("./aggregate/SortHandler");
var IfHandler_1 = require("./condition/IfHandler");
var NVLHandler_1 = require("./condition/NVLHandler");
var TryHandler_1 = require("./condition/TryHandler");
var AddDaysHandler_1 = require("./datetime/AddDaysHandler");
var AddHoursHandler_1 = require("./datetime/AddHoursHandler");
var AddMinutesHandler_1 = require("./datetime/AddMinutesHandler");
var AddMonthsHandler_1 = require("./datetime/AddMonthsHandler");
var AddYearsHandler_1 = require("./datetime/AddYearsHandler");
var CurrentDateHandler_1 = require("./datetime/CurrentDateHandler");
var CurrentDatetimeHandler_1 = require("./datetime/CurrentDatetimeHandler");
var AvgHandler_1 = require("./misc/AvgHandler");
var MaxHandler_1 = require("./misc/MaxHandler");
var MinHandler_1 = require("./misc/MinHandler");
var SizeHandler_1 = require("./misc/SizeHandler");
var SumHandler_1 = require("./misc/SumHandler");
var AbsHandler_1 = require("./number/AbsHandler");
var CeilHandler_1 = require("./number/CeilHandler");
var ExpHandler_1 = require("./number/ExpHandler");
var FloorHandler_1 = require("./number/FloorHandler");
var LnHandler_1 = require("./number/LnHandler");
var Log10Handler_1 = require("./number/Log10Handler");
var LogHandler_1 = require("./number/LogHandler");
var PowHandler_1 = require("./number/PowHandler");
var RoundHandler_1 = require("./number/RoundHandler");
var SqrtHandler_1 = require("./number/SqrtHandler");
var ToFixedHandler_1 = require("./number/ToFixedHandler");
var ExistsHandler_1 = require("./object/ExistsHandler");
var SubstrHandler_1 = require("./string/SubstrHandler");
var ToLowerCaseHandler_1 = require("./string/ToLowerCaseHandler");
var ToUpperCaseHandler_1 = require("./string/ToUpperCaseHandler");
var TransliterateHandler_1 = require("./string/TransliterateHandler");
var ToBooleanTypeCastHandler_1 = require("./typecast/ToBooleanTypeCastHandler");
var ToDatetimeTypeCastHandler_1 = require("./typecast/ToDatetimeTypeCastHandler");
var ToNumberTypeCastHandler_1 = require("./typecast/ToNumberTypeCastHandler");
var ToStringTypeCastHandler_1 = require("./typecast/ToStringTypeCastHandler");
var IsArrayTypeCheckHandler_1 = require("./typecheck/IsArrayTypeCheckHandler");
var IsBooleanTypeCheckHandler_1 = require("./typecheck/IsBooleanTypeCheckHandler");
var IsDatetimeTypeCheckHandler_1 = require("./typecheck/IsDatetimeTypeCheckHandler");
var IsNullTypeCheckHandler_1 = require("./typecheck/IsNullTypeCheckHandler");
var IsNumberTypeCheckHandler_1 = require("./typecheck/IsNumberTypeCheckHandler");
var IsObjectTypeCheckHandler_1 = require("./typecheck/IsObjectTypeCheckHandler");
var IsStringTypeCheckHandler_1 = require("./typecheck/IsStringTypeCheckHandler");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком поля токена.
 * @class
 * @extends AbstractTokenProcessor
 */
var FProcessor = /** @class */ (function (_super) {
    __extends(FProcessor, _super);
    function FProcessor(interpreter) {
        var _this = _super.call(this, interpreter) || this;
        if (_this.handlers === undefined) {
            _this.handlers = null;
        }
        _this.handlers = ({});
        _this.initHandlers();
        return _this;
    }
    /**
     * Проверяет, что для заданного имени функции имеется встроенный обработчик.
     *
     * @param {string} functionName имя функции.
     *
     * @return {boolean} {@code true} в случае наличия обработчика, {@code false} иначе.
     */
    FProcessor.prototype.hasHandler = function (functionName) {
        return /* containsKey */ this.handlers.hasOwnProperty(functionName);
    };
    /**
     * Инициализирует {@link #handlers}.
     * @private
     */
    /*private*/ FProcessor.prototype.initHandlers = function () {
        /* put */ (this.handlers[FValues_1.FValues.IF] = new IfHandler_1.IfHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.NVL] = new NVLHandler_1.NVLHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.TRY] = new TryHandler_1.TryHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.IS_ARRAY] = new IsArrayTypeCheckHandler_1.IsArrayTypeCheckHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.IS_BOOLEAN] = new IsBooleanTypeCheckHandler_1.IsBooleanTypeCheckHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.IS_DATETIME] = new IsDatetimeTypeCheckHandler_1.IsDatetimeTypeCheckHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.IS_NULL] = new IsNullTypeCheckHandler_1.IsNullTypeCheckHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.IS_NUMBER] = new IsNumberTypeCheckHandler_1.IsNumberTypeCheckHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.IS_OBJECT] = new IsObjectTypeCheckHandler_1.IsObjectTypeCheckHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.IS_STRING] = new IsStringTypeCheckHandler_1.IsStringTypeCheckHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.TO_BOOLEAN] = new ToBooleanTypeCastHandler_1.ToBooleanTypeCastHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.TO_DATETIME] = new ToDatetimeTypeCastHandler_1.ToDatetimeTypeCastHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.TO_NUMBER] = new ToNumberTypeCastHandler_1.ToNumberTypeCastHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.TO_STRING] = new ToStringTypeCastHandler_1.ToStringTypeCastHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.EXISTS] = new ExistsHandler_1.ExistsHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.TO_LOWER_CASE] = new ToLowerCaseHandler_1.ToLowerCaseHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.TO_UPPER_CASE] = new ToUpperCaseHandler_1.ToUpperCaseHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.TRANSLITERATE] = new TransliterateHandler_1.TransliterateHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.SUBSTR] = new SubstrHandler_1.SubstrHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.MAX] = new MaxHandler_1.MaxHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.MIN] = new MinHandler_1.MinHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.SUM] = new SumHandler_1.SumHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.AVG] = new AvgHandler_1.AvgHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.SIZE] = new SizeHandler_1.SizeHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.FLOOR] = new FloorHandler_1.FloorHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.CEIL] = new CeilHandler_1.CeilHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.ROUND] = new RoundHandler_1.RoundHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.ABS] = new AbsHandler_1.AbsHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.EXP] = new ExpHandler_1.ExpHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.LN] = new LnHandler_1.LnHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.LOG] = new LogHandler_1.LogHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.LOG10] = new Log10Handler_1.Log10Handler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.SQRT] = new SqrtHandler_1.SqrtHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.POW] = new PowHandler_1.PowHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.TO_FIXED] = new ToFixedHandler_1.ToFixedHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.CURRENT_DATE] = new CurrentDateHandler_1.CurrentDateHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.CURRENT_DATETIME] = new CurrentDatetimeHandler_1.CurrentDatetimeHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.ADD_MINUTES] = new AddMinutesHandler_1.AddMinutesHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.ADD_HOURS] = new AddHoursHandler_1.AddHoursHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.ADD_DAYS] = new AddDaysHandler_1.AddDaysHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.ADD_MONTHS] = new AddMonthsHandler_1.AddMonthsHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.ADD_YEARS] = new AddYearsHandler_1.AddYearsHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.FIND] = new FindHandler_1.FindHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.FILTER] = new FilterHandler_1.FilterHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.MAP] = new MapHandler_1.MapHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.FOLD_LEFT] = new FoldLeftHandler_1.FoldLeftHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.FOLD_RIGHT] = new FoldRightHandler_1.FoldRightHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.FOR] = new ForHandler_1.ForHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.INDEX_OF] = new IndexOfHandler_1.IndexOfHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.LAST_INDEX_OF] = new LastIndexOfHandler_1.LastIndexOfHandler(this.interpreter));
        /* put */ (this.handlers[FValues_1.FValues.SORT] = new SortHandler_1.SortHandler(this.interpreter));
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true} если поверхностный анализ выражения допускает логический тип результата, {@code false}
     * иначе.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    FProcessor.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return CollectionUtils_1.CollectionUtils.get(this.handlers, token.v).isReturnTypeLooksLikeBoolean(token);
    };
    /**
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат обработки токена.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токенов.
     */
    FProcessor.prototype.process = function (token, iContext) {
        return CollectionUtils_1.CollectionUtils.get(this.handlers, token.v).interpret(token, iContext);
    };
    /**
     * Проверяет токен.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    FProcessor.prototype.validate = function (token) {
    };
    return FProcessor;
}(AbstractTokenProcessor_1.AbstractTokenProcessor));
exports.FProcessor = FProcessor;
FProcessor["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.fprocessing.FProcessor";
