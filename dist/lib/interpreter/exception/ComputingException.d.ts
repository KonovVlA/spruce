import { ELEngineException } from './ELEngineException';
/**
 * Конструктор.
 *
 * @param {string} message сообщение об ошибке.
 * @param {Error} cause   причина ошибки.
 * @class
 * @extends ELEngineException
 */
export declare class ComputingException extends ELEngineException {
    constructor(message?: any, cause?: any);
}
