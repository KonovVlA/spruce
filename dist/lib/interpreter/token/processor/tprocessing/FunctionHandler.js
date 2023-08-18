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
exports.FunctionHandler = void 0;
var ComputingException_1 = require("../../../exception/ComputingException");
var ValidationException_1 = require("../../../exception/ValidationException");
var AbstractTokenHandler_1 = require("../AbstractTokenHandler");
var CollectionUtils_1 = require("../../../util/CollectionUtils");
var StringUtils_1 = require("../../../util/StringUtils");
/**
 * Обработчик вызовов функций.
 * @extends AbstractTokenHandler
 * @class
 */
var FunctionHandler = /** @class */ (function (_super) {
    __extends(FunctionHandler, _super);
    function FunctionHandler(interpreter) {
        return _super.call(this, interpreter) || this;
    }
    /**
     * Обрабатывает токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат обработки токена.
     */
    FunctionHandler.prototype.handle = function (token, iContext) {
        var isBuiltinFunction = this.interpreter.getFProcessor().hasHandler(token.v);
        var isMacroDefinition = this.interpreter.getMacroDefinitions().hasOwnProperty(token.v);
        if (isBuiltinFunction) {
            return this.interpreter.getFProcessor().interpret(token, iContext);
        }
        else if (isMacroDefinition) {
            var functionCallArguments = ([]);
            var functionCallContextQueueElement = ({});
            var functionCallContext = ([]);
            for (var index = 0; index < token.a.length; index++) {
                var functionArgumentToken = token.a[index];
                {
                    /* add */ (functionCallArguments.push(this.interpreter.getTProcessor().interpret(functionArgumentToken, iContext).v) > 0);
                }
            }
            /* put */ (functionCallContextQueueElement["$args"] = functionCallArguments);
            /* add */ (functionCallContext.push(functionCallContextQueueElement) > 0);
            return this.interpreter.getTProcessor().interpret((CollectionUtils_1.CollectionUtils.get(this.interpreter.getMacroDefinitions(), token.v)), functionCallContext);
        }
        throw new ComputingException_1.ComputingException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\'.");
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
    FunctionHandler.prototype.isReturnTypeLooksLikeBoolean = function (token) {
        this.validate(token);
        var isBuiltinFunction = this.interpreter.getFProcessor().hasHandler(token.v);
        var isMacroDefinition = this.interpreter.getMacroDefinitions().hasOwnProperty(token.v);
        if (isBuiltinFunction) {
            return this.interpreter.getFProcessor().isReturnTypeLooksLikeBoolean(token);
        }
        else if (isMacroDefinition) {
            var macroMap = this.interpreter.getMacroDefinitions();
            return this.interpreter.getTProcessor().isReturnTypeLooksLikeBoolean((CollectionUtils_1.CollectionUtils.get(macroMap, token.v)));
        }
        throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + token.v + "\'.");
    };
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    FunctionHandler.prototype.validate = function (token) {
        var v = token.v;
        if (StringUtils_1.StringUtils.isNullOrEmpty(v)) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f.");
        }
        if (!StringUtils_1.StringUtils.matchByRegExp(v, "^[a-zA-Z][a-zA-Z0-9_]*$")) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u043f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \'" + v + "\'.");
        }
        if (token.a == null) {
            throw new ValidationException_1.ValidationException("\u0412 \u0442\u043e\u043a\u0435\u043d\u0435 \u0432\u044b\u0437\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \'" + v + "\' \u043d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432.");
        }
    };
    return FunctionHandler;
}(AbstractTokenHandler_1.AbstractTokenHandler));
exports.FunctionHandler = FunctionHandler;
FunctionHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.tprocessing.FunctionHandler";
