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
exports.ExternalIdHandler = void 0;
var ComputingException_1 = require("../../../exception/ComputingException");
var ValidationException_1 = require("../../../exception/ValidationException");
var InterpreterToken_1 = require("../../InterpreterToken");
var AbstractTokenHandler_1 = require("../AbstractTokenHandler");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var CommonUtils_1 = require("../../../util/CommonUtils");
var StringUtils_1 = require("../../../util/StringUtils");
var ContextWriter_1 = require("../../../util/context/ContextWriter");
/**
 * Обработчик идентификаторов.
 * @extends AbstractTokenHandler
 * @class
 */
var ExternalIdHandler = /** @class */ (function (_super) {
    __extends(ExternalIdHandler, _super);
    function ExternalIdHandler(interpreter, context) {
        var _this = _super.call(this, interpreter) || this;
        if (_this.context === undefined) {
            _this.context = null;
        }
        _this.context = context;
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
    ExternalIdHandler.prototype.updateContextVariable = function (path, value) {
        ContextWriter_1.ContextWriter.write(this.context, path, value);
    };
    /**
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат обработки токена.
     *
     * @throws ComputingException в случае ошибки в ходе вычисления значения выражения.
     */
    ExternalIdHandler.prototype.handle = function (token, iContext) {
        if (!this.context.hasOwnProperty(token.v)) {
            throw new ComputingException_1.ComputingException("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \'" + token.v + "\'.");
        }
        var contextValue = (CollectionUtils_1.CollectionUtils.get(this.context, token.v));
        var valueType = CommonUtils_1.CommonUtils.getType(contextValue);
        return new InterpreterToken_1.InterpreterToken(valueType, contextValue);
    };
    /**
     * Определяет возможен ли у результата вычисления выражения логический тип.
     *
     * @param {Token} token токен.
     *
     * @return {boolean} {@code true}, т.к. выражение представляет собой значение контекстной переменной, которая может быть
     * любого типа.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    ExternalIdHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        return true;
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    ExternalIdHandler.prototype.validate = function (token) {
        var v = token.v;
        if (StringUtils_1.StringUtils.isNullOrEmpty(v)) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f.");
        }
        if (!StringUtils_1.StringUtils.matchByRegExp(v, "^[a-zA-Z][a-zA-Z0-9_]*$")) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430 \u0432 \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \'" + v + "\'.");
        }
    };
    return ExternalIdHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.ExternalIdHandler = ExternalIdHandler;
ExternalIdHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.tprocessing.ExternalIdHandler";
