import { Interpreter } from '../../../Interpreter';
import { InterpreterToken } from '../../InterpreterToken';
import { Token } from '../../Token';
import { AbstractDirectComparisonOperationHandler } from './AbstractDirectComparisonOperationHandler';
/**
 * Обработчик операции сравнения на неравно.
 * @extends AbstractDirectComparisonOperationHandler
 * @class
 */
export declare class BinaryNotEqualHandler extends AbstractDirectComparisonOperationHandler {
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
