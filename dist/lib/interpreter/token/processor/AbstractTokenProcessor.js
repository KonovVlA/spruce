"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTokenProcessor = void 0;
/**
 * Интерфейс обработчика поля токена.
 * @class
 */
var AbstractTokenProcessor = /** @class */ (function () {
    function AbstractTokenProcessor(interpreter) {
        if (this.interpreter === undefined) {
            this.interpreter = null;
        }
        this.interpreter = interpreter;
    }
    /**
     * Интерпретирует токен.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат интерпретации токена.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    AbstractTokenProcessor.prototype.interpret = function (token, iContext) {
        this.validate(token);
        return this.process(token, iContext);
    };
    return AbstractTokenProcessor;
}());
exports.AbstractTokenProcessor = AbstractTokenProcessor;
AbstractTokenProcessor["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.AbstractTokenProcessor";
