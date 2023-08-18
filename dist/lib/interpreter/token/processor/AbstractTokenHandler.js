"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTokenHandler = void 0;
/**
 * Интерфейс обработчика конкретного значения поля токена.
 * @class
 */
var AbstractTokenHandler = /** @class */ (function () {
    function AbstractTokenHandler(interpreter) {
        if (this.interpreter === undefined) {
            this.interpreter = null;
        }
        this.interpreter = interpreter;
    }
    /**
     * Производит интерпретацию токена.
     *
     * @param {Token} token    токен.
     * @param {*[]} iContext внутренний контекст.
     *
     * @return {InterpreterToken} результат интерпретации токена.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     * @throws ComputingException  в случае ошибки в ходе вычисления значения выражения.
     */
    AbstractTokenHandler.prototype.interpret = function (token, iContext) {
        this.validate(token);
        return this.handle(token, iContext);
    };
    return AbstractTokenHandler;
}());
exports.AbstractTokenHandler = AbstractTokenHandler;
AbstractTokenHandler["__class"] = "ru.sbrf.ufs.prodsel.elengine.token.processor.AbstractTokenHandler";
