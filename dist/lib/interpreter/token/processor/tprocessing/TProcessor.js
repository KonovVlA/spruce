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
exports.TProcessor = void 0;
var ValidationException_1 = require("../../../exception/ValidationException");
var TValues_1 = require("../../TValues");
var AbstractTokenProcessor_1 = require("../AbstractTokenProcessor");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var StringUtils_1 = require("../../../util/StringUtils");
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком поля токена.
 * @param {*} context     контекст скрипта.
 * @class
 * @extends AbstractTokenProcessor
 */
var TProcessor = /** @class */ (function (_super) {
    __extends(TProcessor, _super);
    function TProcessor(interpreter, context) {
        var _this = _super.call(this, interpreter) || this;
        if (_this.handlers === undefined) {
            _this.handlers = null;
        }
        _this.handlers = ({});
        _this.initHandlers(context);
        return _this;
    }
    /**
     * Обновляет значение переменной контекста скрипта.
     *
     * @param {string} path  путь в контексте к обновляемому (устанавливаемому) полю.
     * @param {*} value значение переменной.
     *
     * @throws ContextPathException в случае ошибки формирования контекста.
     */
    TProcessor.prototype.updateContextVariable = function (path, value) {
        (CollectionUtils_1.CollectionUtils.get(this.handlers, TValues_1.TValues.EXTERNAL_ID)).updateContextVariable(path, value);
    };
    /**
     * Инициализирует {@link #handlers}.
     *
     * @param {*} context контекст скрипта.
     * @private
     */
    /*private*/ TProcessor.prototype.initHandlers = function (context) {
        /* put */ (this.handlers[TValues_1.TValues.ARRAY] = new ArrayHandler_1.ArrayHandler(this.interpreter));
        /* put */ (this.handlers[TValues_1.TValues.BOOLEAN] = new BooleanHandler_1.BooleanHandler(this.interpreter));
        /* put */ (this.handlers[TValues_1.TValues.DATETIME] = new DatetimeHandler_1.DatetimeHandler(this.interpreter));
        /* put */ (this.handlers[TValues_1.TValues.EXTERNAL_ID] = new ExternalIdHandler_1.ExternalIdHandler(this.interpreter, context));
        /* put */ (this.handlers[TValues_1.TValues.FUNCTION] = new FunctionHandler_1.FunctionHandler(this.interpreter));
        /* put */ (this.handlers[TValues_1.TValues.INTERNAL_ID] = new InternalIdHandler_1.InternalIdHandler(this.interpreter));
        /* put */ (this.handlers[TValues_1.TValues.NULL] = new NullHandler_1.NullHandler(this.interpreter));
        /* put */ (this.handlers[TValues_1.TValues.NUMBER] = new NumberHandler_1.NumberHandler(this.interpreter));
        /* put */ (this.handlers[TValues_1.TValues.OBJECT] = new ObjectHandler_1.ObjectHandler(this.interpreter));
        /* put */ (this.handlers[TValues_1.TValues.OPERATION] = new OperationHandler_1.OperationHandler(this.interpreter));
        /* put */ (this.handlers[TValues_1.TValues.STRING] = new StringHandler_1.StringHandler(this.interpreter));
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
    TProcessor.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return CollectionUtils_1.CollectionUtils.get(this.handlers, token.t).isReturnTypeLooksLikeBoolean(token);
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
    TProcessor.prototype.process = function (token, iContext) {
        return CollectionUtils_1.CollectionUtils.get(this.handlers, token.t).interpret(token, iContext);
    };
    /**
     * Проверяет токен.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    TProcessor.prototype.validate = function (token) {
        if (token == null) {
            throw new ValidationException_1.ValidationException("\u0422\u043e\u043a\u0435\u043d \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442.");
        }
        var t = token.t;
        if (StringUtils_1.StringUtils.isNullOrEmpty(t)) {
            throw new ValidationException_1.ValidationException("\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d \u0442\u0438\u043f \u0442\u043e\u043a\u0435\u043d\u0430.");
        }
        if (!this.handlers.hasOwnProperty(t)) {
            throw new ValidationException_1.ValidationException("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 \u0442\u043e\u043a\u0435\u043d\u0430 \'" + t + "\'.");
        }
    };
    return TProcessor;
}(AbstractTokenProcessor_1.AbstractTokenProcessor));
exports.TProcessor = TProcessor;
TProcessor["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.tprocessing.TProcessor";
var StringHandler_1 = require("./StringHandler");
var OperationHandler_1 = require("./OperationHandler");
var ObjectHandler_1 = require("./ObjectHandler");
var NumberHandler_1 = require("./NumberHandler");
var NullHandler_1 = require("./NullHandler");
var InternalIdHandler_1 = require("./InternalIdHandler");
var FunctionHandler_1 = require("./FunctionHandler");
var DatetimeHandler_1 = require("./DatetimeHandler");
var BooleanHandler_1 = require("./BooleanHandler");
var ArrayHandler_1 = require("./ArrayHandler");
var ExternalIdHandler_1 = require("./ExternalIdHandler");
