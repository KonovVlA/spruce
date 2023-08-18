/**
 * Конструктор.
 *
 * @param {string} message сообщение об ошибке.
 * @param {Error} cause   причина ошибки.
 * @class
 * @extends Error
 */
export declare class RuntimeComputingException extends Error {
    constructor(message: string, cause: Error);
}
