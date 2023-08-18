import { ELEngineException } from './ELEngineException';
/**
 * Конструктор.
 *
 * @param {string} message сообщение об ошибке.
 * @class
 * @extends ELEngineException
 */
export declare class ValidationException extends ELEngineException {
    constructor(message: string);
}
