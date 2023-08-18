import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractMultiplicativeOperationTokenHandler } from './AbstractMultiplicativeOperationTokenHandler';
/**
 * Обработчик операции деления.
 * @extends AbstractMultiplicativeOperationTokenHandler
 * @class
 */
export declare class BinaryDivideHandler extends AbstractMultiplicativeOperationTokenHandler {
    constructor(interpreter: Interpreter);
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
    handle(token: Token, iContext: Array<any>): InterpreterToken;
}
