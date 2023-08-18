import { Interpreter } from '../../../../Interpreter';
import { Token } from '../../../Token';
import { AbstractNumberHandler } from './AbstractNumberHandler';
/**
 * Абстрактный класс обработчика токена встроенной функции обработки числа с двумя аргументами.
 * @extends AbstractNumberHandler
 * @class
 */
export declare abstract class AbstractTwoArgsNumberHandler extends AbstractNumberHandler {
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
