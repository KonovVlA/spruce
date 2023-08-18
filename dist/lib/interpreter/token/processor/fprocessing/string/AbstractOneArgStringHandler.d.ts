import { Interpreter } from '../../../../Interpreter';
import { Token } from '../../../Token';
import { AbstractStringHandler } from './AbstractStringHandler';
/**
 * Абстрактный класс обработчика токена встроенной функции обработки строки с одним аргументом.
 * @extends AbstractStringHandler
 * @class
 */
export declare abstract class AbstractOneArgStringHandler extends AbstractStringHandler {
    constructor(interpreter: Interpreter);
    /**
     * Производит проверку токена.
     *
     * @param {Token} token токен.
     *
     * @throws ValidationException в случае обнаружения ошибки в данных токена.
     */
    validate(token: Token): void;
}
