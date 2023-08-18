import { Interpreter } from '../../../../Interpreter';
import { AbstractTypeCheckHandler } from './AbstractTypeCheckHandler';
/**
 * Конструктор.
 *
 * @param {Interpreter} interpreter экземпляр интерпретатора, связанный с данным обработчиком конкретного значения поля токена.
 * @class
 * @extends AbstractTypeCheckHandler
 */
export declare class IsDatetimeTypeCheckHandler extends AbstractTypeCheckHandler {
    constructor(interpreter: Interpreter);
}
