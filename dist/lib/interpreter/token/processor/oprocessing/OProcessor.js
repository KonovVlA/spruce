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
exports.OProcessor = void 0;
var ValidationException_1 = require("../../../exception/ValidationException");
var OValues_1 = require("../../OValues");
var AbstractTokenProcessor_1 = require("../AbstractTokenProcessor");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var StringUtils_1 = require("../../../util/StringUtils");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком поля токена.
 * @class
 * @extends AbstractTokenProcessor
 */
var OProcessor = /** @class */ (function (_super) {
    __extends(OProcessor, _super);
    function OProcessor(interpreter) {
        var _this = _super.call(this, interpreter) || this;
        if (_this.handlers === undefined) {
            _this.handlers = null;
        }
        _this.handlers = ({});
        _this.initHandlers();
        return _this;
    }
    /**
     * Инициализирует {@link #handlers}.
     * @private
     */
    /*private*/ OProcessor.prototype.initHandlers = function () {
        /* put */ (this.handlers[OValues_1.OValues.B_PLUS] = new BinaryPlusHandler_1.BinaryPlusHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_MINUS] = new BinaryMinusHandler_1.BinaryMinusHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_MUL] = new BinaryMultiplyHandler_1.BinaryMultiplyHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_DIV] = new BinaryDivideHandler_1.BinaryDivideHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_AND] = new BinaryAndHandler_1.BinaryAndHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_OR] = new BinaryOrHandler_1.BinaryOrHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_EQ] = new BinaryEqualHandler_1.BinaryEqualHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_NEQ] = new BinaryNotEqualHandler_1.BinaryNotEqualHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_LT] = new BinaryLtHandler_1.BinaryLtHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_LE] = new BinaryLeHandler_1.BinaryLeHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_GT] = new BinaryGtHandler_1.BinaryGtHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_GE] = new BinaryGeHandler_1.BinaryGeHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.U_MINUS] = new UnaryMinusHandler_1.UnaryMinusHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.U_NOT] = new UnaryNotHandler_1.UnaryNotHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_FIELD] = new BinaryFieldHandler_1.BinaryFieldHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_DOT_ACCESS] = new BinaryDotAccessHandler_1.BinaryDotAccessHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_OPTIONAL_ACCESS] = new BinaryOptionalAccessHandler_1.BinaryOptionalAccessHandler(this.interpreter));
        /* put */ (this.handlers[OValues_1.OValues.B_ARRAY_LIKE_ACCESS] = new BinaryArrayLikeAccessHandler_1.BinaryArrayLikeAccessHandler(this.interpreter));
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
    OProcessor.prototype.isReturnTypeLooksLikeBoolean = function (token) {
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
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    OProcessor.prototype.process = function (token, iContext) {
        return CollectionUtils_1.CollectionUtils.get(this.handlers, token.v).interpret(token, iContext);
    };
    /**
     * Проверяет токен.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    OProcessor.prototype.validate = function (token) {
        var v = token.v;
        if (StringUtils_1.StringUtils.isNullOrEmpty(v)) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f.");
        }
        if (!this.handlers.hasOwnProperty(v)) {
            throw new ValidationException_1.ValidationException("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \'" + v + "\'.");
        }
    };
    return OProcessor;
}(AbstractTokenProcessor_1.AbstractTokenProcessor));
exports.OProcessor = OProcessor;
OProcessor["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.oprocessing.OProcessor";
var BinaryArrayLikeAccessHandler_1 = require("./BinaryArrayLikeAccessHandler");
var BinaryOptionalAccessHandler_1 = require("./BinaryOptionalAccessHandler");
var BinaryDotAccessHandler_1 = require("./BinaryDotAccessHandler");
var BinaryFieldHandler_1 = require("./BinaryFieldHandler");
var UnaryNotHandler_1 = require("./UnaryNotHandler");
var UnaryMinusHandler_1 = require("./UnaryMinusHandler");
var BinaryGeHandler_1 = require("./BinaryGeHandler");
var BinaryGtHandler_1 = require("./BinaryGtHandler");
var BinaryLeHandler_1 = require("./BinaryLeHandler");
var BinaryLtHandler_1 = require("./BinaryLtHandler");
var BinaryNotEqualHandler_1 = require("./BinaryNotEqualHandler");
var BinaryEqualHandler_1 = require("./BinaryEqualHandler");
var BinaryOrHandler_1 = require("./BinaryOrHandler");
var BinaryAndHandler_1 = require("./BinaryAndHandler");
var BinaryDivideHandler_1 = require("./BinaryDivideHandler");
var BinaryMultiplyHandler_1 = require("./BinaryMultiplyHandler");
var BinaryMinusHandler_1 = require("./BinaryMinusHandler");
var BinaryPlusHandler_1 = require("./BinaryPlusHandler");
