import { Interpreter } from '../../../../Interpreter';
import { InterpreterToken } from '../../../InterpreterToken';
import { Token } from '../../../Token';
import { AbstractAddToDateFieldHandler } from './AbstractAddToDateFieldHandler';
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractAddToDateFieldHandler
 */
export declare class AddYearsHandler extends AbstractAddToDateFieldHandler {
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
